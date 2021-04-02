import { FC } from 'react';
import { Flex, Link, Box, SystemProps } from '@chakra-ui/react';
import Drawer from './drawer';
import { useRouter } from 'next/router';
import routes from '../../routes';

export interface NavListProps {
	direction?: SystemProps['flexDirection'];
}

const NavList: FC<NavListProps> = ({ direction }) => {
	const { asPath } = useRouter();
	const routeList = (route: Route) => (
		<Link key={route.name} color={asPath === route.path ? 'secondary' : 'white'} px={10} my="0" href={route.path}>
			{route.name}
		</Link>
	)
	return (
		<Flex direction={direction}>
			{routes.map(routeList)}
		</Flex>
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
					backgroundImage="url('/images/profile.svg')"
					backgroundSize="100% 100%"
					width={{
						lg: 360,
						md: 300,
					}}
					height={{
						base: 280,
					}}
					marginTop={{
						lg: '-7',
						md: '-14',
					}}
					marginLeft="-4"
					zIndex="2"
				/>
				<Box
					bg="primary"
					color="white"
					width="full"
					py="5"
					height={[12, 14, 16]}
					marginY="0"
					marginX={[0, 0, -10]}
					shadow="md">
					<Box display={['none', 'none', 'block']} marginLeft="10">
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
