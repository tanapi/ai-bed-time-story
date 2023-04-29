import { useContext } from 'react'
import { AppContext } from "../pages/_app";

const Loading = () => {
  const {storys} = useContext(AppContext);

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