import styled from "styled-components";

export const HomeContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 7.8rem;
`;

export const Banner = styled.div`
	display: flex;
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
			margin-bottom: 2.5rem;
		}

		article {
			display: flex;
		}
	}
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
