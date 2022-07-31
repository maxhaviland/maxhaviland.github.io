import { Project, Stack } from '../types';

export const projects: Project[] = [
	{
		title: 'Your Favorite Anime',
		stacks: [Stack.React, Stack.Javascript, Stack.Redux, Stack.Material],
		description: '',
		image: 'https://i.ibb.co/rvzzRTz/your-favorite-animes.png',
		link: 'https://your-favorite-anime.netlify.app',
		repository: 'https://github.com/maxhaviland/your-favorite-anime',
	},
	{
		title: 'Web Socket Chat',
		stacks: [Stack.React, Stack.Node, Stack.Javascript],
		description: '',
		image:
			'https://camo.githubusercontent.com/3bb28fac6f58e5b371d6bb62cce4eadb0be5d08ba8f617a66f70e2b331fa5db3/68747470733a2f2f692e6962622e636f2f7a734c515835522f436170747572612d64652d74656c612d64652d323032302d30352d30382d30332d30382d32342e706e67',
		link: '',
		repository: 'https://github.com/maxhaviland/socket-chat-real-time',
	},
	{
		title: 'Giphy App',
		stacks: [Stack.Dart, Stack.Flutter],
		description: '',
		image: 'https://i.ibb.co/9ZNQRM7/cats.gif',
		link: '',
		repository: 'https://github.com/maxhaviland/your-favorite-anime',
	},
	{
		title: 'FyBooks',
		stacks: [Stack.React, Stack.Typescript],
		description: '',
		image:
			'https://camo.githubusercontent.com/f3891b51bd261296a486d1987745ba4e1f09f5e68144eb8f774ac3f3300485d1/68747470733a2f2f692e6962622e636f2f366276447467792f53637265656e73686f742d362e706e67',
		link: 'https://fybooks.herokuapp.com/?book=disney',
		repository: 'https://github.com/maxhaviland/fybooks',
	},
	{
		title: 'Hello Kitty Note App',
		stacks: [Stack.ReactNative, Stack.Typescript],
		description: '',
		image: 'https://i.ibb.co/hgYgGPV/92820a48-9090-45c4-a082-55b8efcb70c1.jpg',
		link: '',
		repository: 'https://github.com/maxhaviland/hello-kitty-note-app',
	},
];
