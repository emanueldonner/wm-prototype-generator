import type { RequestHandler } from '@sveltejs/kit';
import { getAllCanvases, createCanvas, updateCanvas, getCanvas } from '$lib/server/db';
import { json } from '@sveltejs/kit';
import { request } from 'http';

export async function GET({ url }) {
	// console.log('get request!', requestEvent.request);
	const id = url.searchParams.get('id') || '';
	const type = url.searchParams.get('requestType') || '';
	if (type === 'getAllCanvases') {
		try {
			const canvases = getAllCanvases();
			console.log('canvases', canvases);
			return json(canvases);
		} catch (error) {
			console.error(error);

			return new Response('error', { status: 500 });
		}
	} else if (type === 'getCanvas') {
		try {
			let id = url.searchParams.get('id') || '';
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
