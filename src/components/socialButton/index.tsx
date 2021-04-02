import React, { FC } from 'react';
import { UrlObject } from 'url';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';

interface Props {
	title: string;
	href: UrlObject | string;
	leftIcon: JSX.Element;
}

const SocialButton: FC<Props> = ({ href, title, leftIcon }) => {
	return (
		<Link href={href}>
			<a target="blank">
				<Button
					variant="solid"
					bgColor="primary"
					color="white"
					_hover={{
						color: 'secondary',
					}}
					height={['60px', '40px']}
					fontSize={['18px', '15px']}
					width={['full', '125px']}
					leftIcon={leftIcon}>
					{title}
				</Button>
			</a>
		</Link>
	);
};

export default SocialButton;
