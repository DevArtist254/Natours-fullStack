import React from 'react';
import { connect } from 'react-redux';
import {
  selectCartItem,
  selectCartItemSum,
} from './../redux/cart/cart.selector';
import { Icon } from '@iconify/react';
import {
  addItemsToCart,
  removeItemsToCart,
} from './../redux/cart/cart.actions';

const CheckOut = ({
  cartItems,
  addItemsToCart,
  removeItemsToCart,
  cartItemsSum,
}) => {
  return (
    <div className="checkout">
      <h1 className="checkout-main__header">Checkout</h1>
      <div className="checkout-content">
        <div className="checkout-main">
          <div style={{ width: '70%' }}>
            {cartItems ? (
              <>
                {cartItems.map((cartItem) => (
                  <div className="checkout-main__tour" key={cartItem.id}>
                    <div className="checkout-main__tour--space"></div>
                    <div
                      style={{
                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${cartItem.imageCover})`,
                      }}
                      className="checkout-main__tour--img"
                    ></div>
                    <div className="checkout-main__tour--content">
                      <p className="checkout-main__tour--text">
                        Price ${cartItem.price}
                      </p>
                      <span className="checkout-main__tour--text">
                        Tickets{' '}
                        <Icon
                          onClick={() => addItemsToCart(cartItem)}
                          icon="ic:twotone-keyboard-double-arrow-left"
                          style={{ fontSize: '4rem' }}
                          color="#3cbc81"
                        />
                        {cartItem.quantity}{' '}
                        <Icon
                          onClick={() => removeItemsToCart(cartItem)}
                          icon="ic:twotone-keyboard-double-arrow-right"
                          style={{ fontSize: '4rem' }}
                          color="#3cbc81"
                        />
                      </span>
                      <h4 className="checkout-main__tour--subHeader">
                        {cartItem.name}
                      </h4>
                      <p style={{ width: '560px', textAlign: 'end' }}>
                        {cartItem.description}
                      </p>
                    </div>
                    {/* <img src={x} alt="cancel" className="dropdown__tours--cancel" /> */}
                  </div>
                ))}
              </>
            ) : (
              <>add items to your cart</>
            )}
          </div>
          <div className="checkout-payment">
            <h2 className="checkout-payment__header">Lets get lost</h2>
            <h3 className="checkout-payment__text">
              Total Amount : {cartItemsSum}
            </h3>
            <button className="checkout-payment__btn">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItem(state),
  cartItemsSum: selectCartItemSum(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItemsToCart: (item) => dispatch(addItemsToCart(item)),
  removeItemsToCart: (item) => dispatch(removeItemsToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
