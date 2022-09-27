import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Partials/Footer';
import Header from './Partials/Header';
import Sidebar from './Partials/Sidebar';

function Cart(props) {
    const { cart, onAdd, onRemove, clearCart } = props;
    const itemPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
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
                        <Sidebar />
                        <div id="content" class="right">
                            <h2>Shopping Cart</h2>
                            <table width="700" border="0" cellpadding="5" cellspacing="0">
                                <tr bgcolor="#395015">
                                    <th width="168" align="left">Item</th>
                                    <th width="188" align="left">Description</th>
                                    <th width="60" align="center">Quantity</th>
                                    <th width="80" align="right">Price</th>
                                    <th width="80" align="right">Total</th>
                                    <th width="64"> </th>
                                </tr>
                                {cart.map((item) => {
                                    return (
                                        <>
                                        {onAdd}
                                            <tr bgcolor="#41581B" key={item.id}>
                                                <td><img src={`./assets/images/product/${item.image}`} alt={item.name} /></td>
                                                <td>{item.name}</td>
                                                <td align="center">
                                                    <span className="qty-plus" onClick={() => onAdd(item)}><i className="fa fa-plus" >      </i></span>
                                                    {item.qty}
                                                    <span className="qty-minus" onClick={() => onRemove(item)}>   <i className="fa fa-minus" >  </i></span>




                                                </td>
                                                <td align="right">{item.price}</td>
                                                <td align="right">{item.qty * item.price}</td>
                                                <td align="center"> </td>
                                            </tr>

                                        </>
                                    )
                                })}

                                <tr bgcolor="#41581B">
                                    <td colspan="3">Have you modified item quantities? Please <Link to="/products"><strong>Update</strong></Link> the Cart.</td>
                                    <td align="right"><h4>All Total:</h4></td>
                                    <td align="right"><h4>{itemPrice}</h4></td>
                                    <td> </td>
                                </tr>
                            </table>
                            <div class="cleaner h20"></div>
                            <div class="right"><Link to="/checkout" className="orderbtn" >checkout</Link></div>
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

export default Cart