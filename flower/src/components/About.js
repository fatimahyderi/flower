import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Partials/Footer';
import Header from './Partials/Header';

function About() {
  return (
    <>
    <div id="templatemo_wrapper_sp">
<div id="templatemo_header_wsp">
	<div id="templatemo_header" class="header_subpage">
    	<div id="site_title"><Link to="/">Floral Shop</Link></div>
    <Header/>

    
    </div> 
</div> </div>
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
		<h2>About</h2>
        <p>Donec sapien. Nam ac nunc. Aliquam fermentum cursus risus. Aliquam erat volutpat. Morbi a augue eget orci sodales blandit. Morbi et mi in mi eleifend adipiscing. Nullam id quam a ligula semper feugiat. Sed ultricies. Nulla et pede eu pede ultrices commodo. Nulla semper accumsan pede. Donec ut quam. Quisque egestas felis in diam. Validate <Link to="http://validator.w3.org/check?uri=referer" rel="nofollow"><strong>XHTML</strong></Link> &amp; <Link to="http://jigsaw.w3.org/css-validator/check/referer" rel="nofollow"><strong>CSS</strong></Link>.</p>
        <ul class="tmo_list_circle">
        	<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Pellentesque quis nulla id orci malesuada porta posuere quis massa.</li>
            <li>Nunc vitae purus non augue scelerisque ultricies vitae et velit quis.</li>
            <li>Aliquam fermentum cursus risus aliquam erat volutpat.</li>
            <li>Morbi a augue eget orci sodales blandit morbiet mi in mi eleifend adipiscing.</li>
		</ul>
        <div class="cleaner h20"></div>
        <h3>Praesent pede massa, feugiat auctor</h3>
		<p>Nam nec leo. Curabitur quis eros a arcu feugiat egestas. Nunc sagittis, dui non porttitor tincidunt, mi tortor tincidunt sem, et aliquet mi tortor eu turpis. Ut nisi ligula, viverra ac, placerat sed, ultricies vitae, neque. Morbi feugiat neque non odio eleifend pulvinar.</p>
        <div class="cleaner"></div>
        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nulla id orci malesuada porta posuere quis massa. Nunc vitae purus non augue scelerisque ultricies vitae et velit quis nulla id orci malesua.
        </blockquote>
    </div>
    <div class="cleaner"></div>
</div> 
</div>
<Footer/>
    </>
  )
}

export default About