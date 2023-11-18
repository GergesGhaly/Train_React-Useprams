import React from 'react'
import { useParams } from 'react-router-dom'


const Fullcard = ({names}) => {

const {id} = useParams();

  return (
    <div>{
    
        names.filter((el) =>el.id == id).map((elm, index) => (
            <div key={index}>
            <div className="header">
                <img src={elm.img} alt=""/>
            </div>
            <h1>{elm.namee}</h1>
            <h5>{elm.num}</h5>
        </div>

        )
        )
    
        }</div>
  )
}

export default Fullcard