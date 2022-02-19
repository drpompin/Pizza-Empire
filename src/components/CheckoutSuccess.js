import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearCart } from "../redux/actions/cartActions";

import Success from "../static/images/success.png";

import {
	CheckoutContainer,
	CheckOutImageContainer,
	CheckOutImage,
	ToHome,
	SuccessMessage,
	TopDivv,
} from "./styles/checkoutSuccessStyles";

const Checkout = (props) => {
	// To clear the entire cart
	const handleClearCart = () => {
		props.clearCart();
	};

	return (
		<CheckoutContainer>
			<TopDivv></TopDivv>
			<CheckOutImageContainer>
				<CheckOutImage src={Success} alt="checkout-img" />
				<SuccessMessage>Checkout Successful</SuccessMessage>
				<SuccessMessage style={{ fontSize: "12px", fontWeight: 400 }}>
					Your checkout is now successful
				</SuccessMessage>
			</CheckOutImageContainer>

			<Link
				to="/"
				style={{ textDecoration: "none", width: "100%" }}
				onClick={() => {
					handleClearCart();
				}}
			>
				<ToHome>Got it!</ToHome>
			</Link>
		</CheckoutContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		items: state.addedItems,
		total: state.total,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		clearCart: () => {
			dispatch(clearCart());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
