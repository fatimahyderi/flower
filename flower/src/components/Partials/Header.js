import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
    <div id="templatemo_menu" class="ddsmoothmenu">
                            <ul>
                                <li><Link to="/" class="selected">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/products">Products</Link>
                                    <ul>
                                        <li><Link to="#subpage1">Sub Page One</Link></li>
                                        <li><Link to="#subpage2">Sub Page Two</Link></li>
                                        <li><Link to="#subpage3">Sub Page Three</Link></li>
                                        <li><Link to="#subpage4">Sub Page Four</Link></li>
                                        <li><Link to="#subpage5">Sub Page Five</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/checkout">Checkout</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/faqs">FAQs</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                            </ul>
                            <div id="templatemo_search">
                                <form action="#" method="get">
                                    <input type="text" value="Site Search" name="keyword" id="keyword" title="keyword"
                                        onfocus="clearText(this)" onblur="clearText(this)" class="txt_field" />
                                    <input type="submit" name="Search" value="" alt="Search" id="searchbutton" title="Search" class="sub_btn" />
                                </form>
                            </div>
                            <br style={{ clear: "left" }} />
                        </div>
    </>
  )
}

export default Header