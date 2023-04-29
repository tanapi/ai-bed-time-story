import { useContext } from 'react'
import { AppContext } from "../pages/_app";

const Paragraph = () => {
  const {storys} = useContext(AppContext);
  const {index} = useContext(AppContext);

  return(
    <>
      <p className='pb-8'>
        <span className="text-4xl material-symbols-outlined">
          auto_stories
        </span> <span className="animate-text-focus-in font-klee">{storys[(index<0) ? 0 : index]}</span>
      </p>
    </>
  )
}
  
export default Paragraph;