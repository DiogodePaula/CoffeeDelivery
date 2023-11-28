import styled from "styled-components";

export const CheckoutContainer = styled.main`
	display: grid;
	grid-template-columns: 1fr 28rem;
	grid-column-gap: 2rem;

	margin-top: 4.5rem;

	h3 {
		font-family: "Baloo 2";
		font-weight: 700;
		font-size: 1.125rem;
		line-height: 1.4625rem;
		color: ${(props) => props.theme["brown-700"]};
	}

	form {
		padding: 2.5rem;
		margin-top: 1rem;
		margin-bottom: 0.75rem;
		background: ${(props) => props.theme["base-card"]};
		border-radius: 6px;
	}

	.address-container {
		display: flex;
		gap: 0.75rem;
	}
`;

export const AddressText = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-bottom: 2rem;

	.addressIcon {
		color: ${(props) => props.theme["yellow-700"]};
	}

	.addressText {
		p:first-child {
			color: ${(props) => props.theme["brown-700"]} !important;
			font-weight: 400;
			line-height: 1.3rem;
		}
	}
`;

export const BaseInput = styled.input`
	padding: 12px;
	border-radius: 4px;
	border: 1px solid ${(props) => props.theme["base-button"]};
	background: ${(props) => props.theme["base-input"]};
	margin-bottom: 1rem;
`;

export const CepInput = styled(BaseInput)`
	display: block;
	width: 200px;
`;

export const StreetInput = styled(BaseInput)`
	width: 100%;
`;

export const Address1Input = styled(BaseInput)`
	width: 30%;
`;

export const Address2Input = styled(BaseInput)`
	width: 70%;
`;
export const City1Input = styled(BaseInput)`
	width: 30%;
`;
export const City2Input = styled(BaseInput)`
	width: 60%;
`;
export const City3Input = styled(BaseInput)`
	width: 10%;
`;

export const PaymentContainer = styled.div`
	padding: 2.5rem;
	border-radius: 6px;
	background: ${(props) => props.theme["base-card"]};

	.payment-describe {
		margin-bottom: 2rem;

		div {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			line-height: 1.3rem;

			.dollarIcon {
				color: ${(props) => props.theme["purple-700"]};
			}
		}

		p {
			margin-left: 2rem;
			line-height: 1.3rem;
		}
	}

	.card-container {
		display: flex;
		gap: 0.75rem;
	}
`;

export const CardPayment = styled.div`
	display: flex;
	padding: 16px;
	align-items: center;
	gap: 12px;
	flex: 1 0 0;
	border-radius: 6px;
	background: ${(props) => props.theme["base-button"]};
	text-transform: uppercase;

	.iconColor {
		color: ${(props) => props.theme["purple-700"]};
	}
`;
