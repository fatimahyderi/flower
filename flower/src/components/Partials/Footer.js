import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div id="templatemo_footer_wrapper">
<div id="templatemo_footer">
	<div class="footer_left">
    	<Link to="#"><img src={`./assets/images/1311260370_paypal-straight.png`} alt="Paypal" /></Link>
        <Link to="#"><img src={`./assets/images/1311260374_mastercard-straight.png`} alt="Master" /></Link>
        <Link to="#"><img src={`./assets/images/1311260374_visa-straight.png`} alt="Visa" /></Link>
    </div>
	<div class="footer_right">
		<p><Link to="index.html">Home</Link> | <Link to="products.html">Products</Link> | <Link to="about.html">About</Link> | <Link to="faqs.html">FAQs</Link> | <Link to="checkout.html">Checkout</Link> | <Link to="contact.html">Contact</Link></p>
        <p>Copyright © 2084 <Link to="#">Company Name</Link></p>
	</div>
    <div class="cleaner"></div>
</div> 
</div>
    </>
  )
}

export default Footer