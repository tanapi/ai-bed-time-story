import { type NextPage } from "next";
import Layout from "../components/layout";
import Marquee from "react-fast-marquee"
import Button from "../components/button"
import Loading from "../components/loading"
import Select from "../components/select"
import Paragraph from "../components/paragraph"
import { AppContext } from "../pages/_app";
import { useContext, useEffect } from 'react'
import { Configuration, OpenAIApi } from "openai";
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import axios from 'axios';
import { noteMap, pollyVoiceMap, promptMap } from "~/locale/locale";

const configuration = new Configuration({
  organization: process.env.NEXT_PUBLIC_OPENAI_API_ORG,
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let isChatGPTExec = false;
let isPollyExec = false;

const client = new PollyClient({ 
  region: "ap-northeast-1",
  credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY ?? '',
  },
});


const Home: NextPage = () => {
  const {isStart} = useContext(AppContext);
  const {storys, setStorys} = useContext(AppContext);
  const {index, setIndex} = useContext(AppContext);
  const {audioContext} = useContext(AppContext);
  const {setIsPlay} = useContext(AppContext);
  const {locale} = useContext(AppContext);

  useEffect(() => {
    const getStorys = async (exec: boolean) => {
      if (!exec || isChatGPTExec) return;

      isChatGPTExec = true;  
      let prompt = process.env.NEXT_PUBLIC_PROMPT ?? '';
      prompt = prompt.concat(promptMap.get(locale) ?? '');
      console.log(prompt);
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      const aiAnser = completion.data.choices[0]?.message?.content;
      const storys = aiAnser?.split("\n\n") ?? [""];
      setStorys(storys);
      setIndex(0);
      isChatGPTExec = false;  
    }
    void getStorys(storys.length == 0);
  }, [storys]);

  useEffect(() => {
    const playStory = async (text: string | undefined) => {
      if (text == undefined || text.length == 0 || storys.length == 1 || isPollyExec) return;
      console.log("--- Polly");
      isPollyExec = true;
      const params = {
        Engine: 'standard',
        LanguageCode: locale,
        Text: text,
        TextType: 'text',
        OutputFormat: 'mp3',
        VoiceId: pollyVoiceMap.get(locale)
      };
      const command = new SynthesizeSpeechCommand(params);
      const data = await client.send(command);
      const blob = await data.AudioStream?.transformToByteArray();
      const url = URL.createObjectURL(new Blob([blob as Uint8Array],{type: 'audio/mpeg'} ))
      void axios.get(url, {responseType: 'arraybuffer'}).then(res => {
          void audioContext?.decodeAudioData(res.data as ArrayBuffer).then(async buffer => {
          const source = audioContext?.createBufferSource();
          source.buffer = buffer;
          source.loop = false;
          source.connect(audioContext.destination);
          source.onended = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (storys.length <= index + 1) {
              setIsPlay(false);
              setStorys([]);
              setIndex(-1);
            } else {
              setIndex(index + 1);
            }
          };
          setIsPlay(true);
          await new Promise(resolve => setTimeout(resolve, 1000));
          source.start(0);
          isPollyExec = false;
        })
      });
    }
    void playStory(storys[index]);
  }, [index]);

  return (
    <Layout>
      <div className="text-3xl sm:text-4xl px-4 py-4 max-w-3xl h-max">
        {Paragraph()}
      </div>
      <div className="text-xl px-4 py-8">
        {Select()}
      </div>
      <div className="text-5xl px-4 py-4">
        {Button()}
      </div>
      <div className="text-5xl px-4 py-4">
        {Loading()}
      </div>
       {
        isStart && (
          <div className="max-w-sm">
            <Marquee gradient={false}>
              <div className="mx-5">　　　　　</div>
              <div className="mx-5">{noteMap.get(locale)?.at(0)}</div>
              <div className="mx-5">{noteMap.get(locale)?.at(1)}</div>
              <div className="mx-5">{noteMap.get(locale)?.at(2)}</div>
            </Marquee>
          </div>
        )
      }
      <div className="absolute inset-x-0 bottom-0 h-8">
        <div className="flex justify-center text-gray-800">
          @tana_p 2023
        </div>
      </div>
    </Layout>
  );
};

export default Home;
