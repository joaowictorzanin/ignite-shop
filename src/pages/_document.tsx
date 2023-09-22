import { getCssText } from '@/styles'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  // configuração sever side rendring stitches
  //<style id="stitches" dangerouslySetInnerHTML={{__html: getCssText}}/>
  
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

        
        <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
