import Content from '../src/components/content';
import { Grid, Box } from '@chakra-ui/react';
import ProjectCard from '../src/components/projectCard';
import { projects } from '../src/data';


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
