import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profile from './profile.module.css';

export const Profile: React.FC = () => (
	<div className={profile.container}>
		<img className={profile.picture} src="/images/profile.jpg" height={180} width={180} alt="Max Haviland" />
		<h1>Max Haviland</h1>
		<ul>
			<Link href="https://www.linkedin.com/in/max-haviland/">
				<FaLinkedin fontSize={26} />
			</Link>
			<Link href="https://github.com/maxhaviland">
				<FaGithub fontSize={26} />
			</Link>
		</ul>
		<p>Full Stack Developer.</p>
	</div>
);
