import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
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
