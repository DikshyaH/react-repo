//import { Component } from 'react';
import { useEffect, useState } from 'react';

import ProductsList from './components/products-list/products-list.component';
import SearchBox from './components/search-box/search-box.component';

import logo from './logo.svg';
import './App.css';

const App = () => {
const [productsearched, productsearchedupdate] = useState('');
const [items , setItems ] = useState([]);
const [filteredProducts,setfilteredProducts ] = useState(items);
console.log({productsearched});
  
const searchProductsChange = (event) => {
    console.log(event.target.value);
    const productsearched_typed = event.target.value.toLocaleLowerCase() ;
    productsearchedupdate(productsearched_typed);
  }

useEffect(() =>{
  const filteredProducts = items.filter((item) => {
    return item.title.toLocaleLowerCase().includes(productsearched);
})
  setfilteredProducts(filteredProducts);

},[items,productsearched]);

 
useEffect(() =>{
  console.log("effect fired");
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((products) => setItems(products)
    //   console.log(products)
    // })) ;
    );
},[]);


  return(
        <div className="App">
          <h1 className='app-title'>The Everything Store</h1>
           <SearchBox onChangeHandler = { searchProductsChange } placeholder = 'search products' className='products-search-box' />       
           <ProductsList productlist = { filteredProducts }/>
         </div>)
}

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       items:[
//       // {
//       //   clothes : 'Printed T-Shirt'
//       // },
//       // {
//       //   clothes : 'Tie-dye T-Shirt'
//       // },
//     ],
//     productsearched : ''
//   };
//   console.log('constructor')
// }

// componentDidMount(){
//   console.log('didMount')
//   fetch('https://fakestoreapi.com/products')
//   .then((response) => response.json())
//   .then((products) => this.setState(() =>{
//   //   console.log(products)
//   // }));
//     return {items: products}
//   }),
//   () => {
//     console.log(this.state);
//   }
//   );
// }

// searchProductsChange = (event) => {
//   console.log(event.target.value);
//   const productsearched = event.target.value.toLocaleLowerCase() ;
//   this.setState(() => {
//   return {productsearched};
//   });
// }
  
//   render() {
//     console.log('render')
//     const { items, productsearched } = this.state;
//     const { searchProductsChange } = this;
//     const filteredProducts = items.filter((item) => {
//       return item.title.toLocaleLowerCase().includes(productsearched);
//     })

//     return (
//       <div className="App">
//         <h1 className='app-title'>The Everything Store</h1>
//          <SearchBox onChangeHandler = { searchProductsChange } placeholder = 'search products' className='products-search-box' />       
        
//         {/* {filteredProducts.map((item) =>{
//           return (
//             <div key={item.id}>  
//               <h1>{item.title}</h1>
//               <button>Add to Cart</button>
//             </div>)   
//         })} */}

//         <ProductsList productlist = { filteredProducts }/>


//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hi {this.state.name}
//           </p>
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <button onClick={() => {
//             this.setState({name:'Sam'});
//           }}>Change Name</button>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header> */}
//       </div>
//     );
//   } 
// }

export default App;
