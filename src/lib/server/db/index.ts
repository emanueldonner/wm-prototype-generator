import type { Canvas } from './types';
import { supabase } from '$lib/server/db/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

// Get all canvases
export async function getAllCanvases(): Promise<Canvas[]> {
	let { data: canvases, error } = await supabase.from('canvas_table').select('*');
	if (error) throw error;
	if (!canvases) return [];
	// console.log('canvases', canvases);
	const mappedCanvases = await canvases.map((canvas) => ({
		id: canvas.id,
		name: canvas.name,
		state: JSON.parse(canvas.state)
	}));
	console.log('mappedCanvases', mappedCanvases);
	return mappedCanvases;
}

// Save a canvas
export async function createCanvas(name: string, state: string): Promise<Canvas> {
	const id = uuidv4();
	console.log('id', id);
	const { data: canvas, error } = await supabase.from('canvas_table').insert([{ id, name, state }]);

	if (error) throw error;

	return { id, name, state };
}

// Get a canvas by id
export async function getCanvas(id: string): Promise<Canvas | null> {
	const { data: canvas, error } = await supabase
		.from('canvas_table')
		.select('*')
		.eq('id', id)
		.single();

	if (error) throw error;
	if (!canvas) return null;

	return {
		id: canvas.id,
		name: canvas.name,
		state: JSON.parse(canvas.state)
	};
}

// Update a canvas
export async function updateCanvas(canvas: Canvas): Promise<Canvas> {
	const { id, name, state } = canvas;

	const { data, error } = await supabase.from('canvas_table').update({ name, state }).eq('id', id);

	if (error) throw error;

	return { id, name, state };
}
