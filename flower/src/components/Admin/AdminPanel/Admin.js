import React from 'react';
import {Link} from 'react-router-dom';
import "./admin.css";

 const Admin =(props) =>{
    const {product, categories} = props
    const productlength = product.length
    console.log(productlength)
    const categorylength = categories.length
    console.log(categorylength)
return (
    <>
        <div className= "sidebar">
            <div className= "sidebar-brand">
            <img src={process.env.PUBLIC_URL + `../assets/images/templatemo_logo.png`} alt="" />
            </div>

            <div className= "sidebar-menu">
                <ul>
                    <li>
                        <Link to="" className="active"><span className="las la-igloo"></span>
                        <span>Dashboard</span></Link>
                    </li>
                    <li>
                        <Link to= "/product-form"><span className="las la-clipboard-list"></span>
                        <span >Products</span></Link>
                    </li>
                    <li>
                        <Link to="/orders"><span className="las la-shopping-bag"></span>
                        <span>Orders</span></Link>
                    </li>
                    <li>
                        <Link to="/users"><span className="las la-users"></span>
                        <span>Customers</span></Link>
                    </li>
                    <li>
                        <Link to="/category"><span className="las la-receipt"></span>
                        <span>Categories</span></Link>
                    </li>
                    
                </ul>
            </div>
        </div>

    
        <main>
            <div className ="card-container">
            <div className="cards">
                <div className="card-single">
                    <div>
                        <h1>{productlength}</h1>
                        <span>Products</span>                       
                    </div>
                    <div>
                        <span className="las la-users"></span>                       
                    </div>
                </div>

                <div className="card-single">
                    <div>
                        <h1> orderlength </h1>
                        <span>Orders</span>                       
                    </div>
                    <div>
                        <span className="las la-shopping-bag"></span>                       
                    </div>
                </div>

                <div className="card-single">
                    <div>
                        <h1> users length</h1>
                        <span>Customers</span>                       
                    </div>
                    <div>
                        <span className="las la-users"></span>                       
                    </div>
                </div>

                <div className="card-single">
                    <div>
                        <h1>{categorylength}</h1>
                        <span>Categories</span>                       
                    </div>
                    <div>
                        <span className="las la-clipboard-list"></span>                       
                    </div>
                </div>

                
            </div>
            </div>

        </main>
    
    </>
    )

}

export default Admin;