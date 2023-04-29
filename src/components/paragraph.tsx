import { useContext } from 'react'
import { AppContext } from "../pages/_app";
import { titleMap } from "~/locale/locale";

const MyComponent = () => {
  const {isStart} = useContext(AppContext);
  const {locale} = useContext(AppContext);
  const {storys} = useContext(AppContext);
  const {index} = useContext(AppContext);

  return(
    <>
      <p className='pb-8'>
        <span className="text-4xl material-symbols-outlined">
          auto_stories
        </span> <span className="animate-text-focus-in font-noto">{(isStart) ? titleMap.get(locale) : storys[index]}</span>
      </p>
    </>
  )
}
  
export default MyComponent;