import Content from '../src/components/content';
import Link from 'next/link'
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaPhone, FaDiscord } from 'react-icons/fa';
import { IoMdMail, IoIosPhoneLandscape } from 'react-icons/io'

const Contact = () => {
  return (
    <Content title="Contato" image="/images/mailbox.svg">
    <List fontSize={["15px", "18px"]} spacing={3}>
      <ListItem>
        <ListIcon as={IoMdMail} color="primary" />
        maxhaviland.dev@gmail.com
      </ListItem>
      <ListItem>
        <ListIcon as={FaPhone} color="primary" />
        (82) 9 8733-1724
      </ListItem>
      {/* You can also use custom icons from react-icons */}
      <ListItem>
        <ListIcon as={FaDiscord} color="primary" />
        Dracoliano#9949
      </ListItem>
    </List>
    </Content>
  )
}

export default Contact;