import Head from "next/head";
import Script from "next/script";

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
      <Script
         strategy="afterInteractive"
         src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID ?? ""}`}
       />
       <Script
         id="gtag-init"
         strategy="afterInteractive"
         dangerouslySetInnerHTML={{
           __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${process.env.NEXT_PUBLIC_GA_ID ?? ""}');
           `,
         }}
       />
    </>
  );
}

export default Layout;