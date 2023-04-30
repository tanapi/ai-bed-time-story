import { AppContext } from "../pages/_app";
import { useContext } from 'react'
import Select from 'react-select'
import { locales } from '../locale/locale'

const MyComponent = () => {
  const {isStart} = useContext(AppContext);
  const {locale, setLocale} = useContext(AppContext);

  let localesIndex = 0;
  locales.forEach((locItem, index) => {
    if(locItem.value == locale) {
      localesIndex = index;
      return;
    }
  });

  return isStart && (
    <div className="text-xl px-4 pt-6 pb-24">
      <Select
        instanceId="selectLocale"
        options={locales}
        value={locales[localesIndex]}
        onChange={(value) => {
          setLocale(value?.value as string);
        }}
      />
    </div>
  );
}

export default MyComponent;