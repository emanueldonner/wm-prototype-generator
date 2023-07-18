import type { RequestHandler } from '@sveltejs/kit';
import { getAllCanvases, createCanvas, updateCanvas, getCanvas } from '$lib/server/db';
import { json } from '@sveltejs/kit';

export async function GET(requestEvent) {
	console.log('get request!', requestEvent.request);
	const { request } = requestEvent;
	const { requestType } = await request.json();
	console.log('request', id);
	if (requestType === 'getAllCanvases') {
		try {
			const canvases = getAllCanvases();
			return json(canvases);
		} catch (error) {
			console.error(error);

			return new Response('error', { status: 500 });
		}
	} else if (requestType === 'getCanvas') {
		try {
			const { id } = await request.json();
			const canvas = getCanvas(id);
			return json(canvas);
		} catch (error) {
			console.error(error);

			return new Response('error', { status: 500 });
		}
	}
}

export async function POST(requestEvent) {
	const { request } = requestEvent;
	const { id, name, state } = await request.json();
	console.log('request', name, state);
	console.log('typeof request', typeof name, typeof state);
	// return new Response('ok');
	// const { name, state } = request.body as { name: string; state: string }

	try {
		// If a canvas with this id already exists, update it; otherwise, create a new one.
		const existingCanvas = getCanvas(id);
		let newCanvas;
		if (existingCanvas) {
			console.log('existingCanvas', existingCanvas);
			newCanvas = await updateCanvas(existingCanvas);
		} else {
			newCanvas = await createCanvas(name, state);
		}
		return json(newCanvas);
	} catch (error) {
		console.error(error);

		return new Response('error', { status: 500 });
	}
}
