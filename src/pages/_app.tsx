import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import React, { type Dispatch, useState } from "react"

export const AppContext = React.createContext(
  {} as {
    storys: string[];
    setStorys: Dispatch<React.SetStateAction<string[]>>;
    index: number;
    setIndex: Dispatch<React.SetStateAction<number>>;
    buttonVisible: boolean;
    setButtonVisible: Dispatch<React.SetStateAction<boolean>>;
    isPlay: boolean;
    setIsPlay: Dispatch<React.SetStateAction<boolean>>;
    audioContext: AudioContext|null;
    setAudioContext: Dispatch<React.SetStateAction<AudioContext>>;
  }
)

const MyApp: AppType = ({ Component, pageProps }) => {
  const [storys, setStorys] = useState(["無限読み聞かせ"])
  const [index, setIndex] = useState(-1)
  const [buttonVisible, setButtonVisible] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const [audioContext, setAudioContext] = useState(null as unknown as AudioContext);

  return (
    <AppContext.Provider value={{
      storys, setStorys, 
      index, setIndex, 
      buttonVisible, setButtonVisible,
      isPlay, setIsPlay,
      audioContext, setAudioContext
    }}>
      <Component {...pageProps} key={index} />
    </AppContext.Provider>
  )
};

export default MyApp;
