import notfoundModule from '../styles/notfound.module.css';
const notFound = () => {
	const seconds = 10;
	return (
		<div className={notfoundModule.container}>
			<meta http-equiv="refresh" content={`${seconds};url=/`} />
			<div>
				<span>404</span>
				<p>NOT FOUND</p>
			</div>
			<img src="/images/404.svg" height={438} width={373} alt="Página não encontrada" />
			<div>
				<p>Em breve você será abduzido</p>
			</div>
		</div>
	);
};

export default notFound;
