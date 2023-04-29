import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import React, { type Dispatch, useState } from "react"

export const AppContext = React.createContext(
  {} as {
    storys: string[];
    setStorys: Dispatch<React.SetStateAction<string[]>>;
    index: number;
    setIndex: Dispatch<React.SetStateAction<number>>;
    isStart: boolean;
    setIsStart: Dispatch<React.SetStateAction<boolean>>;
    isPlay: boolean;
    setIsPlay: Dispatch<React.SetStateAction<boolean>>;
    audioContext: AudioContext|null;
    setAudioContext: Dispatch<React.SetStateAction<AudioContext>>;
    locale: string;
    setLocale: Dispatch<React.SetStateAction<string>>;
  }
)

const MyApp: AppType = ({ Component, pageProps }) => {
  const [storys, setStorys] = useState(["無限読み聞かせ"])
  const [index, setIndex] = useState(-1)
  const [isStart, setIsStart] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const [audioContext, setAudioContext] = useState(null as unknown as AudioContext);
  const [locale, setLocale] = useState("ja-JP");

  return (
    <AppContext.Provider value={{
      storys, setStorys, 
      index, setIndex, 
      isStart, setIsStart,
      isPlay, setIsPlay,
      audioContext, setAudioContext,
      locale, setLocale
    }}>
      <Component {...pageProps} key={index} />
    </AppContext.Provider>
  )
};

export default MyApp;
