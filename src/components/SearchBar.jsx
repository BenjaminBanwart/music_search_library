import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext'

function SearchBar(){

    const {term, handleSearch} = useContext(SearchContext);

    return (
            <form>
                <input type="text" placeholder="Search Here" ref={term} />
                <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
            </form>
    )
}

export default SearchBar