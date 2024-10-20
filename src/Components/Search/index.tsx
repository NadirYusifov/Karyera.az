import { IoIosSearch } from "react-icons/io"

function Search() {
    return (
        <>
            <div className="search-form mt-2">
                <div className="container">
                    <form className="flex justify-center">
                        <div className="relative flex items-center">
                        <input className="relative outline-very-dark-blue outline-none rounded-full px-4 py-1 w-96" placeholder="Mentorlarını axtar..." />
                        <button className="absolute right-0 text-[20px] text-very-dark-blue border-s-2 border-very-dark-blue px-4"><IoIosSearch /></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search