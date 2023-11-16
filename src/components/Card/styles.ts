import styled from "styled-components";

export const CardContainer = styled.div`
	width: 16rem;
	height: 19.375rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background: ${(props) => props.theme["base-card"]};
	border-radius: 0.375rem 2.25rem;
	padding: 1.5rem;
	text-align: center;

	.coffeeImg {
		width: 7.5rem;
		height: 7.5rem;
		margin-top: -2.8rem;
	}

	.coffeeTag {
		display: inline-block;
		font-weight: 700;
		line-height: 0.8125rem;
		text-transform: uppercase;
		padding: 0.6rem 0.8rem;
		background: ${(props) => props.theme["yellow-200"]};
		color: ${(props) => props.theme["yellow-700"]};
		border-radius: 6.25rem !important;
		margin-bottom: 1.25rem;
	}

	.coffeeName {
		font-family: "Baloo 2";
		font-size: 1.25rem;
		font-weight: 700;
		line-height: 1.625rem;
		margin-bottom: 0.5rem;
	}

	.coffeeDescribe {
		max-width: 13.5rem;
		font-family: Roboto;
		font-size: 0.875rem;
		font-weight: 400;
		line-height: 1.1375rem;
		color: ${(props) => props.theme["brown-300"]};
	}
`;

export const CardFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.coffeePrice {
		font-family: "Baloo 2";
		font-size: 1.5rem;
		font-weight: 800;
		color: ${(props) => props.theme["brown-500"]};
	}

	.coffeeQuantity {
		display: flex;
		height: 2.375rem;
		padding: 0.5rem;
		justify-content: center;
		align-items: center;
		gap: 0.35rem;
		background: ${(props) => props.theme["base-button"]};
		border-radius: 0.375rem;
	}

	div {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
`;
