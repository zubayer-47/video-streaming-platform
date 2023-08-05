export const trunc = (text: string, len: number) =>
	text.length > len ? text.split('').slice(0, len).join('') + '...' : text;
