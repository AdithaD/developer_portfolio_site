// place files you want to import through the `$lib` alias in this folder.

export type GalleryItem = {
	title: string;
	description: string;
	src: string;
	externalLink?: string;
	dateReleased?: Date;
};

export const games: GalleryItem[] = [
	{
		title: 'Beat Boss',
		description: 'A rhythm game where the roles between adventurers and boss have been reversed.',
		externalLink: 'https://mightysmack.itch.io/the-beatboss',
		src: 'games/beat_boss.png',
		dateReleased: new Date(2023, 7, 9)
	},
	{
		title: 'Cataclysm',
		description: 'A tower defense game where you combine elements to make powerful effects.',
		externalLink: 'https://mightysmack.itch.io/cataclysm',
		src: 'games/cataclysm.png',
		dateReleased: new Date(2023, 10, 3)
	},
	{
		title: 'D.E.A.T.H',
		description: 'A turn-based tactics games where the goal is not your survival.',
		externalLink: 'https://mightysmack.itch.io/d-e-a-t-h',
		src: 'games/DEATH.png',
		dateReleased: new Date(2022, 4, 5)
	},
	{
		title: 'Hyper Space Man',
		description: 'A space shoot where your goal is to escape the universe',
		externalLink: 'https://shrub.itch.io/hyper-space-man',
		src: 'games/hyper_space_man.png',
		dateReleased: new Date(2018, 8, 14)
	},
	{
		title: 'Moonbeam Meadows',
		description: 'A farming game set on the moon with robot farmhands',
		src: 'games/moonbeam_meadows.png'
	},
	{
		title: 'Radi8 M8',
		description: 'A rogue-lite shooter where enemies mutate the longer they are alive.',
		externalLink: 'https://shrub.itch.io/radi8-m8',
		src: 'games/radi8m8.png',
		dateReleased: new Date(2021, 10, 8)
	},
	{
		title: 'Serious Ham',
		description: 'A game where you play as a genocidal hamster.',
		externalLink: 'https://shrub.itch.io/serious-ham',
		src: 'games/serious_ham.png',
		dateReleased: new Date(2020, 10, 5)
	},
	{
		title: 'Scream of the Crop',
		description: 'Fight against the crops who are violently refusing to be harvested.',
		externalLink: 'https://mightysmack.itch.io/scream-of-the-crop',
		src: 'games/scream_of_the_crop.png',
		dateReleased: new Date(2023, 1, 10)
	},
	{
		title: 'Untitled FPS Game',
		description: 'A first person shooter game with semi-realistic recoil and reload mechanics',
		src: 'games/untitled_fps_game.png'
	},
	{
		title: 'Untitled Puzzle Game ',
		description:
			'A co-op puzzle game where you play as a human and robot trying to escape a facility.',
		src: 'games/untitled_puzzle_game.png'
	}
];

export const software: GalleryItem[] = [
	{
		title: 'Job App',
		description: 'An app that helps tradies track jobs and materials.',
		externalLink: 'https://github.com/AdithaD/job-app',
		src: 'software/job_app.png'
	},
	{
		title: 'Dora the Explorer Bot',
		description: 'A telegram bot that lets you emulate the amazing race with custom routes.',
		externalLink: 'https://github.com/AdithaD/dora-the-explorer-bot',
		src: 'software/dora_the_explorer_bot.png'
	}
];
