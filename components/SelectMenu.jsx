function SelectMenu({ setFilterByRegion }) {
    return (
        <select onChange={(e) => setFilterByRegion(e.target.value.toLowerCase())} title="region-filter" name="region" id="region" className="region-select">
            <option hidden>Filter by Region</option>
            <option value="">All</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="antarctic">Antarctic</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    )
}

export default SelectMenu