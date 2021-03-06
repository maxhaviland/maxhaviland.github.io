import { FC } from 'react';
import { Flex, Link, Box, SystemProps, List, ListItem, Image } from '@chakra-ui/react';
import Drawer from './drawer';
import { useRouter } from 'next/router';
import routes from '../../routes';
import Picture from '../picture';

export interface NavListProps {
	direction?: SystemProps['flexDirection'];
}

const NavList: FC<NavListProps> = ({ direction }) => {
	const { asPath } = useRouter();
	const routeList = (route: Route) => (
		<ListItem key={route.name}>
			<Link
				_hover={{ color: 'secondary' }}
				color={asPath === route.path ? 'secondary' : 'white'}
				px={10}
				my="0"
				href={route.path}>
				{route.name}
			</Link>
		</ListItem>
	);
	return (
		<List display="flex" direction={direction}>
			{routes.map(routeList)}
		</List>
	);
};

const Menu = () => {
	return (
		<>
			<Flex
				height={['56px', '56px', '64px']}
				animation="ease-in"
				as="nav"
				margin="0"
				width="full"
				position="fixed"
				top="0"
				zIndex="4">
				<Box
					display={['none', 'none', 'block']}
					marginTop={{
						lg: 0,
						md: -7
					}}
					marginLeft="-4"
					zIndex="2"
				>
					<Picture />
				</Box>
				<Box
					bg="primary"
					color="white"
					width="full"
					py="5"
					height={[12, 14, 16]}
					marginY="0"
					marginX={[0, 0, -10]}
					shadow="md">
					<Box as="nav" display={['none', 'none', 'block']} marginLeft="10">
						<NavList />
					</Box>
					<Drawer display={['block', 'block', 'none']} />
				</Box>
			</Flex>
			<Box marginBottom={['5rem', '6rem']} />
		</>
	);
};

export default Menu;
