import { FC } from 'react';
<<<<<<< HEAD
import { Flex, Link, Box, Image, SystemProps } from '@chakra-ui/react';
import Drawer from './drawer';
import { useRouter } from 'next/router';
import routes from '../../routes';
import { FaPhone, FaDiscord } from 'react-icons/fa';
import { IoMdMail, IoIosPhoneLandscape } from 'react-icons/io'
=======
import { Flex, Link, Box, Img, SystemProps } from '@chakra-ui/react';
import Drawer from './drawer';
import { useRouter } from 'next/router';
import routes from '../../routes';
>>>>>>> 84fb4c4764e042a1aca851362dd50ce338ba70fc
export interface NavListProps {
  direction?: SystemProps['flexDirection']
}

const NavList: FC<NavListProps> = ({ direction }) => {
  const {asPath} = useRouter();
  return (
    <Flex direction={direction}>
      {routes.map(route => (
        <Link 
          color={asPath === route.path ? 'secondary' : 'white'} 
          px={10} 
          my="0" 
          href={route.path}
        >
          {route.name}
        </Link>
      ))}
    </Flex>
  )
}

const Menu = () => {
  return (
    <>
      <Flex    
        animation="ease-in"
        as="nav"
        margin="0"
        width="full"
        position="fixed"
        top="0"
        zIndex="4"
      >
        <Box 
          display={['none', 'none', 'block']}
          backgroundImage="url('/images/profile.svg')"
          backgroundSize="100% 100%"
          width={{
            lg: 350,
            md: 300
          }}
          height={{
            base: 212
          }}
          marginTop={{
            lg: "-4",
            md: "-10"
          }}
          marginLeft="-4"
          zIndex="2"
        />
        <Box 
          bg="primary" 
          color="white"
          width="full"
          py='5'
          height={[12, 14, 16]}
          marginY="0"
          marginX={[0, 0, -10]}
          shadow="md"
        >
          <Box 
            display={['none', 'none', 'block']}
            marginLeft="10"
          >
            <NavList />
          </Box>
          <Drawer 
            display={['block', 'block', 'none']} 
          />
        </Box>
      </Flex>
      <Box marginBottom={['5rem', '6rem']} />
    </>
  )
}

export default Menu;
