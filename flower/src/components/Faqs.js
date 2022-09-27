import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Partials/Footer';
import Header from './Partials/Header';


function Faqs() {
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
    
    <div id="content" class="right faqs">
		<h2>FAQs</h2>
            <h5>How do I  know if my order has been placed?</h5>
            <p>You will  receive an email confirming that your order has been received. If you do not  receive an email confirmation, please login to see your order status. Validate <Link to="http://validator.w3.org/check?uri=referer" rel="nofollow"><strong>XHTML</strong></Link> &amp; <Link to="http://jigsaw.w3.org/css-validator/check/referer" rel="nofollow"><strong>CSS</strong></Link>.</p>
            
          <h5>When will my order be shipped?</h5>
            <p>Please read our shipping policy. Click <Link to="#">here</Link></p>
            
            <h5>What payment methods do you accept?</h5>
            <p>PayPal and 2Checkout (2CO)</p>
            
            <h5>Can I return or exchange my purchase if I don't like it?</h5>
            <p>Please read our exchange policy. Click <Link to="#">here</Link></p>
            
            <h5>How do I know if online ordering is secured?</h5>
            <p>
            Protecting your information is a  top priority for this site. We use Secure Sockets Layer (SSL) to encrypt your  credit card number, name and address, so only this site is able to decode  your information. SSL is the industry standard method for computers to  communicate securely without risk of data interception, manipulation or  recipient impersonation. To be sure your connection is secure; when you are in  the Shopping Cart, look at the lower corner of your browser window. If you see  an unbroken key or closed lock, the SSL is active and your information is  secure. Since most of the customers are still uncomfortable with providing your  credit card online, we use PayPal and 2CheckOut services and they do not need to  give out credit card information.</p>
          <p>
          This site is registerd with HackerGuardian. HackerGuardian certification for  a hacker free website and a Credit Card TrustLogo confirming your  trustworthiness to take credit card details online.</p>

			
            <h5>What is your privacy policy?</h5>
            <p>This website respects your privacy and ensure that  you understand what information we need to complete your order, and what  information you can choose to share with us and with our marketing partners.  For complete information on our privacy policy, please visit our <Link to="#">Privacy Policy</Link>  page.</p>
            <div class="cleaner h40"></div>
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

export default Faqs