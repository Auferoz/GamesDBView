import type { GamesDB, GamesDBArray } from "@intefaces/burstdb";


export const getGamebyId = async ({id}: { id: string}) => {
	const res = await fetch(`https://fe51f31c.gamesdbview.pages.dev/api/games/${id}`, {
		method: "GET",
	})
	const game = (await res.json()) as GamesDBArray[]

	return game
}