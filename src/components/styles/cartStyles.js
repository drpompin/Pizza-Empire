import styled from "styled-components";
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

export const CartItemContainer = styled.div`
	width: 100%;
	padding: 16px;
	border-bottom: 1px solid #eae7e7;
	display: flex;

	@media ${device.mobileL} {
		flex-direction: column;
	}
`;

export const CartGridContainer = styled.div`
	display: grid;
	grid-template-columns: 65% 30%;
	justify-content: space-between;
	padding: 0 10%;

	@media ${device.mobileL} {
		display: flex;
		flex-direction: column;
	}
`;

export const CartItemTop = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
	justify-content: space-between;
	align-items: center;

	@media ${device.mobileL} {
		width: 100%;
	}
`;

export const CartItemLeft = styled.div`
	width: 50%;
`;

export const CartItemRight = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const CartItemImage = styled.img`
	width: 100%;
`;

export const CartItemAction = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;

	@media ${device.mobileL} {
		/* flex-direction: row; */
		justify-content: space-between;
		width: 100%;
	}
`;

export const CartActionLeft = styled.span`
	display: flex;
	align-items: center;
`;

export const CartActionRight = styled.span`
	display: flex;
	align-items: center;
`;

export const CartSummary = styled.div`
	width: 100%;
	padding: 16px 0;
`;

export const CartTotalRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
