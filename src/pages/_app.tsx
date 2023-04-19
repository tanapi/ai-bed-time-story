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
  }
)

const MyApp: AppType = ({ Component, pageProps }) => {
  const [storys, setStorys] = useState(["無限読み聞かせ"])
  const [index, setIndex] = useState(0)
  const [buttonVisible, setButtonVisible] = useState(true);

  return (
    <AppContext.Provider value={{
      storys, setStorys, 
      index, setIndex, 
      buttonVisible, setButtonVisible}}>
      <Component {...pageProps} key={index} />
    </AppContext.Provider>
  )
};

export default MyApp;
