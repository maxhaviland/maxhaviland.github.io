import { FC } from 'react';
import { Text, Box, Container } from '@chakra-ui/react';

interface Props {
	title?: string;
	image?: string;
}

const Content: FC<Props> = ({ title, image, children }) => {
	return (
		<>
			<Text zIndex="3" position="relative" fontSize={['4xl', '4xl', '5xl', '6xl']} marginBottom="3" textAlign="center">
				{title}
			</Text>
			<Container display="flex" justifyContent="center">
				<Box m="0" zIndex="2" fontSize={['sm', 'sm', 'md']} position="relative">
					{children}
				</Box>
				<Box
					zIndex="1"
					backgroundImage={`url(${image})`}
					backgroundSize="100% 100%"
					backgroundRepeat="no-repeat"
					opacity={['0', '0', '70%', '100%']}
					height={['200px', '200px', '240px', '320px']}
					width="600px"
					bottom="-1"
					right={[0, 0, -40, 0]}
					position="fixed"
				/>
			</Container>
		</>
	);
};

export default Content;
