import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import {imageUrl} from '../../Constants/Constants'

function RowPost(props) {

  const [movies, setmovies] = useState([])

  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setmovies(response.data.results)
    }).catch(Err=>{
      alert("network error")
    })
    }, [])
  
  return (
    <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            
            <img className={props.isSmall ? "smallposter" : "poster"} alt="" src={`${imageUrl+obj.backdrop_path}`}/>
        )}
            
        </div>
        
    </div>
  )
}

export default RowPost


