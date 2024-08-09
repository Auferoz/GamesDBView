import type { APIRoute } from 'astro';
import { db, GamesDB } from 'astro:db';

export const prerender = false;


export const GET: APIRoute = async ({ }) => {

    const games = await db.select().from(GamesDB);

    return new Response(
        JSON.stringify(games),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
}

export const POST: APIRoute = async ({ request }) => {

    try {

        const { id, ...body } = await request.json();

        const { lastInsertRowid } = await db.insert(GamesDB).values(body);

        return new Response(JSON.stringify({
            id: +lastInsertRowid!.toString(),
            ...body,
        }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {

        return new Response(
            JSON.stringify({ msg: 'no body found' }),
            {
                status: 404,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

    }

}