export default function Tags() {
	return (
		<div className='w-full pb-3.5 mb-1.5 flex gap-3 overflow-auto'>
			{new Array(80).fill(true).map(() => (
				<button className='bg-indigo-200/40 rounded-full px-3 py-1'>
					Tags
				</button>
			))}
		</div>
	);
}
