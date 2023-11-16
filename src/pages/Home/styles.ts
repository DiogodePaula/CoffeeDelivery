import styled from "styled-components";

export const HomeContainer = styled.main`
	display: flex;
	flex-direction: column;

	margin-top: 7.8rem;
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
			font-size: 3rem;
			font-weight: 800;
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
	max-height: 28rem;
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
`;
