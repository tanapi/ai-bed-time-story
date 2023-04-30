import { useContext } from 'react'
import { AppContext } from "../pages/_app";
import { titleMap } from "~/locale/locale";

const MyComponent = () => {
  const {isStart} = useContext(AppContext);
  const {locale} = useContext(AppContext);
  const {storys} = useContext(AppContext);
  const {index} = useContext(AppContext);

  return(
    <div className="text-3xl sm:text-4xl px-4 py-4 max-w-3xl h-max">
      <p className='pb-8'>
        <span className="text-4xl material-symbols-outlined">
          auto_stories
        </span> <span className="animate-text-focus-in font-noto">{(isStart) ? titleMap.get(locale) : storys[index]}</span>
      </p>
    </div>
  )
}
  
export default MyComponent;