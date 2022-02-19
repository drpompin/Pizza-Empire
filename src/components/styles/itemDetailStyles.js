import styled, { css } from "styled-components";
// import styled from "styled-components";

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

export const ItemDetailHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	margin-bottom: 20px;
`;

export const HeaderNavBack = styled.span``;

export const HeaderText = styled.p`
	font-weight: bold;
	font-size: 20px;
`;

export const NotificationWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	background-color: #d3fde9;
	border: 1px solid #93ecc1;
	border-radius: 3px;
`;

export const NotificationText = styled.span`
	color: #023b20;
	font-size: 12px;

	${(props) =>
		props.boldAndBlack &&
		css`
			color: "#071827";
			font-weight: 900;
			font-size: 16px;
			cursor: pointer;
		`}
`;

export const HeaderRightContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const DetailContainer = styled.div`
	width: 100%;
	display: flex;
	padding: 0 5%;
	justify-content: space-between;
	flex-wrap: wrap;

	@media ${device.mobileL} {
		flex-direction: column;
		padding: 0 20px;
	}
`;

export const ItemDetailLeft = styled.div`
	width: 45%;
	margin-bottom: 20px;

	@media ${device.mobileL} {
		width: 100%;
		height: 250px;
	}
`;

export const ItemDetailRight = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: left;
	padding: 0 15px;

	@media ${device.mobileL} {
		width: 100%;
		margin-bottom: 20px;
		padding: 0;
	}
`;

export const ItemDetailImage = styled.img`
	width: 100%;
	border-radius: 2px;
`;

export const ItemDetailName = styled.span`
	color: #000;
	font-weight: 600;
	margin-top: 5px;

	${(props) =>
		props.noMargin &&
		css`
			margin: 0px;
			line-height: 1;
		`}

	@media ${device.mobileL} {
		font-size: 12px;
		text-align: left;
		margin-top: 5px;
	}
`;

export const ItemDetailDescription = styled.span`
	color: #718596;
	font-weight: 600;
	margin-top: 15px;

	@media ${device.mobileL} {
		font-size: 10px;
		text-align: left;
		margin-top: 5px;
	}
`;

export const DescriptionRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 15px;

	@media ${device.mobileL} {
		margin-top: 15px;
	}
`;

export const ItemDetailPrice = styled.span`
	font-weight: 600;
	color: #000;

	@media ${device.mobileL} {
		font-size: 10px;
	}
`;

export const ItemTotalDetail = styled(ItemDetailPrice)`
	margin-bottom: 20%;

	@media ${device.mobileL} {
		margin-bottom: 10px;
	}
`;

export const ItemInStore = styled.span`
	color: #56636d;
	width: 100%;

	@media ${device.mobileL} {
		font-size: 10px;
		text-align: left;
	}
`;

export const ReviewContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const ReviewIconContainer = styled.span`
	border-radius: 100%;
	height: 30px;
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 5px;

	${(props) =>
		props.nonRounded &&
		css`
			border-radius: 5px;
		`}

	${(props) =>
		props.mobileRating &&
		css`
			border-radius: 0;
			height: 10px;
			width: 10px;
		`}

    ${(props) =>
		props.plain &&
		css`
			background-color: #fff;
		`}

    @media ${device.tablet} {
		font-size: 10px;
		height: 24px;
		width: 24px;
	}
`;

export const BottomActionContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 16px;
	background: #ffffff;
	box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.04);
	margin-top: 20px;
`;

export const ActionButton = styled.button`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	/* height: 45px; */
	padding: 5px;
	width: 167px;
	font-weight: 600;
	border: none;
	border-radius: 5px;
	font-size: 14px;
	line-height: 21px;

	${(props) =>
		props.blue &&
		css`
			background-color: #f52421;
			color: #fff;
		`}

	${(props) =>
		props.fullWidth &&
		css`
			width: 100%;
		`}


    ${(props) =>
		props.plain &&
		css`
			background-color: #fff;
			border: 2px solid #f52421;
			color: #f52421;
		`}

    @media ${device.mobileL} {
		font-size: 10px;
		height: fit-content;
		padding: 0 5px;
		margin-bottom: 10px;
	}
`;
