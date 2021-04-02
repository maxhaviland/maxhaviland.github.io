import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const MEASUREMENT_ID = 'G-L8MXKTZ5CN';
    return (
      <Html>
        <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: 
                `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${MEASUREMENT_ID}');`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument