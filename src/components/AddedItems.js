import React from "react";
import { Link } from "react-router-dom";
import currencyFormat from "../utils/CurrencyFormatter";
import { IconContext } from "react-icons";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import { ItemInStore, ItemTotalDetail } from "./styles/itemDetailStyles";
import {
	CartItemContainer,
	CartItemTop,
	CartItemLeft,
	CartItemRight,
	CartItemImage,
	CartItemAction,
	CartActionLeft,
	CartActionRight,
} from "./styles/cartStyles";

import {
	ItemDetailName,
	ItemDetailPrice,
	ReviewIconContainer,
} from "./styles/itemDetailStyles";

const plusMinusStyle = {
	fontSize: "12px",
	color: "#123CD3",
	cursor: "pointer",
};

export const AddedItems = (props) => {
	const { handleRemove, handleAddQuantity, handleSubtractQuantity } = props;
	return (
		<div>
			{props.cartItems.items.length ? (
				props.cartItems.items.map((item) => {
					return (
						<CartItemContainer key={item.id}>
							<CartItemTop>
								<CartItemLeft>
									<CartItemImage
										src={item.image}
										alt={item.image}
									/>
								</CartItemLeft>

								<CartItemRight>
									<ItemDetailName noMargin>
										{item.product_name}
									</ItemDetailName>
									<ItemDetailPrice>
										{" "}
										${currencyFormat(`${item.price}`)} Each
									</ItemDetailPrice>
								</CartItemRight>
							</CartItemTop>

							<CartItemAction>
								<ItemTotalDetail>
									Item Total: $
									{currencyFormat(
										`${item.price}` * `${item.quantity}`
									)}
								</ItemTotalDetail>

								<div
									style={{
										width: "100%",
										display: "flex",
										alignItems: "flex-end",
										paddingBottom: 5,
										justifyContent: "space-between",
									}}
								>
									<CartActionLeft>
										<ReviewIconContainer
											style={{ lineHeight: "1" }}
										>
											<IconContext.Provider
												value={{
													style: {
														fontSize: "20px",
														color: "#f52421",
													},
												}}
											>
												<div
													onClick={(e) => {
														e.preventDefault();
														handleRemove(item.id);
													}}
												>
													<FaTrash />
												</div>
											</IconContext.Provider>
										</ReviewIconContainer>

										<ItemDetailName
											style={{
												margin: "0",
												lineHeight: "1",
											}}
										>
											Delete
										</ItemDetailName>
									</CartActionLeft>

									<CartActionRight>
										<ReviewIconContainer>
											<IconContext.Provider
												value={{
													style: plusMinusStyle,
												}}
											>
												<div
													onClick={(e) => {
														e.preventDefault();
														handleSubtractQuantity(
															item.id
														);
													}}
												>
													<FaMinus />
												</div>
											</IconContext.Provider>
										</ReviewIconContainer>

										<ItemInStore
											style={{
												textAlign: "center",
												fontWeight: "600",
												fontSize: "12px",
												color: "#000",
											}}
										>
											{item.quantity}
										</ItemInStore>

										<ReviewIconContainer>
											<IconContext.Provider
												value={{
													style: plusMinusStyle,
												}}
											>
												<div
													onClick={(e) => {
														e.preventDefault();
														handleAddQuantity(
															item.id
														);
													}}
												>
													<FaPlus />
												</div>
											</IconContext.Provider>
										</ReviewIconContainer>
									</CartActionRight>
								</div>
							</CartItemAction>
						</CartItemContainer>
					);
				})
			) : (
				<p>Cart is Empty</p>
			)}
		</div>
	);
};
