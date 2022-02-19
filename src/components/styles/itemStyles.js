// import styled, { css } from "styled-components";
import styled from "styled-components";

const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

export const device = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopL: `(max-width: ${size.laptopL})`,
	desktop: `(max-width: ${size.desktop})`,
	desktopL: `(max-width: ${size.desktop})`,
};

export const ItemMain = styled.div`
	/* margin-bottom: 20px; */
	display: flex;
`;
export const ItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: box-shadow 0.3s;
	border-radius: 10px;
	border: 1px solid #ccc;
	background: #fff;
	overflow: hidden;
	padding: 30px 0;

	@media ${device.mobileL} {
		padding: 10px 0;
	}

	:hover {
		box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
	}
`;

export const ItemButtonDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	padding-left: 20px;
	margin-top: 10px;
	position: relative;

	@media ${device.mobileL} {
		flex-direction: column;
		justify-content: center;
		padding-left: 20px;
	}
`;

export const ItemImage = styled.img`
	width: 100%;
	border-radius: 5px;
`;

export const ItemName = styled.span`
	color: #718596;
	font-weight: 600;
	margin-top: 5px;
	width: 100%;
	text-align: left;
	padding-left: 20px;

	@media ${device.mobileL} {
		font-size: 10px;
		text-align: left;
		max-height: 15px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
`;

export const ItemToCart = styled(ItemName)`
	position: absolute;
	top: 100%;
	left: 0;
	color: #f52421;

	@media ${device.mobileL} {
		top: 75%;
	}
`;

export const ItemPrice = styled.span`
	font-weight: 600;
	color: #000;
	width: 100%;
	text-align: left;
	padding-left: 20px;

	@media ${device.mobileL} {
		font-size: 10px;
		text-align: left;
	}
`;

export const ItemInStore = styled.span`
	color: #56636d;
	width: 100%;
	text-align: left;
	padding-left: 20px;

	@media ${device.mobileL} {
		font-size: 10px;
		text-align: left;
	}
`;
