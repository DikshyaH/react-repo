import ProductContainer from '../product/product-container-component';

import './products-list-container.styles.css';

import '../product/product-container-component';

const ProductsList = ({ productlist }) => (        
        <div className='product-list'>
            {productlist.map((item) => {           
        return(<ProductContainer item = {item}/>
        )})}</div>
        );

export default ProductsList;