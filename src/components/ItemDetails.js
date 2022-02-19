import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import currencyFormat from "../utils/CurrencyFormatter";

import {
	ItemDetailHeader,
	HeaderText,
	HeaderRightContainer,
	DetailContainer,
	ItemDetailImage,
	ItemDetailName,
	ItemDetailDescription,
	DescriptionRow,
	ItemDetailPrice,
	ItemDetailLeft,
	ItemDetailRight,
	ReviewContainer,
	ReviewIconContainer,
	BottomActionContainer,
	ActionButton,
	NotificationWrapper,
	NotificationText,
} from "./styles/itemDetailStyles";

import { NavIconContainer, CartNumber } from "./styles/homeStyles";

const RateIconStyle = {
	fontSize: "12px",
	color: "#FFCA42",
};

const ItemDetail = (props) => {
	const [itemAdded, setItemAdded] = React.useState(false);

	const addItemToCart = (id) => {
		props.addToCart(id);
		setItemAdded(true);

		setTimeout(() => {
			setItemAdded(false);
		}, 2000);
	};

	const itemDetail = props.items.find(
		(item) => item.id === Number(props.match.params.id)
	);

	return (
		<div style={{ padding: "20px 5%" }}>
			<ItemDetailHeader>
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

				<HeaderText>Details</HeaderText>

				<HeaderRightContainer>
					<NavIconContainer style={{ marginRight: "10px" }}>
						<IconContext.Provider
							value={{ style: { fontSize: "12px" } }}
						>
							<div>
								<FaSearch />
							</div>
						</IconContext.Provider>
					</NavIconContainer>

					<NavIconContainer style={{ position: "relative" }}>
						<IconContext.Provider
							value={{
								style: { fontSize: "12px", color: "#000" },
							}}
						>
							<Link to="/cart">
								<FaShoppingCart />
							</Link>
						</IconContext.Provider>
						{props.cartNumber.length > 0 && (
							<CartNumber>{props.cartNumber.length}</CartNumber>
						)}
					</NavIconContainer>
				</HeaderRightContainer>
			</ItemDetailHeader>

			{itemAdded && (
				<div style={{ padding: "0 16px 10px" }}>
					<NotificationWrapper>
						<NotificationText>
							Item added to cart successfully
						</NotificationText>
						<NotificationText
							boldAndBlack
							onClick={() => setItemAdded(false)}
						>
							x
						</NotificationText>
					</NotificationWrapper>
				</div>
			)}

			<DetailContainer>
				<ItemDetailLeft>
					<ItemDetailImage src={itemDetail.image} alt="item-img" />
				</ItemDetailLeft>

				<ItemDetailRight>
					<ItemDetailName noMargin>
						{itemDetail.product_name}
					</ItemDetailName>
					<ItemDetailDescription>
						{itemDetail.description}
					</ItemDetailDescription>

					<DescriptionRow>
						<ItemDetailPrice>
							${currencyFormat(`${itemDetail.price}`)}
						</ItemDetailPrice>
					</DescriptionRow>
					<DescriptionRow>
						<ItemDetailPrice>
							Size: {itemDetail.size}
						</ItemDetailPrice>
					</DescriptionRow>

					<DescriptionRow
						style={{
							borderTop: "1px solid #d7e1e8",
							borderBottom: "1px solid #d7e1e8",
							padding: "10px 0",
						}}
					>
						<ItemDetailName style={{ margin: "0" }}>
							Product Description
						</ItemDetailName>

						<NavIconContainer
							plain
							style={{
								width: "auto",
								height: "auto",
								margin: "0",
							}}
						>
							<IconContext.Provider
								value={{
									style: {
										fontSize: "12px",
										cursor: "pointer",
									},
								}}
							>
								<div>
									<FaGreaterThan />
								</div>
							</IconContext.Provider>
						</NavIconContainer>
					</DescriptionRow>

					<ReviewContainer>
						<DescriptionRow>
							<ItemDetailName>Review and Ratings</ItemDetailName>

							<ItemDetailName
								style={{ color: "#227EFF", cursor: "pointer" }}
							>
								View all
							</ItemDetailName>
						</DescriptionRow>

						<DescriptionRow>
							<ItemDetailName
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<IconContext.Provider
									value={{ style: RateIconStyle }}
								>
									<div>
										<FaStar />
									</div>
								</IconContext.Provider>

								<IconContext.Provider
									value={{ style: RateIconStyle }}
								>
									<div>
										<FaStar />
									</div>
								</IconContext.Provider>

								<IconContext.Provider
									value={{ style: RateIconStyle }}
								>
									<div>
										<FaStar />
									</div>
								</IconContext.Provider>

								<IconContext.Provider
									value={{
										style: {
											color: "#EEEFF2",
											fontSize: "12px",
										},
									}}
								>
									<div>
										<FaStar />
									</div>
								</IconContext.Provider>

								<IconContext.Provider
									value={{
										style: {
											color: "#EEEFF2",
											fontSize: "12px",
										},
									}}
								>
									<div>
										<FaStar />
									</div>
								</IconContext.Provider>

								<ItemDetailName
									style={{ margin: "0", marginLeft: "10px" }}
								>
									3.0
								</ItemDetailName>
							</ItemDetailName>
						</DescriptionRow>

						<ItemDetailDescription style={{ margin: "10px 0" }}>
							{itemDetail.description}
							{itemDetail.description}
						</ItemDetailDescription>

						<ItemDetailDescription
							style={{
								display: "flex",
								justifyContent: "flex-start",
								alignItems: "center",
							}}
						>
							<ReviewIconContainer
								style={{
									width: "fit-content",
									height: "fit-content",
									lineHeight: "1",
								}}
							>
								<IconContext.Provider
									value={{ style: { fontSize: "20px" } }}
								>
									<div>
										<FaSmile />
									</div>
								</IconContext.Provider>
							</ReviewIconContainer>

							<ItemDetailName
								style={{
									margin: "0",
									marginLeft: "5px",
									lineHeight: "1",
								}}
							>
								Segun Arinze
							</ItemDetailName>
						</ItemDetailDescription>
					</ReviewContainer>
				</ItemDetailRight>
			</DetailContainer>

			<BottomActionContainer>
				<ActionButton
					style={{ marginRight: "10px" }}
					onClick={() => {
						addItemToCart(itemDetail.id);
					}}
					blue
				>
					Add To Cart
				</ActionButton>

				{/* <ActionButton plain>Wishlist</ActionButton> */}
			</BottomActionContainer>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		items: state.items,
		cartNumber: state.addedItems,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => {
			dispatch(addToCart(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
