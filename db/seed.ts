import { db, GamesDB } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	
	await db.insert(GamesDB).values([
		{
			title: "Scarlet Nexus",
			released: "24/06/2021",
			companie: "Bandai Namco Studios",
			poster: "co3b6l",
			state: "abandonado",
			hours: 2,
			dateStart: "01/01/2024",
			dateEnd: "01/01/2024",
			achievementsObtained: 0,
			achievementsTotals: 53,
			platform: "Xbox Series X",
			igdbId: 133302,
		},
		{
			title: "Eiyuden Chronicle: Rising",
			released: "10/05/2022",
			companie: "Rabbit & Bear Studios",
			poster: "co4sxy",
			state: "completado",
			hours: 10,
			dateStart: "02/01/2024",
			dateEnd: "24/03/2024",
			achievementsObtained: 27,
			achievementsTotals: 50,
			platform: "Xbox Series X",
			igdbId: 152245,
		},
		{
			title: "League of Legends",
			released: "27/10/2009",
			companie: "Riot Games",
			poster: "co49wj",
			state: "jugando",
			hours: 99,
			dateStart: "03/01/2024",
			dateEnd: "",
			achievementsObtained: 0,
			achievementsTotals: 0,
			platform: "PC Game",
			igdbId: 115,
		},
		{
			title: "Euro Truck Simulator 2",
			released: "18/10/2012",
			companie: "SCS Software",
			poster: "co7et5",
			state: "completado",
			hours: 34,
			dateStart: "05/01/2024",
			dateEnd: "14/01/2024",
			achievementsObtained: 8,
			achievementsTotals: 87,
			platform: "Steam",
			igdbId: 3070,
		},
		{
			title: "F1 23",
			released: "16/06/2023",
			companie: "Codemasters",
			poster: "co6g3a",
			state: "completado",
			hours: 124,
			dateStart: "01/03/2024",
			dateEnd: "05/03/2024",
			achievementsObtained: 32,
			achievementsTotals: 49,
			platform: "EA Play",
			igdbId: 240558,
		},
		{
			title: "Lost Ark",
			released: "04/12/2018",
			companie: "Tripod Studio",
			poster: "co4w4j",
			state: "completado",
			hours: 392,
			dateStart: "20/01/2024",
			dateEnd: "10/05/2024",
			achievementsObtained: 83,
			achievementsTotals: 156,
			platform: "Steam",
			igdbId: 26128,
		},
		{
			title: "Call of Duty: Warzone 2.0",
			released: "16/11/2022",
			companie: "Infinity Ward",
			poster: "co5r6t",
			state: "abandonado",
			hours: 23,
			dateStart: "07/01/2024",
			dateEnd: "08/02/2024",
			achievementsObtained: 0,
			achievementsTotals: 63,
			platform: "Steam",
			igdbId: 217815,
		},
		{
			title: "Palworld",
			released: "19/01/2024",
			companie: "PocketPair",
			poster: "co7n02",
			state: "completado",
			hours: 80,
			dateStart: "27/01/2024",
			dateEnd: "02/03/2024",
			achievementsObtained: 12,
			achievementsTotals: 12,
			platform: "Steam",
			igdbId: 151665,
		},
		{
			title: "Enshrouded",
			released: "24/01/2024",
			companie: "Keen Games",
			poster: "co6gct",
			state: "completado",
			hours: 120,
			dateStart: "30/01/2024",
			dateEnd: "23/03/2024",
			achievementsObtained: 33,
			achievementsTotals: 37,
			platform: "Steam",
			igdbId: 248643,
		},
		{
			title: "Call of Duty® (2003)",
			released: "29/10/2003",
			companie: "Infinity Ward",
			poster: "co2n19",
			state: "completado",
			hours: 6,
			dateStart: "10/02/2024",
			dateEnd: "11/02/2024",
			achievementsObtained: 0,
			achievementsTotals: 0,
			platform: "Steam",
			igdbId: 621,
		},
		{
			title: "Call of Duty® 2",
			released: "25/10/2005",
			companie: "Infinity Ward",
			poster: "co3acf",
			state: "completado",
			hours: 9,
			dateStart: "11/02/2024",
			dateEnd: "12/02/2024",
			achievementsObtained: 0,
			achievementsTotals: 0,
			platform: "Steam",
			igdbId: 622,
		},
		{
			title: "Call of Duty® 4: Modern Warfare® (2007)",
			released: "05/11/2007",
			companie: "Treyarch",
			poster: "co1wko",
			state: "completado",
			hours: 6,
			dateStart: "13/02/2024",
			dateEnd: "28/02/2024",
			achievementsObtained: 0,
			achievementsTotals: 0,
			platform: "Steam",
			igdbId: 623,
		},
		{
			title: "Guitar Hero III: Legends of Rock",
			released: "28/10/2007",
			companie: "Vicarious Visions",
			poster: "co1wqm",
			state: "pausado",
			hours: 5,
			dateStart: "1/03/2024",
			dateEnd: "",
			achievementsObtained: 0,
			achievementsTotals: 0,
			platform: "PC Game",
			igdbId: 2671,
		},
		{
			title: "Batman: Return to Arkham - Arkham Asylum",
			released: "17/10/2016",
			companie: "Rocksteady Studios",
			poster: "co1voj",
			state: "completado",
			hours: 12,
			dateStart: "03/03/2024",
			dateEnd: "19/03/2024",
			achievementsObtained: 28,
			achievementsTotals: 47,
			platform: "Xbox Series X",
			igdbId: 203433,
		},
		{
			title: "Final Fantasy VIII",
			released: "05/12/2013",
			companie: "Square",
			poster: "co4tsp",
			state: "completado",
			hours: 1,
			dateStart: "28/03/2024",
			dateEnd: "30/03/2024",
			achievementsObtained: 42,
			achievementsTotals: 45,
			platform: "Steam",
			igdbId: 203538,
		},
		{
			title: "Final Fantasy XIII",
			released: "17/12/2009",
			companie: "Square Enix",
			poster: "co2ukg",
			state: "pausado",
			hours: 23,
			dateStart: "07/04/2024",
			dateEnd: "",
			achievementsObtained: 10,
			achievementsTotals: 35,
			platform: "Xbox Series X",
			igdbId: 389,
		},
		{
			title: "Portal",
			released: "10/10/2007",
			companie: "Valve",
			poster: "co1x7d",
			state: "completado",
			hours: 2,
			dateStart: "07/06/2024",
			dateEnd: "23/06/2024",
			achievementsObtained: 4,
			achievementsTotals: 12,
			platform: "Xbox Series X",
			igdbId: 71,
		},
		{
			title: "AO Tennis 2",
			released: "08/01/2020",
			companie: "Big Ant Studios",
			poster: "co1xwu",
			state: "abandonado",
			hours: 2,
			dateStart: "08/06/2024",
			dateEnd: "08/06/2024",
			achievementsObtained: 5,
			achievementsTotals: 32,
			platform: "Steam",
			igdbId: 125479,
		},
		{
			title: "Call of Duty: World at War",
			released: "10/11/2008",
			companie: "Treyarch",
			poster: "co1wl8",
			state: "completado",
			hours: 8,
			dateStart: "15/06/2024",
			dateEnd: "16/06/2024",
			achievementsObtained: 0,
			achievementsTotals: 0,
			platform: "Steam",
			igdbId: 625,
		},
		{
			title: "Crash Bandicoot N. Sane Trilogy",
			released: "29/06/2017",
			companie: "Vicarious Visions",
			poster: "co1v62",
			state: "completado",
			hours: 6,
			dateStart: "28/06/2024",
			dateEnd: "08/07/2024",
			achievementsObtained: 14,
			achievementsTotals: 74,
			platform: "Steam",
			igdbId: 26196,
		},
		{
			title: "Granblue Fantasy: Relink",
			released: "31/01/2024",
			companie: "Cygames Osaka",
			poster: "co7ptq",
			state: "jugando",
			hours: 9,
			dateStart: "01/07/2024",
			dateEnd: "",
			achievementsObtained: 19,
			achievementsTotals: 54,
			platform: "Steam",
			igdbId: 22788,
		},
		{
			title: "Senua's Saga: Hellblade II",
			released: "20/05/2024",
			companie: "Ninja Theory",
			poster: "co81i4",
			state: "completado",
			hours: 8,
			dateStart: "15/07/2024",
			dateEnd: "16/07/2024",
			achievementsObtained: 11,
			achievementsTotals: 11,
			platform: "Xbox Series X",
			igdbId: 127342,
		},
		{
			title: "Final Fantasy XVI DEMO",
			released: "19/08/2024",
			companie: "Square Enix Creative Studio III",
			poster: "co5w3k",
			state: "completado",
			hours: 3,
			dateStart: "19/08/2024",
			dateEnd: "25/08/2024",
			achievementsObtained: 0,
			achievementsTotals: 0,
			platform: "Steam",
			igdbId: 31551,
		},
		{
			title: "Diablo IV",
			released: "05/06/2023",
			companie: "Blizzard Entertainment",
			poster: "co69sm",
			state: "jugando",
			hours: 3,
			dateStart: "24/08/2024",
			dateEnd: "",
			achievementsObtained: 0,
			achievementsTotals: 0,
			platform: "Xbox PC",
			igdbId: 125165,
		},
	]);

	console.log('Seed Executed :) ');
}
