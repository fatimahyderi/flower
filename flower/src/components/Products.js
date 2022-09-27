import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Partials/Footer';
import Header from './Partials/Header';

function Products() {
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
	<div id="sidebar" class="left">
    	<div class="sidebar_box"><span class="bottom"></span>
            <h3>Categories</h3>   
            <div class="content"> 
                <ul class="sidebar_list">
                    <li><Link to="#">Nulla odio ipsum</Link></li>
                    <li><Link to="#">Suspendisse posuere</Link></li>
                    <li><Link to="#">Aliquam euismod</Link></li>
                    <li><Link to="#">Curabitur ac mauris</Link></li>
                    <li><Link to="#">Mauris nulla tortor</Link></li>
                    <li><Link to="#">Nullam ultrices</Link></li>
                    <li><Link to="#">Vivamus scelerisque</Link></li>
                    <li><Link to="#">Suspendisse posuere</Link></li>
                    <li><Link to="#">Quisque vel justo</Link></li>
                </ul>
            </div>
        </div>
        <div class="sidebar_box"><span class="bottom"></span>
            <h3>Weekly Special</h3>   
            <div class="content special"> 
                <img src={`./assets/images/templatemo_image_01.jpg`} alt="Flowers" />
                <Link to="#">Citrus Burst Bouquet</Link>
                <p>
                	Price:
                    <span class="price normal_price">$160</span>&nbsp;&nbsp;
                    <span class="price special_price">$100</span>
                </p>
            </div>
        </div>
    </div>
    
    <div id="content" class="right">
		<h2>Products</h2>
        <p>Cras aliquam, mi nec imperdiet volutpat, ligula est consequat odio, eu auctor urna augue eu quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum nec nunc ac hendrerit. Morbi lacinia placerat diam sit amet fringilla. Integer accumsan suscipit suscipit. Mauris non nunc sit amet turpis pharetra mattis. Validate <Link to="http://validator.w3.org/check?uri=referer" rel="nofollow"><strong>XHTML</strong></Link> &amp; <Link to="http://jigsaw.w3.org/css-validator/check/referer" rel="nofollow"><strong>CSS</strong></Link>.</p>
  <div class="product_box">
            <Link to="productdetail.html"><img src={`./assets/images/product/01.jpg`} alt="floral set 1" /></Link>
      		<h3>Ut eu feugiat</h3>
            <p class="product_price">$240</p>
            <p class="add_to_cart">
                <Link to="productdetail.html">Detail</Link>
                <Link to="shoppingcart.html">Add to Cart</Link>
            </p>
        </div>        	
        <div class="product_box">
            <Link to="productdetail.html"><img src={`./assets/images/product/02.jpg`} alt="flowers 2" /></Link>
            <h3>Donec Est Nisi</h3>
          	<p class="product_price">$160</p>
            <p class="add_to_cart">
                <Link to="productdetail.html">Detail</Link>
                <Link to="shoppingcart.html">Add to Cart</Link>
            </p>
        </div>        	
        <div class="product_box">
            <Link to="productdetail.html"><img src={`./assets/images/product/03.jpg`} alt="floral 3" /></Link>
            <h3>Tristique Vitae</h3>
          <p class="product_price">$140</p>
            <p class="add_to_cart">
                <Link to="productdetail.html">Detail</Link>
                <Link to="shoppingcart.html">Add to Cart</Link>
            </p>
        </div>      	
        <div class="product_box no_margin_right">
            <Link to="productdetail.html"><img src={`./assets/images/product/04.jpg`} alt="flowers 4" /></Link>
            <h3>Hendrerit Eu</h3>
            <p class="product_price">$320</p>
            <p class="add_to_cart">
                <Link to="productdetail.html">Detail</Link>
                <Link to="shoppingcart.html">Add to Cart</Link>
            </p>
        </div>
        
        <div class="product_box">
            <Link to="productdetail.html"><img src={`./assets/images/product/05.jpg`} alt="floral set 5" /></Link>
            <h3>Tincidunt Nisi</h3>
          	<p class="product_price">$150</p>
            <p class="add_to_cart">
                <Link to="productdetail.html">Detail</Link>
                <Link to="shoppingcart.html">Add to Cart</Link>
            </p>
        </div>        	
        <div class="product_box">
            <Link to="productdetail.html"><img src={`./assets/images/product/07.jpg`} alt="flowers 7" /></Link>
            <h3>Curabitur et turpis</h3>
            <p class="product_price">$110</p>
            <p class="add_to_cart">
                <Link to="productdetail.html">Detail</Link>
                <Link to="shoppingcart.html">Add to Cart</Link>
            </p>
        </div>        	
        <div class="product_box">
            <Link to="productdetail.html"><img src={`./assets/images/product/06.jpg`} alt="flower set 6" /></Link>
            <h3>Mauris consectetur</h3>
            <p class="product_price">$130</p>
            <p class="add_to_cart">
                <Link to="productdetail.html">Detail</Link>
                <Link to="shoppingcart.html">Add to Cart</Link>
            </p>
        </div>        	
        <div class="product_box no_margin_right">
            <Link to="productdetail.html"><img src={`./assets/images/product/08.jpg`} alt="floral 8" /></Link>
            <h3>Proin volutpat</h3>
            <p class="product_price">$170</p>
            <p class="add_to_cart">
                <Link to="productdetail.html">Detail</Link>
                <Link to="shoppingcart.html">Add to Cart</Link>
            </p>
        </div>
        <div class="blank_box">
        	<Link to="#" class="button left">Previous</Link> 
            <Link to="#" class="button right">Next Page</Link>
        </div>
        <div class="cleaner h20"></div>
    	<div class="blank_box">
        	<Link to="#"><img src={`./assets/images/free_shipping.jpg`} alt="Free Shipping" /></Link>
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

export default Products