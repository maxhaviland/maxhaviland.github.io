import { useState, useEffect } from 'react';
import { Image, Container, Text } from '@chakra-ui/react';
import Head from 'next/head';

const notFound = () => {
  const seconds = 15;
	return (
		<>
      <Head>
        <meta http-equiv="refresh" content={`${seconds};url=/`} />
      </Head>
			<Container height="20vh" textAlign="center" display="grid" justifyContent="center" alignItems="center">
				<Text fontSize={80}>404</Text>
				<Text fontSize={25}>NOT FOUND</Text>
			</Container>
			<Container height="80vh" textAlign="center" display="grid" justifyContent="center" alignItems="center">
				<img src="/images/404.svg" height={438} width={373} alt="Página não encontrada" />
				<Text fontSize={22} color="secondary">
					Em breve você será abduzido
				</Text>
			</Container>
		</>
	);
};

export default notFound;
