import { FiSearch } from "react-icons/fi"

const SearchBar = () => (
    <div className="relative overflow-hidden">
        <input
            type='search'
            name='search'
            className='w-full px-3 py-2 rounded-full bg-transparent outline-none tracking-wider border border-indigo-200'
            placeholder="Search"
            value={''}
            onChange={() => {
                console.log('ss')
            }}
            autoComplete='off'
        />

        <p className="bg-indigo-100 w-[50px] h-full absolute right-0 top-0 rounded-r-full border border-indigo-200">
            <FiSearch className="w-6 h-6 absolute right-3 top-2 text-gray-900" />

        </p>
    </div>
)

export default SearchBar