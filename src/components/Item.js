import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ActionButton } from "./styles/itemDetailStyles";
import currencyFormat from "../utils/CurrencyFormatter";

import {
	ItemMain,
	ItemWrapper,
	ItemImage,
	ItemName,
	ItemPrice,
	ItemButtonDiv,
	ItemToCart,
} from "./styles/itemStyles";

const Item = (props) => {
	const { item, addItemToCart, itemAdded, setItemAdded } = props;
	const [selectedId, setSelectedId] = useState();

	return (
		<ItemMain>
			<ItemWrapper key={item.id}>
				<ItemImage src={item.image} alt={item.title}></ItemImage>
				<ItemName>{item.product_name}</ItemName>
				<ItemPrice>${currencyFormat(`${item.price}`)}</ItemPrice>
				{/* <ItemInStore>{item.stock} pizzas available</ItemInStore> */}

				<ItemButtonDiv>
					<ActionButton
						style={{
							width: "fit-content",
							// padding: "0 20px",
							marginRight: "10px",
						}}
						onClick={() => {
							addItemToCart(item.id);
							setSelectedId(item.id);

							setTimeout(() => {
								setItemAdded(false);
								setSelectedId("");
							}, 1000);
						}}
						blue
					>
						Add To Cart
					</ActionButton>

					{itemAdded && item.id === selectedId && (
						// <ItemName
						// 	style={{
						// 		position: "absolute",
						// 		top: "100%",
						// 		left: 0,
						// 		color: "#f52421",
						// 	}}
						// >
						// 	Item added to cart
						// </ItemName>

						<ItemToCart>Item added to cart</ItemToCart>
					)}

					<Link
						to={`/item-detail/${item.id}`}
						style={{ textDecoration: "none", display: "flex" }}
					>
						<ActionButton
							plain
							style={{
								width: "fit-content",
								// padding: "0 20px",
							}}
						>
							View
						</ActionButton>
					</Link>
				</ItemButtonDiv>
			</ItemWrapper>
		</ItemMain>
	);
};

export default Item;
