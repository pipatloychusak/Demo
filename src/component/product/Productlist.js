import React, { Component } from "react";
import ProductItem from "./ProductItem";


 class Productlist extends Component{

showProducts(){
    
       return (this.props.products && this.props.products.map(product=>(
           <ProductItem key={product.productID} product={product} />

        ))
       );
    
}


render() {
    return <div className="row">{this.showProducts()}</div>;
  }
}


 
 export default Productlist;
