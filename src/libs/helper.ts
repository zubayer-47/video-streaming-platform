export const trunc = (text: string, len?: number) => {
	return len
		? text.length > len
			? text.split('').slice(0, len).join('') + '...'
			: text
		: text.split('').slice(0, len).join('');
};

export const formateTime = (timeInSec: number) => {
	const seconds = Math.round(timeInSec);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	const res = !hours
		? `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
		: `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds)
				// eslint-disable-next-line no-mixed-spaces-and-tabs
				.slice(-2)}`;

	return res;
};
