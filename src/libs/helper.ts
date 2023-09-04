export const trunc = (text: string, len?: number) => {
	return len
		? text.length > len
			? text.split('').slice(0, len).join('') + '...'
			: text
		: text.split('').slice(0, len).join('');
};

export const formateTime = (timeInSec: number) => {
	const time = Math.round(timeInSec);

	const seconds = Math.floor(time % 60);
	const minutes = Math.floor((time / 60) % 60);
	const hours = Math.floor(time / 3600);

	const miniTimestemp = `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(
		-2
	)}`;
	const fullTimestemp = `${('0' + hours).slice(-2)}:${('0' + minutes).slice(
		-2
	)}:${('0' + seconds).slice(-2)}`;

	return !hours ? miniTimestemp : fullTimestemp;
};
