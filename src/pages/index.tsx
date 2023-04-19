import { type NextPage } from "next";
import Layout from "../components/layout";
import Marquee from "react-fast-marquee"
import Button from "../components/button"
import Loading from "../components/loading"
import Paragraph from "../components/paragraph"
import { AppContext } from "../pages/_app";
import { useContext } from 'react'


const Home: NextPage = () => {
  const {buttonVisible, setButtonVisible} = useContext(AppContext);

  return (
    <Layout>
      <div className="text-3xl sm:text-4xl px-4 py-4 max-w-3xl h-max">
        {Paragraph()}
      </div>
      <div className="text-5xl px-4 py-4">
        {Button()}
        {Loading()}
      </div>
      {
        buttonVisible && (
          <div className="max-w-sm">
            <Marquee gradient={false}>
              <div className="mx-5">注意：このサイトは音が出ます</div>
              <div className="mx-5">お子様を寝かしつけるお供に</div>
              <div className="mx-5">大人でもつまらない話で眠くなるかも</div>
            </Marquee>
          </div>
        )
      }
    </Layout>
  );
};

export default Home;
