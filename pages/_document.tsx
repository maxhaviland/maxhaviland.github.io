import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		const MEASUREMENT_ID = 'G-L8MXKTZ5CN';
		const keywords = ['github', 'HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'Flutter', 'Desenvolvimento Web, Web Developer, NodeJS, Dracoliano, Banco de dados, MongoDB, Postgres, Oracle'];
		const author = 'Max Haviland';
		return (
			<Html>
				<Head>
					<meta charSet="UTF-8" />
					<meta name="description" content={author} />
					<meta name="keywords" content={keywords.join(', ')}/>
					<meta name="author" content={author} />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>Max Haviland</title>
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}></script>
					<script
						data-ad-client="ca-pub-3193469056099321"
						async
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${MEASUREMENT_ID}');`,
						}}
					/>
					<noscript>
						{null}
						<style jsx global>{`
							@media only screen and (min-width: 30em) {
								.noscript-menu {
									display: block !important;
								}
							}
					`}</style>
					</noscript>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
