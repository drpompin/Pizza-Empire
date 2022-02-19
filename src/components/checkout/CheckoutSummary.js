import React from "react";
import { connect } from "react-redux";
import { ItemDetailName, ItemDetailPrice } from "../styles/itemDetailStyles";
import currencyFormat from "../../utils/CurrencyFormatter";
import {
	CartItemContainer,
	CartItemTop,
	CartItemLeft,
	CartItemRight,
	CartItemImage,
} from "../styles/cartStyles";

const CheckoutSummary = (props) => {
	const totalQuantity = props?.items?.reduce((a, b) => ({
		quantity: a.quantity + b.quantity,
	}));

	return (
		<div>
			<div>
				{props.items.map((item) => {
					return (
						<CartItemContainer key={item.id}>
							<CartItemTop style={{ width: "100%" }}>
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

									<div
										style={{
											marginTop: "20px",
											display: "flex",
										}}
									>
										<ItemDetailPrice>
											${currencyFormat(`${item.price}`)} x{" "}
											{item.quantity}
										</ItemDetailPrice>
										<div style={{ margin: "0 10px" }}>
											=
										</div>
										<ItemDetailPrice>
											$
											{currencyFormat(
												`${item.price * item.quantity}`
											)}
										</ItemDetailPrice>
									</div>
								</CartItemRight>
							</CartItemTop>
						</CartItemContainer>
					);
				})}
			</div>

			<div style={{ marginTop: 40 }}>
				<p
					style={{
						textAlign: "left",
						fontWeight: "bold",
						textTransform: "capitalize",
					}}
				>
					Name: {props.formValues.last_name}{" "}
					{props.formValues.first_name}
				</p>
				<p
					style={{
						textAlign: "left",
						fontWeight: "bold",
					}}
				>
					Email: {props.formValues.email}
				</p>
				<p style={{ textAlign: "left", fontWeight: "bold" }}>
					Phone: {props.formValues.phone}
				</p>
				<p style={{ textAlign: "left", fontWeight: "bold" }}>
					Address: {props.formValues.address}
				</p>
				{totalQuantity ? (
					<p style={{ textAlign: "left", fontWeight: "bold" }}>
						Total Cart Items: {totalQuantity.quantity}
					</p>
				) : null}
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
					// padding: "20px 0 0",
				}}
			>
				<ItemDetailName noMargin>Total Cost:</ItemDetailName>
				<ItemDetailPrice style={{ marginLeft: 10 }}>
					${currencyFormat(`${props.total}`)}
				</ItemDetailPrice>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
					marginTop: "20px",
				}}
			>
				<input
					type="checkbox"
					name="accept"
					checked={props.formValues.accept}
					onChange={props.handleFormInput}
					style={{
						width: "20px",
						height: "20px",
						marginRight: "10px",
						cursor: "pointer",
					}}
				/>

				<span>Accept terms and conditions</span>
			</div>

			{!props.formValues.accept && (
				<div style={{ color: "red", textAlign: "left" }}>
					{props.errorMessage}
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		items: state.addedItems,
		total: state.total,
	};
};

export default connect(mapStateToProps)(CheckoutSummary);
