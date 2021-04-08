import { FC } from 'react';
import { useRouter } from 'next/router';
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	Stack,
	useDisclosure,
	Box,
	Link,
	SystemProps,
	DrawerProps,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GoEyeClosed } from 'react-icons/go';
import routes from '../../routes';

interface CustomDrawerProps {
	display?: SystemProps['display'];
	placement?: DrawerProps['placement'];
}

const CustomDrawer: FC<CustomDrawerProps> = ({ display, placement = 'left' }) => {
	const { asPath } = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const routeList = (route: Route) => (
		<Box key={route.name} m="0" h="10">
			<Link
				textColor={asPath === route.path ? 'secondary' : 'primary'}
				_hover={{ textColor: 'secondary' }}
				href={route.path}>
				{route.name}
			</Link>
		</Box>
	);

	return (
		<>
			<Box
				_hover={{
					opacity: 0.7,
				}}
				ml="10"
				mt={[-2, -1]}
				w={30}
				cursor="pointer"
				onClick={onOpen}
				display={display}>
				<AiOutlineMenu size="1.6em" />
			</Box>
			<Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay>
					<DrawerContent>
						<Box
							right="4"
							top="2"
							position="absolute"
							w="10"
							h="10"
							rounded={'100%'}
							icon={<GoEyeClosed />}
							_hover={{ color: 'button' }}
						/>
						<DrawerHeader>Menu</DrawerHeader>
						<DrawerBody>
							<Stack display="flex" justify="center" m="0 auto">
								{routes.map(routeList)}
							</Stack>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};
export default CustomDrawer;
