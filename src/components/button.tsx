import { AppContext } from "../pages/_app";
import { useContext } from 'react'

const MyComponent = () => {
  const {storys, setStorys} = useContext(AppContext);
  const {isStart, setIsStart} = useContext(AppContext);
  const {audioContext, setAudioContext} = useContext(AppContext);
  const {isPlay, setIsPlay} = useContext(AppContext);
 
  return (storys.length != 0) && (
    <div className="text-5xl px-4 py-4">
      <button
        onClick={() => {
          if (audioContext == null){
            setAudioContext(new AudioContext);
            setStorys([]);
            setIsStart(false);
          } else {
            if (audioContext?.state == 'running') {
              void audioContext.suspend().then(() => {
                setIsPlay(false);
              });
            } else {
              void audioContext?.resume().then(() => {
                setIsPlay(true);
              });
            }
          }
        }}
        className="bg-transparent text-gray-500 font-semibold active:bg-gray-500 active:text-white py-2 px-4 border border-gray-500 hover:border-gray-200 rounded"
      >
        <span className="text-4xl material-symbols-outlined">
          { (isPlay) ? ( "pause_circle" ) : ( "play_circle" ) }
        </span> { (isStart) ? ( "START" ) : ( (isPlay) ? ( "PAUSE" ) : ( "PLAY") ) }
      </button>
    </div>
  );
}

export default MyComponent;