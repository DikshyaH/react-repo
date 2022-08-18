import { Component } from 'react';

import ProductsList from './components/products-list/products-list.component';
import SearchBox from './components/search-box/search-box.component';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      items:[
      // {
      //   clothes : 'Printed T-Shirt'
      // },
      // {
      //   clothes : 'Tie-dye T-Shirt'
      // },
    ],
    productsearched : ''
  };
  console.log('constructor')
}

componentDidMount(){
  console.log('didMount')
  fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((products) => this.setState(() =>{
  //   console.log(products)
  // }));
    return {items: products}
  }),
  () => {
    console.log(this.state);
  }
  );
}

searchProductsChange = (event) => {
  console.log(event.target.value);
  const productsearched = event.target.value.toLocaleLowerCase() ;
  this.setState(() => {
  return {productsearched};
  });
}
  
  render() {
    console.log('render')
    const { items, productsearched } = this.state;
    const { searchProductsChange } = this;
    const filteredProducts = items.filter((item) => {
      return item.title.toLocaleLowerCase().includes(productsearched);
    })

    return (
      <div className="App">
        <h1 className='app-title'>The Everything Store</h1>
         <SearchBox onChangeHandler = { searchProductsChange } placeholder = 'search products' className='products-search-box' />       
        
        {/* {filteredProducts.map((item) =>{
          return (
            <div key={item.id}>  
              <h1>{item.title}</h1>
              <button>Add to Cart</button>
            </div>)   
        })} */}

        <ProductsList productlist = { filteredProducts }/>


        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => {
            this.setState({name:'Sam'});
          }}>Change Name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  } 
}

export default App;
