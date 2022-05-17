import React from 'react';
import { connect } from 'react-redux';
import { selectCartItem } from './../redux/cart/cart.selector';
import {
  addItemsToCart,
  removeItemsToCart,
} from './../redux/cart/cart.actions';

const CheckOut = ({ cartItems, addItemsToCart, removeItemsToCart }) => {
  return (
    <div className="checkout-main">
      <h1 className="checkout-main__header">Let's Get Lost</h1>
      {cartItems ? (
        <>
          {cartItems.map((cartItem) => (
            <div className="checkout-main__tour" key={cartItem.id}>
              {/* <div className=" "></div> */}
              <div
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${cartItem.imageCover})`,
                }}
                className="checkout-main__tour--img"
              ></div>
              <div>
                <p>$ {cartItem.price}</p>
                <span>
                  Tickets{' '}
                  <button onClick={() => addItemsToCart(cartItem)}>add</button>{' '}
                  {cartItem.quantity}{' '}
                  <button onClick={() => removeItemsToCart(cartItem)}>
                    remove
                  </button>
                </span>
                <h4>{cartItem.name}</h4>
                <p style={{ width: '704px' }}>{cartItem.description}</p>
              </div>
              {/* <img src={x} alt="cancel" className="dropdown__tours--cancel" /> */}
            </div>
          ))}
        </>
      ) : (
        <>add items to your cart</>
      )}

      <div>
        <h3>Total Amount : 3000ksh</h3>
        <button>Check Out</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItem(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItemsToCart: (item) => dispatch(addItemsToCart(item)),
  removeItemsToCart: (item) => dispatch(removeItemsToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
