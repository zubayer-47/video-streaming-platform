
export default function Tags() {
    return (
        <div className="w-full flex gap-4 overflow-auto">
            {new Array(30).fill(true).map(() => (
                <button className="bg-indigo-200/40 w-fit rounded-md px-2 py-1">Tags</button>
            ))}
        </div>
    )
}
