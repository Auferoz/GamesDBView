import type { GamesDB, GamesDBArray } from "@intefaces/burstdb";

const client_id = 'zn6jdy9rvb46v2qspncyfjd3xgcqgj';
const client_secret = 'kyqj3k797lnxelnfyn6rx2yb45fkn4';
const grant_type = 'client_credentials';

export const getGamebyId = async ({id}: { id: string}) => {
	const res = await fetch(`https://fe51f31c.gamesdbview.pages.dev/api/games/${id}`, {
		method: "GET",
	})
	const game = (await res.json()) as GamesDBArray[]

	return game
}


export const postIGDB = async () => {
    const res = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}`, {
        method: "POST",
    });
    const auth = await res.json();

    return auth.access_token;
}


export const postGameIGDB = async ({igdbId}: { igdbId: number}) => {
    const token = await postIGDB();
    const res = await fetch(`https://api.igdb.com/v4/games/`, {
        method: "POST",
        headers: {
            'Client-ID': client_id,
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: `where id = ${igdbId}; fields id, name, slug, summary, aggregated_rating, cover.*, genres.*, themes.*, screenshots.*, artworks.*;` 
    });
    const game = await res.json();

    return game;
}