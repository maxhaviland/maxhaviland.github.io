import Content from '../src/components/content';
import { Grid, Box } from '@chakra-ui/react';
import ProjectCard from '../src/components/projectCard';

const projects: Project[] = [
	{
		title: 'Your Favorite Anime',
		stacks: ['ReactJS', 'Redux', 'Material UI'],
		description: 'bla bla bla',
		image: '/images/projects/your-favorite-animes.png',
		link: 'https://your-favorite-anime.netlify.app',
		repository: 'https://github.com/maxhaviland/your-favorite-anime',
	},
	{
		title: 'Giphy App',
		stacks: ['Dart', 'Flutter'],
		description: 'bla bla bla',
		image: 'https://i.ibb.co/9ZNQRM7/cats.gif',
		link: '',
		repository: 'https://github.com/maxhaviland/your-favorite-anime',
	},
	{
		title: 'FyBooks',
		stacks: ['ReactJS', 'Typescript'],
		description: 'bla bla bla',
		image:
			'https://camo.githubusercontent.com/f3891b51bd261296a486d1987745ba4e1f09f5e68144eb8f774ac3f3300485d1/68747470733a2f2f692e6962622e636f2f366276447467792f53637265656e73686f742d362e706e67',
		link: 'https://fybooks.herokuapp.com/?book=disney',
		repository: 'https://github.com/maxhaviland/fybooks',
	},
];

const Projects = () => {
	const projectList = (project: Project) => <ProjectCard key={project.title} project={project} />
	return (
		<Content title="Projetos">
			<Grid
				maxW="100vw"
				templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
				justifyContent="center"
				alignItems="center"
				gap={10}>
				{projects.map(projectList)}
			</Grid>
		</Content>
	);
};

export default Projects;
