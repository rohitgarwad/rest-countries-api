function SearchBar({ setSearchQuery }) {
    return (
        <div className="search-container">
            <i className="fa-solid fa-search"></i>
            <input onInput={(e) => setSearchQuery(e.target.value.toLowerCase())} type="text" name="search" id="search" placeholder="Search for a country..." />
        </div>
    )
}

export default SearchBar