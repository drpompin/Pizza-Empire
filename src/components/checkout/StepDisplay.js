import React from "react";
import { connect } from "react-redux";
import UserData from "./UserData";
import CardDetails from "./CardDetails";
import CheckoutSummary from "./CheckoutSummary";
import currencyFormat from "../../utils/CurrencyFormatter";

import { ItemDetailName, ItemDetailPrice } from "../styles/itemDetailStyles";
import { CartSummary, CartTotalRow } from "../styles/cartStyles";

const CartItemSummary = (props) => {
	const totalQuantity =
		props?.props?.items.length < 1
			? ""
			: props?.props?.items?.reduce((a, b) => ({
					quantity: a.quantity + b.quantity,
			  }));

	return (
		<CartSummary>
			{props?.props?.items.length ? (
				<CartTotalRow style={{ marginBottom: "10px" }}>
					<ItemDetailPrice
						style={{ fontSize: "12px", fontWeight: "500" }}
					>
						Total Items in Cart
					</ItemDetailPrice>
					<ItemDetailPrice
						style={{ fontSize: "12px", fontWeight: "500" }}
					>
						{totalQuantity.quantity}
					</ItemDetailPrice>
				</CartTotalRow>
			) : null}

			{props?.props?.items.length ? (
				<CartTotalRow style={{ marginBottom: "10px" }}>
					<ItemDetailPrice
						style={{ fontSize: "12px", fontWeight: "500" }}
					>
						Subtotal
					</ItemDetailPrice>
					<ItemDetailPrice
						style={{ fontSize: "12px", fontWeight: "500" }}
					>
						${currencyFormat(`${props.props.total}`)}
					</ItemDetailPrice>
				</CartTotalRow>
			) : null}

			{props?.props?.items.length ? (
				<CartTotalRow style={{ marginBottom: "20px" }}>
					<ItemDetailName
						style={{ fontSize: "14px", fontWeight: "500" }}
					>
						Total
					</ItemDetailName>
					<ItemDetailName style={{ fontSize: "14px" }}>
						${currencyFormat(`${props.props.total}`)}
					</ItemDetailName>
				</CartTotalRow>
			) : null}
		</CartSummary>
	);
};

const StepDisplay = (props) => {
	const { currentStep, handleFormInput, formValues, errorMessage } = props;

	switch (currentStep) {
		case 1:
			return (
				<>
					<CartItemSummary props={props} />
					<UserData
						errorMessage={errorMessage}
						handleFormInput={handleFormInput}
						formValues={formValues}
					/>
				</>
			);
		case 2:
			return (
				<>
					<CartItemSummary props={props} />
					<CardDetails
						errorMessage={errorMessage}
						handleFormInput={handleFormInput}
						formValues={formValues}
					/>
				</>
			);
		case 3:
			return (
				<CheckoutSummary
					errorMessage={errorMessage}
					handleFormInput={handleFormInput}
					formValues={formValues}
				/>
			);

		default:
			return null;
	}
};

const mapStateToProps = (state) => {
	return {
		items: state.addedItems,
		total: state.total,
	};
};

export default connect(mapStateToProps)(StepDisplay);
