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

export const FormRow = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
	margin-bottom: 20px;

	@media ${device.mobileL} {
		flex-direction: column;
	}
`;

export const InputField = styled.input`
	font-size: 16px;
	border: 1px solid grey;
	border-radius: 5px;
	overflow: hidden;
	width: 100%;
	height: 40px;

	@media ${device.mobileL} {
		margin-bottom: 5px;
	}
`;

export const CheckoutFormContainer = styled.div`
	width: 40%;
	margin: auto;
	padding: 50px;
	border-radius: 8px;
	border: 1px solid grey;

	@media ${device.mobileL} {
		width: 90%;
		padding: 20px;
		margin: auto;
		/* clear: all; */
	}
`;
