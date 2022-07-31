import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import Particles from 'react-particles';
import { Profile } from '../components/profile';
import ProjectCard from '../components/projectCard';
import { projects } from '../data';

import homeModule from '../styles/home.module.css';
import { Project } from '../types';

const Home = () => {
	const projectsCardList = (project: Project) => (
		<li key={project.title}>
			<ProjectCard {...project} />
		</li>
	);
	return (
		<>
			<main className={homeModule.container}>
				<Profile />
			</main>
			<section className={homeModule.projects}>
				<ul>{projects.map(projectsCardList)}</ul>
			</section>
		</>
	);
};
export default Home;
