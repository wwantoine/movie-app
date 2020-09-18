import React from 'react'
import MovieCard from '../movieCard'

const movieList = ({list}) => {
    return (
        <div className="col-md-10 col-sm-12 d-flex flex-wrap justify-content-around">
            {list.map(item =>{
                return <MovieCard movie={item}/>
            })}
        </div>
    )
}

export default movieList