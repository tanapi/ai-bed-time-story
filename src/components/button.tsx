import { AppContext } from "../pages/_app";
import { useContext } from 'react'

const Button = () => {
  const {setStorys} = useContext(AppContext);
  const {buttonVisible, setButtonVisible} = useContext(AppContext);

  return buttonVisible && (
    <button
      onClick={() => {
        setStorys([]);
        setButtonVisible(false);
      }}
      className="bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
    >
      <span className="text-4xl material-symbols-outlined">
        sound_sampler
      </span> START
    </button>
  );
}

export default Button;