import { Component } from "react";

import "./product-container.styles.css";

class ProductContainer extends Component{
    render(){
        const { title, description, id, image } = this.props.item;
        return(
        <div className='product-container' key={id}>
            <img className="product-image" alt ={`product ${title}`} src={image} ></img>
            <h2>{title}</h2>
            <p>{description}</p>
          </div> 
            //  {/* <h1 key = {item.id}>{item.title}</h1> */ }
        )
    }

}

export default ProductContainer;