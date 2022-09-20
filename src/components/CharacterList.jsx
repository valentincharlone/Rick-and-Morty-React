import React, { useEffect, useState } from 'react'
import Character from './Character';



function NavPage (props)  {
    
    return (
        <header className='d-flex justify-content-between align-items-center'>
            <button 
                className='btn btn-primary'
                onClick={() => props.setPage(props.page - 1)}
            > Page {props.page }
            </button>
            <button 
                className='btn btn-primary'
                onClick={() => props.setPage(props.page + 1)}
            > Page {props.page +1}
            </button>
        </header>
    )
}


const CharacterList = () => {

    const [ characters, setCharacters] = useState([])
    const [ loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;

    useEffect(() => {
        fetchData();
        setLoading(false)
    }, [page])
    
    async function fetchData () {
        const response = await fetch(url)
        const data = await response.json()
        setCharacters(data.results)
        
    }
    

    return (
        <div className='container'>
            <NavPage page={page} setPage={setPage}></NavPage>

           {
            loading ? 
            (
                <h1>Loading</h1>
            ) : (
                <div className='row'>
                
                {
                    characters.map(character => 
                        (
                        <div key={character.id} className="col-md-4">
                            <Character character={character}></Character>
                        </div>
                        )
                    )
                }
            </div>
            )
           }
        </div>
    )
}

export default CharacterList