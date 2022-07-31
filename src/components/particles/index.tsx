import React from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

export const CustomParticles: React.FC = () => {
	const particlesInit = async (main) => {
		await loadFull(main);
	};

	return (
		<Particles
			init={particlesInit}
			options={{
				fullScreen: {
					enable: true,
					zIndex: 1,
				},
				fpsLimit: 120,
				emitters: {
					direction: 'top',
					size: {
						width: 100,
						height: 0,
					},
					position: {
						x: 50,
						y: 100,
					},
				},
				particles: {
					number: {
						value: 0,
            limit: 14,
					},
					color: {
						value: '#333333',
					},
					shape: {
						type: 'circle',
					},
					opacity: {
						value: 1,
						random: false,
						anim: {
							enable: true,
							speed: 1,
							opacity_min: 0.9,
							sync: false,
						},
					},
					size: {
						value: 3,
					},
					move: {
						enable: true,
						speed: 5,
						direction: 'top',
						random: false,
						straight: false,
						out_mode: 'bounceHorizontal',
						attract: {
							enable: true,
							rotateX: 900,
							rotateY: 10,
						},
					},
				},
				interactivity: {
					modes: {
						grab: {
							distance: 10,
							line_linked: {
								opacity: 1,
							},
						},
						bubble: {
							distance: 10,
							size: 10,
							duration: 2,
							opacity: 0.6,
						},
						repulse: {
							distance: 10,
						},
						push: {
							particles_nb: 1,
						},
						remove: {
							particles_nb: 1,
						},
					},
				},
				retina_detect: false,
				background: {
					color: 'transparent',
				},
			}}
		/>
	);
};
