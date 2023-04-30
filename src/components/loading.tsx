import { useContext } from 'react'
import { AppContext } from "../pages/_app";
import { loadingMap } from "~/locale/locale";

const MyComponent = () => {
  const {storys} = useContext(AppContext);
  const {locale} = useContext(AppContext);

  return (storys.length == 0) && (
    <div className="text-5xl px-4 py-4">
      <div className="flex justify-center py-4">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
      <p className="text-xl">{loadingMap.get(locale)}</p>
    </div>
 )  
}

export default MyComponent;