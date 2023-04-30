import Head from "next/head";

const Layout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Head>
        <title>AI Bed-Time Story</title>
        <meta name="description" content="AIが作ったおとぎ話を読み上げます/AI reads out fairy tales created by AI" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Noto+Serif+JP:wght@600&family=Noto+Serif+KR:wght@600&family=Noto+Serif+SC:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <main className="flex h-screen flex-col items-center justify-center bg-black text-gray-300">
        { children }
      </main>
    </>
  );
}

export default Layout;