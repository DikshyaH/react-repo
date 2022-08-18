import { Component } from 'react';
import ProductContainer from '../product/product-container-component';

import './products-list-container.styles.css';

import '../product/product-container-component';

class ProductsList extends Component {
    render(){
        console.log('render inside component');
        const { productlist } = this.props;
        return(
        
        <div className='product-list'>
            {productlist.map((item) => {           
        return(<ProductContainer item = {item}/>
        )})}</div>
        );
    }
}

export default ProductsList;