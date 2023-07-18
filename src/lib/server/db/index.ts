import Database from 'better-sqlite3';
import type { Canvas } from './types';
import { DB_PATH } from '$env/static/private';
import { v4 as uuidv4 } from 'uuid';

const db = new Database(DB_PATH);

// Create the table
db.exec(`
  CREATE TABLE IF NOT EXISTS Canvas (
    id TEXT PRIMARY KEY,
    name TEXT,
    state TEXT
  )
`);

interface DBCanvas {
	id: string;
	name: string;
	state: string;
}

// Get all canvases
export function getAllCanvases(): Canvas[] {
	console.log('getAllCanvases');
	const select = db.prepare('SELECT * FROM Canvas');
	const canvases = select.all() as DBCanvas[];

	return canvases.map((canvas) => ({
		id: canvas.id,
		name: canvas.name,
		state: JSON.parse(canvas.state)
	}));
}

// Save a canvas
export function createCanvas(name: string, state: string): Canvas {
	const id = uuidv4();
	const insert = db.prepare('INSERT INTO Canvas (id, name, state) VALUES (?, ?, ?)');
	console.log('insert', id, name, state);
	insert.run(id, name, JSON.stringify(state));

	return { id, name, state };
}
// Get a canvas by id
export function getCanvas(id: number): Canvas | null {
	const select = db.prepare('SELECT * FROM Canvas WHERE id = ?');
	const canvas = select.get(id) as DBCanvas;

	if (!canvas) {
		return null;
	}

	return {
		id: canvas.id,
		name: canvas.name,
		state: JSON.parse(canvas.state)
	};
}

// Update a canvas
export function updateCanvas(canvas: Canvas): Canvas {
	const { id, name, state } = canvas;
	const update = db.prepare('UPDATE Canvas SET name = ?, state = ? WHERE id = ?');
	update.run(name, JSON.stringify(state), id);

	return { id, name, state };
}
