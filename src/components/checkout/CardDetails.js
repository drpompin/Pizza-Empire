import React from "react";
import { FormRow, InputField } from "../styles/checkoutFormStyles";

const CardDetails = ({ handleFormInput, formValues, errorMessage }) => {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = "0" + dd;
	}
	if (mm < 10) {
		mm = "0" + mm;
	}

	today = yyyy + "-" + mm + "-" + dd;

	return (
		<>
			<div style={{ color: "red" }}>{errorMessage}</div>

			<FormRow>
				<div style={{ width: "100%" }}>
					<div style={{ textAlign: "left" }}>Card number</div>
					<InputField
						type="number"
						name="card_number"
						value={formValues.card_number}
						onChange={handleFormInput}
						maxlength="16"
						minlength="16"
						placeholder="16-digits card number"
					/>
				</div>
			</FormRow>

			<FormRow>
				<div style={{ width: "50%" }}>
					<div style={{ textAlign: "left" }}>Expiration year</div>
					<InputField
						type="number"
						name="year"
						value={formValues.year}
						onChange={handleFormInput}
						min={yyyy}
						maxlength="4"
						placeholder="E.g. 2022"
					/>
				</div>

				<div style={{ width: "50%" }}>
					<div style={{ textAlign: "left" }}>Expiration month</div>
					<InputField
						type="number"
						min="1"
						max="12"
						name="month"
						value={formValues.month}
						onChange={handleFormInput}
						maxlength="2"
						minlength="1"
						placeholder="E.g. 12"
					/>
				</div>
			</FormRow>

			<FormRow>
				<div style={{ width: "50%" }}>
					<div style={{ textAlign: "left" }}>CVV</div>
					<InputField
						type="number"
						name="cvv"
						value={formValues.cvv}
						onChange={handleFormInput}
						maxlength="3"
						minlength="3"
						placeholder="3-digits cvv code"
					/>
				</div>
			</FormRow>
		</>
	);
};

export default CardDetails;
