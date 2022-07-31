export type Project = {
	title: string;
	stacks: Stack[];
	description: string;
	image: string;
	link: string;
	repository: string;
};

export enum Stack {
	React = 'react',
	ReactNative = 'react native',
	Node = 'node',
	Typescript = 'typescript',
	Javascript = 'javascript',
	Flutter = 'flutter',
	Dart = 'dart',
	Material = 'material',
	Redux = 'redux',
}
