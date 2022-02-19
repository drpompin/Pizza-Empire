import styled, { css } from "styled-components";

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

export const HeaderContainer = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	justify-content: space-between;
	padding: 16px;
`;

export const HomeNav = styled.div`
	width: 100%;
	display: flex;
	padding: 8px 16px;
	border-top: 1px solid #cbd6e0;
	border-bottom: 1px solid #cbd6e0;
	justify-content: space-around;
	align-items: center;
`;

export const NavSector = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${device.tablet} {
		justify-content: center;
		align-items: center;
	}
`;

export const NavSelect = styled.select`
	border: none;
	display: flex;

	@media ${device.tablet} {
		font-size: 12px;
		height: fit-content;
		/* max-width: 64px; */
	}
`;

export const NavText = styled.span`
	cursor: pointer;

	@media ${device.tablet} {
		font-size: 12px;
		height: fit-content;
	}
`;

export const NavIconContainer = styled.span`
	background-color: #edf2f7;
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

export const CartNumber = styled.span`
	position: absolute;
	right: -8px;
	top: -8px;
	font-size: 10px;
	font-weight: 900;
	color: white;
	background-color: #f52421;
	line-height: 1;
	margin: 0;
	width: 14px;
	height: 14px;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
`;

export const HorBar = styled.span`
	width: 1px;
	height: 20px;
	background-color: #cbd6e0;
`;

export const NavDesc = {};

export const SearchContainer = styled.div`
	padding: 0 16px;
	width: 100%;
	margin: 20px 0;
	position: relative;
`;

export const SearchInput = styled.input`
	width: 100%;
	background-color: #edf2f7;
	height: 40px;
	padding-left: 10px;
	border: none;
	border-radius: 2px;
`;

export const SearchSpan = styled.span`
	position: absolute;
	right: 30px;
	top: calc(40px - 30px);
`;

export const CarouselWrapper = styled.div`
	margin: 20px 0;
`;

export const CarouselContainer = styled.div`
	height: 250px;
	margin: 0 10px;
	display: flex;
	border-radius: 5px;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	padding: 10px;
	background-size: 100%;
	background-position: center;
	background-repeat: no-repeat;
`;

export const CarouselImage = {
	width: "100%",
};

export const ContactText = styled.span`
	color: #fff;
	font-weight: 600;
	line-height: 18px;
	font-size: 16px;
	margin-right: 50px;
	text-align: left;

	@media ${device.mobileL} {
		font-size: 12px;
		margin-right: 10px;
		min-width: 130px;
	}
`;

export const IssueText = styled.span`
	color: #ee6f44;
	font-size: 16px;
	font-weight: 600;

	@media ${device.mobileL} {
		font-size: 12px;
	}
`;

export const ContactButton = styled.button`
	color: #fff;
	background-color: #227eff;
	border-radius: 5px;
	font-size: 12px;
	border: none;
	padding: 8px 20px;
	cursor: pointer;

	@media ${device.tablet} {
		padding: 8px;
	}

	@media ${device.mobileS} {
		padding: 6px;
	}
`;

export const CategoriesRow = styled.div`
	width: 100%;
	display: flex;
	padding: 16px;
	padding-top: 0;
	justify-content: space-between;
	align-items: flex-start;
`;

export const CategoriesColumn = styled.div`
	width: 18%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CategoriesContainer = styled.span`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	margin-bottom: 10px;

	${(props) =>
		props.blue &&
		css`
			background: #227eff;
		`}

	${(props) =>
		props.orange &&
		css`
			background: #ee6f44;
		`}

    ${(props) =>
		props.purple &&
		css`
			background: #7e42f5;
		`}

    ${(props) =>
		props.green &&
		css`
			background: #05944f;
		`}

    @media ${device.mobileL} {
		width: 48px;
		height: 48px;
	}
`;

export const CategoriesText = styled.span`
	@media ${device.mobileL} {
		font-size: 10px;
	}
`;

export const ProductSection = styled.div`
	width: 100%;
	justify-content: center;
	display: grid;
	grid-template-columns: 24% 24% 24% 24%;
	gap: 20px;
	padding: 0 10%;

	@media ${device.mobileL} {
		padding: 0 20px;
		grid-template-columns: 45% 45%;
		gap: 10px;
	}
	/* max-height: 400px; */
	/* overflow-y: scroll; */
`;

export const BottomNav = styled.div`
	display: none;

	@media ${device.tablet} {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 0 16px;
	}
`;

export const BottomItem = styled.span`
	width: 15%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 0;
	justify-content: center;
`;

export const BottomItemImage = styled.span`
	${(props) =>
		props.blue &&
		css`
			color: #227eff;
		`}
`;

export const BottomItemText = styled.text`
	color: "#718596";

	${(props) =>
		props.blue &&
		css`
			color: #227eff;
		`};

	@media ${device.mobileL} {
		font-size: 10px;
	}
`;
