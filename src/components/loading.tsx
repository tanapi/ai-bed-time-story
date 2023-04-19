import { useContext, useEffect } from 'react'
import { Configuration, OpenAIApi } from "openai";
import { AppContext } from "../pages/_app";

const configuration = new Configuration({
  organization: process.env.NEXT_PUBLIC_OPENAI_API_ORG,
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let isExec = false;

const Loading = () => {
  const {storys, setStorys} = useContext(AppContext);

  useEffect(() => {
    const getStorys = async (exec: boolean) => {
      if (!exec || isExec) return;
      isExec = true;  
      const pompt = process.env.NEXT_PUBLIC_PROMPT ?? ''
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: pompt }],
      });
      const aiAnser = completion.data.choices[0]?.message?.content;
      const storys = aiAnser?.split("\n\n") ?? [""];
      setStorys(storys);
      isExec = false;  
    }
    void getStorys(storys.length == 0);
  }, [setStorys, storys.length]);

  return (storys.length == 0) && (
    <>
      <div className="flex justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
      <p className="text-xl">AIがお話を考えています…</p>
    </>
 )  
}

export default Loading;