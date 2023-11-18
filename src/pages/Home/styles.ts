import styled from "styled-components";

export const HomeContainer = styled.main`
	display: flex;
	flex-direction: column;

	margin-top: 7.8rem;

	.titleCoffeeTypes {
		font-family: "Baloo 2";
		font-size: 2rem;
		font-weight: 800;
		color: ${(props) => props.theme["brown-900"]};
	}
`;

export const Banner = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	min-height: 544px;

	div {
		max-width: 588px;

		h1 {
			font-family: "Baloo 2";
			color: ${(props) => props.theme["brown-900"]};
			font-size: 3rem;
			font-weight: 800;
			line-height: 3.9rem;
		}

		h3 {
			font-size: 1.2rem;
			margin-bottom: 6rem;
		}

		article {
			display: flex;
		}
	}
`;

export const BannerImage = styled.img`
	width: 50%;
	max-height: 24rem;
`;

export const IconAndText = styled.div`
	margin-right: 3rem;

	div {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 1.2rem;
	}
`;

export const CoffeeTypesContainer = styled.div`
	margin: 3rem 0 10rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 11fr;
	grid-column-gap: 2rem;
	grid-row-gap: 2.5rem;
`;
