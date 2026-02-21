import { query } from '$app/server';

export const getTags = query(async () => {
	return ["Bana", "Chero", "Tama", "Hana"];
});