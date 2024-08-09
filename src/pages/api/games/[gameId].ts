import type { APIRoute } from 'astro';
import { db, eq, GamesDB } from 'astro:db';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {

    const gameId = params.gameId ?? '';

    const body = {
        method: 'GET',
        gameId: gameId,
    };

    const games = await db.select().from(GamesDB);

    return new Response(
        JSON.stringify(body),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
}

export const PATCH: APIRoute = async ({ params, request }) => {

    const gameId = params.gameId ?? '';

    try {

        const { id, ...body } = await request.json();

        const results = await db.update(GamesDB).set(body).where(eq(GamesDB.id, +gameId));

        const updateGame = await db.select().from(GamesDB).where(eq(GamesDB.id, +gameId));

        return new Response(JSON.stringify(updateGame.at(0)),
            {
                status: 201,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

    } catch (error) {

        // console.log(error);

        return new Response(JSON.stringify({ msg: 'No body found' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    }
}

export const DELETE: APIRoute = async ({ params }) => {

    const gameId = params.gameId ?? '';

    const { rowsAffected } = await db.delete(GamesDB).where(eq(GamesDB.id, +gameId));

    if (rowsAffected > 0) {

        return new Response(
            JSON.stringify({ msg: 'Deleted' }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

    }

    return new Response(
        JSON.stringify({ msg: 'No Found' }),
        {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
}