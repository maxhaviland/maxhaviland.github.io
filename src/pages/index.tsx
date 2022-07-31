
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { CustomParticles } from '../components/particles';
import { Profile } from '../components/profile';
import ProjectCard from '../components/projectCard';
import { projects } from '../data';

import homeModule from '../styles/home.module.css'

const Home = () => {
	const projectsCardList = (project) => (
		<li key={project}>
			<ProjectCard  {...project} />
		</li>
	)
	return (
		<>
			<main className={homeModule.container}>
				<Profile />
				
			</main>
			<section className={homeModule.projects}>
				<ul>
					{projects.map(projectsCardList)}
				</ul>
			</section>
			<CustomParticles />
		</>
	);
};
export default Home;
