import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
	removeItem,
	addQuantity,
	subtractQuantity,
} from "../redux/actions/cartActions";
import { IconContext } from "react-icons";
import { FaLessThan } from "react-icons/fa";
import Item from "./Item";
import currencyFormat from "../utils/CurrencyFormatter";

import {
	ItemDetailHeader,
	HeaderText,
	HeaderRightContainer,
	ItemDetailName,
	ItemDetailPrice,
} from "./styles/itemDetailStyles";

import { ActionButton } from "./styles/itemDetailStyles";

import { NavIconContainer, ProductSection } from "./styles/homeStyles";

import {
	CartGridContainer,
	CartSummary,
	CartTotalRow,
} from "./styles/cartStyles";
import { AddedItems } from "./AddedItems";

const Cart = (props) => {
	//to remove the item completely
	const handleRemove = (id) => {
		props.removeItem(id);
	};
	//to add the quantity
	const handleAddQuantity = (id) => {
		props.addQuantity(id);
	};
	//to substruct from the quantity
	const handleSubtractQuantity = (id) => {
		props.subtractQuantity(id);
	};

	const handleClick = (id) => {
		props.addToCart(id);
	};

	const totalQuantity =
		props.items.length < 1
			? ""
			: props?.items?.reduce((a, b) => ({
					quantity: a.quantity + b.quantity,
			  }));

	let itemList = props.items.map((item) => {
		return <Item handleClick={handleClick} key={item.id} item={item} />;
	});

	return (
		<>
			<ItemDetailHeader style={{ padding: "16px 10%" }}>
				<NavIconContainer
					nonRounded
					onClick={() => props.history.goBack()}
				>
					<IconContext.Provider
						value={{
							style: { fontSize: "12px", cursor: "pointer" },
						}}
					>
						<div>
							<FaLessThan />
						</div>
					</IconContext.Provider>
				</NavIconContainer>

				<HeaderText>Cart</HeaderText>

				<HeaderRightContainer></HeaderRightContainer>
			</ItemDetailHeader>

			<CartGridContainer>
				<AddedItems
					handleRemove={handleRemove}
					handleAddQuantity={handleAddQuantity}
					handleSubtractQuantity={handleSubtractQuantity}
					cartItems={props}
				/>

				<CartSummary>
					{props.items.length ? (
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

					{props.items.length ? (
						<CartTotalRow style={{ marginBottom: "10px" }}>
							<ItemDetailPrice
								style={{ fontSize: "12px", fontWeight: "500" }}
							>
								Subtotal
							</ItemDetailPrice>
							<ItemDetailPrice
								style={{ fontSize: "12px", fontWeight: "500" }}
							>
								${currencyFormat(`${props.total}`)}
							</ItemDetailPrice>
						</CartTotalRow>
					) : null}

					{props.items.length ? (
						<CartTotalRow style={{ marginBottom: "20px" }}>
							<ItemDetailName
								style={{ fontSize: "14px", fontWeight: "500" }}
							>
								Total
							</ItemDetailName>
							<ItemDetailName style={{ fontSize: "14px" }}>
								${currencyFormat(`${props.total}`)}
							</ItemDetailName>
						</CartTotalRow>
					) : null}

					{props.items.length ? (
						<Link
							to="/checkout"
							style={{ width: "100%", textDecoration: "none" }}
						>
							<ActionButton
								style={{ marginTop: "20%" }}
								fullWidth
								blue
							>
								Checkout
							</ActionButton>
						</Link>
					) : null}
				</CartSummary>
			</CartGridContainer>

			<>
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
						padding: "16px 10% 10px",
					}}
				>
					<ItemDetailName>Recently viewed</ItemDetailName>

					<ItemDetailName style={{ color: "#227EFF" }}>
						View all
					</ItemDetailName>
				</div>

				{props.items.length < 1 ? (
					""
				) : (
					<ProductSection style={{ marginBottom: "20px" }}>
						{itemList}
					</ProductSection>
				)}
			</>
		</>
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
		removeItem: (id) => {
			dispatch(removeItem(id));
		},
		addQuantity: (id) => {
			dispatch(addQuantity(id));
		},
		subtractQuantity: (id) => {
			dispatch(subtractQuantity(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
