import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesContainer";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState('');
    const [filterByRegion, setFilterByRegion] = useState('');

    const [isDark] = useTheme()

    return (
        <main className={`main-container ${isDark ? 'dark-theme' : ''}`}>
            <section>
                <div className="search-filter-container">
                    <SearchBar setSearchQuery={setSearchQuery} />
                    <SelectMenu setFilterByRegion={setFilterByRegion} />
                </div>
                <CountriesContainer searchQuery={searchQuery} filterByRegion={filterByRegion} />
            </section>
        </main>
    )
}

export default Home