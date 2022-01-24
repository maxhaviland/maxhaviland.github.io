import Content from '../src/components/content';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaPhone, FaDiscord } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IconType } from 'react-icons';
import Menu from '../src/components/menu';

const Contact = () => {
	const contactList: string[] = ['', '', ''];
	const iconContactList: IconType[] = [IoMdMail, FaPhone, FaDiscord];

	const contactListItem = (listItem: string, index: number) => (
		<ListItem key={listItem}>
			<ListIcon as={iconContactList[index]} color="primary" />
			{listItem}
		</ListItem>
	);

	return (
		<>
			<Menu />
			<Content title="Contato" image="/images/mailbox.svg">
				<List fontSize={['15px', '18px']} spacing={3}>
					{contactList.map(contactListItem)}
				</List>
			</Content>
		</>
	);
};

export default Contact;
