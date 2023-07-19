import type { RequestHandler } from '@sveltejs/kit';
import { getAllCanvases, createCanvas, updateCanvas, getCanvas } from '$lib/server/db';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	// console.log('get request!', requestEvent.request);
	const type = url.searchParams.get('requestType') || '';
	if (type === 'getAllCanvases') {
		try {
			const canvases = await getAllCanvases();
			console.log('canvases server', canvases);
			return json(canvases);
		} catch (error) {
			console.error(error);

			return new Response('error', { status: 500 });
		}
	} else if (type === 'getCanvas') {
		try {
			let id = url.searchParams.get('id') || '';
			const canvas = await getCanvas(id);
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

	try {
		// If a canvas with this id already exists, update it; otherwise, create a new one.
		let newCanvas;
		if (id) {
			const existingCanvas = await getCanvas(id);
			if (existingCanvas) {
				console.log('existingCanvas', existingCanvas);
				newCanvas = await updateCanvas({ id, name, state });
			}
		} else {
			newCanvas = await createCanvas(name, state);
		}
		return json(newCanvas);
	} catch (error) {
		console.error(error);
		return new Response('error', { status: 500 });
	}
}
