import React from "react"

export default function CardBody (props) {
    return (
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.body}</p>
    </div>
    )
}
