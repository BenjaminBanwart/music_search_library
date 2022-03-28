import { useState } from 'react'

function SearchBar(props){

    return (
            <form>
                <input type="text" placeholder="Search Here"
                    onChange={
                        (e) => props.handleSearch(e, e.target.value)
                    } />
            </form>
    )
}

export default SearchBar