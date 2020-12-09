import Content from '../src/components/content';
import { Box, Badge, Image, Stack, Grid, Button, Text } from '@chakra-ui/react';
import { BiCodeAlt } from 'react-icons/bi';
import { BsFillEyeFill } from 'react-icons/bs';

const projects = [
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

const ProjectCard = ({ project }) => {
	return (
		<Box w={[300]} shadow="lg">
			<Box
				maxH="40"
				h="400px"
				w="full"
				backgroundImage={`url("${project.image}")`}
				backgroundSize="contain"
				backgroundRepeat="no-repeat"
				backgroundPosition="center"
				alt={project.title}
			/>
			<Box p="6" bg="white">
				<Stack direction="row" justifyContent="center">
					{project.stacks.map((stack) => (
						<Badge key={Math.random() + stack + Math.random()} borderRadius="full" py="1" px="2" colorScheme="purple">
							{stack}
						</Badge>
					))}
				</Stack>

				<Text my="2" fontSize="xl" color="primary">
					{project.title}
				</Text>
				<Stack>
					<Box>
						<a href={project.link} target="blank">
							<Button
								disabled={!project.link}
								_hover={{ color: 'secondary' }}
								color="white"
								bg="primary"
								width="full"
								rightIcon={<BsFillEyeFill size="20" />}>
								View
							</Button>
						</a>
					</Box>
					<Box>
						<a href={project.repository} target="blank">
							<Button
								_hover={{ color: 'secondary' }}
								color="white"
								bg="primary"
								width="full"
								rightIcon={<BiCodeAlt size="20" />}>
								Code
							</Button>
						</a>
					</Box>
				</Stack>
			</Box>
		</Box>
	);
};

const Projects = () => {
	return (
		<Content title="Projetos">
			<Grid
				maxW="100vw"
				mb="4"
				templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
				gap={10}>
				{projects.map((project) => (
					<ProjectCard project={project} />
				))}
			</Grid>
		</Content>
	);
};

export default Projects;
