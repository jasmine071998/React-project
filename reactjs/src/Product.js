import React from "react"

function Product(props){
    
    return(
        <div className="contact-card">

<h3>Name : {props.product.name}</h3>
<h3 style={{color:props.product.price>30 ? "red" : "blue"}}>Price : {props.product.price}</h3>
<hr/>
        </div>
    )
}
export default Product