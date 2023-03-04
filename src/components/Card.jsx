import React from "react"

export default function Card (props) {
   return( 
        <div className="card" style={{width: 400}}>
            {props.children}
        </div>
   )
}
