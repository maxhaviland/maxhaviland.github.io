import Head from 'next/head';
import Menu from '../src/components/menu';
import ThemeProvider from '../src/contexts/theme';
import { Container } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Max Haviland</title>
			</Head>
			<ThemeProvider>
				<Menu />
				<Container maxW="100vw" w={['sm', '90vw', 'xl', 'lg']} p="0">
					<Component {...pageProps} />
				</Container>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
