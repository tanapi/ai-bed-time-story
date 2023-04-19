import { useState, useContext, useEffect } from 'react'
import ReactAudioPlayer from "react-audio-player";
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { AppContext } from "../pages/_app";

const client = new PollyClient({ 
    region: "ap-northeast-1",
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID ?? '',
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY ?? '',
    },
  });

const Paragraph = () => {
  const {storys, setStorys} = useContext(AppContext);
  const {index, setIndex} = useContext(AppContext);

  const [audio, setAudio] = useState<string>("");

  useEffect(() => {
    const blobUrl = async (text: string | undefined) => {
      if (text == undefined || text.length == 0 || text == "無限読み聞かせ") return;
      console.log("--- Call Polly")
      const params = {
        Engine: 'standard',
        LanguageCode: 'ja-JP',
        Text: text,
        TextType: 'text',
        OutputFormat: 'mp3',
        VoiceId: 'Mizuki'
      };
      const command = new SynthesizeSpeechCommand(params);
      const data = await client.send(command);
      const blob = await data.AudioStream?.transformToByteArray();
      const url = URL.createObjectURL(new Blob([blob as Uint8Array]))
      setTimeout(() => {
        setAudio(url);
      }, 1000);
    }
    void blobUrl(storys[index]);
  }, [index, storys]);

  return(
    <>
      <p className='pb-8'>
        <span className="text-4xl material-symbols-outlined">
          auto_stories
        </span> <span className="animate-text-focus-in font-klee">{storys[index]}</span>
      </p>
      <div className="flex flex-row-reverse">
        {storys[index] != undefined &&
         storys[index] != "無限読み聞かせ" &&
         audio && (
          <ReactAudioPlayer 
            src={audio} 
            controls 
            autoPlay={true} 
            onEnded={() => { 
              setTimeout(() => {
                if (storys.length <= index + 1) {
                  setStorys([]);
                  setIndex(0);
                } else {
                  setIndex(index + 1);
                }
              }, 2000);
            }}
          />
        )}
      </div>
    </>
  )
}
  
export default Paragraph;