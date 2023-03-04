import React from "react";
 
export default function CardImage (props) {
    console.info(props.img)
    return (
        <img className="card-img-top" src={props.img} alt={props.alt}></img> 
    )
}