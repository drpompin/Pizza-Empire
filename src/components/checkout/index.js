import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CheckoutFormContainer } from "../styles/checkoutFormStyles";
import { ActionButton } from "../styles/itemDetailStyles";
import StepDisplay from "./StepDisplay";
import { IoIosArrowBack } from "react-icons/io";

const CheckoutForm = () => {
	const [step, setStep] = useState(1);
	const [errorMessage, setErrorMessage] = useState("");

	const [formValues, setFormValues] = useState({
		last_name: "",
		first_name: "",
		email: "",
		phone: "",
		address: "",
		card_number: "",
		year: "",
		month: "",
		cvv: "",
		accept: false,
	});

	const incrementStep = () => {
		if (
			step === 1 &&
			(formValues.last_name === "" ||
				formValues.first_name === "" ||
				formValues.email === "" ||
				formValues.phone === "" ||
				formValues.address === "")
		) {
			setErrorMessage("*All fields are required");
			return;
		}
		if (
			step === 2 &&
			(formValues.card_number === "" ||
				formValues.year === "" ||
				formValues.month === "" ||
				formValues.cvv === "")
		) {
			setErrorMessage("*All fields are required");
			return;
		}
		setErrorMessage("");
		setStep((previousStep) => previousStep + 1);
	};
	const decrementStep = () => {
		setStep((previousStep) => previousStep - 1);
	};

	const handleFormInput = (e) => {
		const target = e.target;
		const value =
			target.type === "checkbox" ? target.checked : target.value;

		setFormValues({
			...formValues,
			[e.target.name]: value,
		});
	};

	const handleSubmit = async (values) => {
		if (!formValues.accept) {
			setErrorMessage("*You must accept our terms and conditions");
			return;
		}
		console.log(values);
		// alert(JSON.stringify(values));
	};

	const history = useHistory();

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<CheckoutFormContainer>
				<div style={{ display: "flex", justifyContent: "flex-start" }}>
					<div
						style={{
							width: "30px",
							height: "30px",
							border: "1px solid #000",
							borderRadius: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							cursor: "pointer",
						}}
						onClick={(e) => {
							e.preventDefault();
							history.goBack();
						}}
					>
						<IoIosArrowBack />
					</div>
				</div>
				<h1
					style={{
						fontSize: "20px",
						fontWeight: "bold",
						margin: "0 0 20px",
					}}
				>
					{step > 2 ? "Order Summary" : "User details"}
				</h1>

				<StepDisplay
					errorMessage={errorMessage}
					currentStep={step}
					handleFormInput={handleFormInput}
					formValues={formValues}
				/>
				<br />

				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit(formValues);
					}}
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					{step > 1 ? (
						<ActionButton
							type="button"
							style={{ width: "fit-content" }}
							plain
							onClick={decrementStep}
						>
							Previous Step
						</ActionButton>
					) : null}
					{step < 3 ? (
						<ActionButton
							type="button"
							style={{ width: "fit-content" }}
							plain
							onClick={incrementStep}
						>
							Next Step
						</ActionButton>
					) : null}

					{step > 2 && (
						<ActionButton
							blue
							style={{
								width: "fit-content",
								border: "2px solid",
							}}
							type="submit"
							// onClick={(e) => handleSubmit(formValues)}
						>
							Confirm
						</ActionButton>
					)}
				</form>
			</CheckoutFormContainer>
		</div>
	);
};

export default CheckoutForm;
