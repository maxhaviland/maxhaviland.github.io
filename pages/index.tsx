import Content from '../src/components/content';
import Link from 'next/link'
import { Text, Button, Stack, Link as ChakraLink } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaWhatsappSquare } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri'

const SocialButton = ({href, title, ...props}) => {
  return (
    <Link href={href}>
      <a target="blank">
        <Button 
          variant="solid"
          bgColor="primary"
          color="white"
          _hover={{
            color: "secondary",
          }} 
          height={["60px", "40px"]}
          fontSize={["18px", "15px"]}
          width={["full", "125px"]} 
          {...props}
        >
          {title}
        </Button>
      </a>
    </Link>
  )
}
const Home = () => {
  return (
    <>
      <Content title="Max Haviland" image={process.env.NEXT_PUBLIC_BASE_PATH+"/images/home.svg"}>
        <Text textAlign="justify">
          Atualmente sou um full stack developer, com mais experiência 
          como front end. Sou um amante da programação, em especial 
          com a linguagem Javascript. As tecnologias que domino atualmente
          são: {' '}
          <b>
            ReactJS, NodeJS, Flutter, MongoDB, Postgres e Oracle. 
          </b>
        </Text>
        <Text mt="4">
          Como você chegou aqui não me importa, apenas seja bem-vindo. 
          Caso se interesse pelo meu trabalho,
          {' '} <ChakraLink href="/contact">clique aqui</ChakraLink> 
          {' '} e entre em contato comigo.
        </Text>
        <Stack direction={["column", "row", "row"]} my={[10, 5]} spacing={[5, 6]}>
          <SocialButton title="Github" href="https://github.com/maxhaviland" leftIcon={<FaGithub size="20"/>}/>
          <SocialButton title="Linkedin" href="https://www.linkedin.com/in/max-haviland-a54574187/" leftIcon={<FaLinkedin size="20"/>}/>
          <SocialButton title="WhatsApp" href="https://api.whatsapp.com/send?phone=+5582987331724&text=Olá, Max! Encontrei o seu site e gostaria de saber mais sobre o seu trabalho." leftIcon={<RiWhatsappFill size="20" />}/>
        </Stack>
      </Content>
    </>
  )
}

export default Home;