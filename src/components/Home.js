import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { addToCart } from "../redux/actions/cartActions";
import Item from "./Item";
import { ActionButton } from "./styles/itemDetailStyles";
import { GiChoice } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaHome } from "react-icons/fa";
import { FaCrutch } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import pizzaBannerImg from "../static/images/pizzaBanner.png";
import pizzaBanner2Img from "../static/images/pizzaBanner2.jpeg";

import {
	HeaderContainer,
	HomeNav,
	NavSector,
	NavIconContainer,
	NavText,
	SearchContainer,
	SearchInput,
	SearchSpan,
	CarouselWrapper,
	CarouselContainer,
	NavSelect,
	HorBar,
	ProductSection,
	BottomNav,
	BottomItem,
	BottomItemImage,
	BottomItemText,
	CartNumber,
} from "./styles/homeStyles";

import {
	ItemPrice,
	ItemWrapper,
	ItemImage,
	ItemName,
} from "./styles/itemStyles";

const BottomFontStyle = {
	fontSize: "20px",
	color: "#718596",
};

const BottomFontStyleBlue = {
	fontSize: "20px",
	color: "#227EFF",
};

const Home = (props) => {
	console.log("propsss", props);
	const [itemAdded, setItemAdded] = React.useState(false);

	const handleClick = (id) => {
		props.addToCart(id);
	};

	const addItemToCart = (id) => {
		props.addToCart(id);
		setItemAdded(true);
	};

	// let itemList = props.items.map((item) => {
	// 	return (
	// 		<Item
	// 			handleClick={handleClick}
	// 			addItemToCart={addItemToCart}
	// 			key={item.id}
	// 			item={item}
	// 			itemAdded={itemAdded}
	// 			setItemAdded={setItemAdded}
	// 		/>
	// 	);
	// });

	const [search, setSearch] = useState("");

	const handleLocationChange = (e) => {
		e.preventDefault();
		const searchToLower = e.target.value.toLowerCase();
		setSearch(searchToLower);
	};

	const filteredProducts = props.items.filter((product) => {
		return (
			// product.description.toLowerCase().includes(search) ||
			product.product_name.toLowerCase().includes(search) ||
			product.size.toLowerCase().includes(search)
		);
	});

	const mappedSize = props.items.filter(
		(v, i, a) => a.findIndex((t) => t.size === v.size) === i
	);

	const maxItem = 12;
	const [page, setPage] = useState(0);
	const totalItems = props.items.length;
	const maxPage = Math.ceil(totalItems / maxItem);

	const onNextPage = () => {
		setPage((page + 1) % maxPage);
	};
	const onPrevPage = () => {
		setPage((page - 1) % maxPage);
	};

	return (
		<div className="container">
			<HeaderContainer>Pizza Empire</HeaderContainer>

			<HomeNav>
				<NavSector>
					<NavIconContainer>
						<IconContext.Provider
							value={{
								style: { fontSize: "12px", color: "#227EFF" },
							}}
						>
							<div>
								<GiChoice />
							</div>
						</IconContext.Provider>
					</NavIconContainer>

					<NavSelect onChange={handleLocationChange}>
						<option value="">Select Size</option>
						{mappedSize.map((size) => {
							return (
								<option key={size.id} value={size.size}>
									{size.size}
								</option>
							);
						})}
					</NavSelect>
				</NavSector>

				<HorBar />

				<NavSector>
					<Link
						to="/cart"
						style={{
							textDecoration: "none",
							width: "100%",
							display: "flex",
							lineHeight: "1",
							alignItems: "center",
							color: "#000",
						}}
					>
						<NavIconContainer
							style={{ position: "relative", marginRight: "5px" }}
						>
							<IconContext.Provider
								value={{
									style: {
										fontSize: "12px",
										color: "#2E4457",
									},
								}}
							>
								<FaShoppingCart />
							</IconContext.Provider>
							{props.cartNumber.length > 0 && (
								<CartNumber>
									{props.cartNumber.length}
								</CartNumber>
							)}
						</NavIconContainer>
						<NavText>Cart</NavText>
					</Link>
				</NavSector>
			</HomeNav>

			<SearchContainer>
				<SearchInput
					placeholder="Search pizza name or size"
					onChange={(e) => {
						setSearch(e.target.value.toLowerCase());
					}}
				/>
				<SearchSpan>
					<IconContext.Provider value={{}}>
						<div>
							<FaSearch />
						</div>
					</IconContext.Provider>
				</SearchSpan>
			</SearchContainer>

			{search.length > 1 && (
				<ProductSection>
					{filteredProducts.map((product) => (
						<Link
							to={`/item-detail/${product.id}`}
							style={{ textDecoration: "none" }}
							key={product.id}
						>
							<ItemWrapper>
								<ItemImage
									src={product.image}
									alt={product.title}
								></ItemImage>
								<ItemName>{product.product_name}</ItemName>
								<ItemPrice>${product.price}</ItemPrice>
								<ItemPrice
									style={{ textTransform: "capitalize" }}
								>
									{product.size}
								</ItemPrice>
							</ItemWrapper>
						</Link>
					))}
				</ProductSection>
			)}

			<CarouselWrapper>
				<Carousel
					showArrows={false}
					showStatus={false}
					infiniteLoop={true}
					showThumbs={false}
					autoPlay={true}
					stopOnHover={true}
					swipeable={true}
					showIndicators={false}
					emulateTouch={true}
					centerMode={true}
					centerSlidePercentage={80}
					dynamicHeight={false}
				>
					<CarouselContainer
						style={{
							backgroundImage: `url(${pizzaBanner2Img})`,
						}}
					></CarouselContainer>
					<CarouselContainer
						style={{
							backgroundImage: `url(${pizzaBannerImg})`,
						}}
					></CarouselContainer>
					{/* <CarouselContainer
						style={{
							backgroundImage: `url(${pizzaBanner2Img})`,
						}}
					></CarouselContainer> */}
				</Carousel>
			</CarouselWrapper>

			<div
				style={{
					margin: "50px 0 20px",
					fontSize: "24px",
					fontWeight: "bold",
					padding: "0 5%",
				}}
			>
				Products List
			</div>

			<ProductSection>
				{props.items
					.slice(page * maxItem, maxItem * (page + 1))
					.map((item, index) => {
						return (
							<Item
								handleClick={handleClick}
								addItemToCart={addItemToCart}
								key={index + 1}
								item={item}
								itemAdded={itemAdded}
								setItemAdded={setItemAdded}
							/>
						);
					})}
			</ProductSection>

			<div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						margin: "30px 0 10px",
						gap: 20,
					}}
				>
					<ActionButton blue onClick={onPrevPage} disabled={!page}>
						Prev
					</ActionButton>

					<ActionButton
						blue
						onClick={onNextPage}
						disabled={page === Math.ceil(totalItems / maxItem) - 1}
					>
						Next
					</ActionButton>
				</div>
				<p>
					{page + 1} of {maxPage}
				</p>
			</div>

			<BottomNav>
				<BottomItem>
					<BottomItemImage>
						<IconContext.Provider
							value={{ style: BottomFontStyle }}
						>
							<div>
								<FaHome />
							</div>
						</IconContext.Provider>
					</BottomItemImage>
					<BottomItemText>Home</BottomItemText>
				</BottomItem>

				<BottomItem style={{ borderTop: "2px solid #227EFF" }}>
					<BottomItemImage>
						<IconContext.Provider
							value={{ style: BottomFontStyleBlue }}
						>
							<div>
								<FaShoppingCart />
							</div>
						</IconContext.Provider>
					</BottomItemImage>
					<BottomItemText blue>Buy</BottomItemText>
				</BottomItem>

				<BottomItem>
					<BottomItemImage>
						<IconContext.Provider
							value={{ style: BottomFontStyle }}
						>
							<div>
								<FaCrutch />
							</div>
						</IconContext.Provider>
					</BottomItemImage>
					<BottomItemText>Deals</BottomItemText>
				</BottomItem>

				<BottomItem>
					<BottomItemImage>
						<IconContext.Provider
							value={{ style: BottomFontStyle }}
						>
							<div>
								<FaWallet />
							</div>
						</IconContext.Provider>
					</BottomItemImage>
					<BottomItemText>Wallet</BottomItemText>
				</BottomItem>

				<BottomItem>
					<BottomItemImage>
						<IconContext.Provider
							value={{ style: BottomFontStyle }}
						>
							<div>
								<FaListUl />
							</div>
						</IconContext.Provider>
					</BottomItemImage>
					<BottomItemText>More</BottomItemText>
				</BottomItem>
			</BottomNav>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		items: state.items,
		//   cartNumber: state.addedItems.length,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
