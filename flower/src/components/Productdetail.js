import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import Footer from './Partials/Footer';
import Header from './Partials/Header';
import Sidebar from './Partials/Sidebar';

function Productdetail(props) {
    const { id } = useParams();
    const {onAdd} = props;
    console.log(id)

    const [product, getProduct] = useState({});
    const getProductData = () => {
        axios.get(`${process.env.REACT_APP_SERVER_PATH}/items/product/${id}`)
            .then(function (response) {
                // handle success
                getProduct(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        getProductData()
    }, []);
    return (
        <>
            <div id="templatemo_wrapper_sp">
                <div id="templatemo_header_wsp">
                    <div id="templatemo_header" class="header_subpage">
                        <div id="site_title"><Link to="#">Floral Shop</Link></div>
                        <Header />

                    </div>
                </div>
                <div id="templatemo_main_wrapper">
                    <div id="templatemo_main">
                        <Sidebar/>

                        <div id="content" class="right">
                            <h2>{`${product.name}`}</h2>
                            <div class="content_half left">
                                <img src={process.env.PUBLIC_URL + `/assets/images/product/${product.image}`} alt={`${product.name}`} />
                            </div>
                            <div class="content_half right">
                                <table>
                                    <tr>
                                        <td width="130">Price:</td>
                                        <td width="84">{`${product.price}`}</td>
                                    </tr>
                                    <tr>
                                        <td>Availability:</td>
                                        <td><strong>In Stock</strong></td>
                                    </tr>
                                    <tr><td>Quantity</td><td><input type="text" value="1" size="6" maxlength="2" /></td></tr>
                                </table>
                                <div class="cleaner h20"></div>
                                <Link to="/cart" onClick={() => onAdd(product)} class="button">Add to Cart</Link>
                            </div>
                            <div class="cleaner h40"></div>

                            <h4>Product Description</h4>
                            <p>Sed ullamcorper nunc at magna egestas fermentum. Etiam turpis orci, condimentum luctus orci id, elementum vulputate nunc. Donec diam turpis, iaculis vitae feugiat ac, molestie at odio. Nullam tincidunt est ac sagittis ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper quam sit amet turpis rhoncus id venenatis tellus sollicitudin. Fusce ullamcorper, dolor non mollis pulvinar, turpis tortor commodo nisl, et semper lectus augue blandit tellus. Quisque id bibendum libero. Validate <Link to="http://validator.w3.org/check?uri=referer" rel="nofollow"><strong>XHTML</strong></Link> &amp; <Link to="http://jigsaw.w3.org/css-validator/check/referer" rel="nofollow"><strong>CSS</strong></Link>.</p>
                            <div class="cleaner h40"></div>
                            <div class="">
                                <img src={process.env.PUBLIC_URL + `/assets/images/free_shipping.jpg`} alt="Free Shipping" />
                            </div>
                        </div>
                        <div class="cleaner"></div>
                    </div>
                </div>

                <Footer />
            </div>

        </>
    )
}

export default Productdetail