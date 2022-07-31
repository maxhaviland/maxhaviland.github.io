import React, { FC } from 'react';
import { VscEye, VscCode, VscEyeClosed } from 'react-icons/vsc';
import { TbBrandReactNative } from 'react-icons/tb';
import { DiReact, DiNodejsSmall } from 'react-icons/di';
import { SiFlutter, SiTypescript, SiDart, SiRedux, SiJavascript, SiMaterialui } from 'react-icons/si';
import projectCardModule from './projectCard.module.css';
import { Project, Stack } from '../../types';
import Link from 'next/link';

interface ProjectCardProps extends Omit<Project, 'description'> {}

const ProjectCard: FC<ProjectCardProps> = ({ image, link, repository, stacks, title }) => {
	const icons = {
		[Stack.Dart]: <SiDart color="#046bba" />,
		[Stack.Flutter]: <SiFlutter color="#0091ff" />,
		[Stack.Javascript]: <SiJavascript color="#d5db04" />,
		[Stack.Material]: <SiMaterialui color="#004aeb" />,
		[Stack.Node]: <DiNodejsSmall color="#0e6600" size={24} />,
		[Stack.React]: <DiReact size={24} color="#1279ff" />,
		[Stack.ReactNative]: <TbBrandReactNative size={20} color="#005cd4" />,
		[Stack.Redux]: <SiRedux color="#1a0078" />,
		[Stack.Typescript]: <SiTypescript color="#0024d6" />,
	};
	const stackList = (stack: string) => <li key={stack}>{icons[stack]}</li>;

	return (
		<article className={projectCardModule.container}>
			<p className={projectCardModule.title}>{title}</p>
			<div className={projectCardModule.card}>
				<img className={projectCardModule.cardImage} src={image} height={320} width={200} />
				<ul className={projectCardModule.actionList}>
					<li>
						<Link href={repository}>
							<VscCode size={22} />
						</Link>
					</li>
					<ul className={projectCardModule.stackList}>{stacks.map(stackList)}</ul>
					<li>
						<Link href={link}>{!link ? <VscEyeClosed size={22} color="#555555" /> : <VscEye size={22} />}</Link>
					</li>
				</ul>
			</div>
		</article>
	);
};

export default ProjectCard;
