const SearchItem = ({ search, setSearch}) => {
    return (
        <form className="search-item">
            <input
                id="searchItem"
                type="text"
                role='searchbox'
                placeholder="Search"
                required
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
            />
        </form>
    )
}

export default SearchItem 