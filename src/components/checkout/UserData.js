import React from "react";
import { FormRow, InputField } from "../styles/checkoutFormStyles";

const UserData = ({ handleFormInput, formValues, errorMessage }) => {
	return (
		<>
			<div style={{ color: "red" }}>{errorMessage}</div>

			<FormRow>
				<div>
					<div style={{ textAlign: "left", paddingLeft: 5 }}>
						Last Name
					</div>
					<InputField
						type="text"
						name="last_name"
						id="last_name"
						value={formValues.last_name}
						onChange={handleFormInput}
						required
						placeholder="Last Name"
					/>
				</div>

				<div>
					<div style={{ textAlign: "left", paddingLeft: 5 }}>
						First Name
					</div>
					<InputField
						type="text"
						name="first_name"
						id="first_name"
						value={formValues.first_name}
						onChange={handleFormInput}
						required
						placeholder="First Name"
					/>
				</div>
			</FormRow>

			<FormRow>
				<div>
					<div style={{ textAlign: "left", paddingLeft: 5 }}>
						Email
					</div>
					<InputField
						type="text"
						name="email"
						id="email"
						value={formValues.email}
						onChange={handleFormInput}
						required
						placeholder="E.g. john@gmail.com"
					/>
				</div>
				<div>
					<div style={{ textAlign: "left", paddingLeft: 5 }}>
						Phone
					</div>
					<InputField
						type="number"
						name="phone"
						id="phone"
						value={formValues.phone}
						onChange={handleFormInput}
						maxlength="13"
						minlength="8"
						required
						placeholder="E.g. 08000000000"
					/>
				</div>
			</FormRow>

			<FormRow>
				<div>
					<div style={{ textAlign: "left", paddingLeft: 5 }}>
						Street Address
					</div>
					<InputField
						type="text"
						name="address"
						id="address"
						value={formValues.address}
						onChange={handleFormInput}
						required
						placeholder="Street Address"
					/>
				</div>
			</FormRow>
		</>
	);
};

export default UserData;
