import Head from "next/head";

const Layout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Head>
        <title>無限読み聞かせ</title>
        <meta name="description" content="AIが作ったおとぎ話を読み上げます" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link href="https://fonts.googleapis.com/css2?family=Klee+One:wght@600&display=swap" rel="stylesheet"/>
      </Head>
      <main className="flex h-screen flex-col items-center justify-center bg-black text-gray-300">
        { children }
      </main>
    </>
  );
}

export default Layout;