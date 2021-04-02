import React, { FC } from 'react';
import { Box, Badge, Image, Stack, Grid, Button, Text } from '@chakra-ui/react';
import { BiCodeAlt } from 'react-icons/bi';
import { BsFillEyeFill } from 'react-icons/bs';

interface Props {
	project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
	const stackList = (stack: string, index: number) => (
		<Badge key={stack + index} borderRadius="full" py="1" px="2" colorScheme="purple">
			{stack}
		</Badge>
	);

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
					{project.stacks.map(stackList)}
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

export default ProjectCard;
