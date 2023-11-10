import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	nav {
		display: flex;
		gap: 0.5rem;

		a {
			display: flex;
			justify-content: center;
			align-items: center;

			border-top: 3px solid transparent;
			border-bottom: 3px solid transparent;

			&:hover {
				border-bottom: 3px solid ${(props) => props.theme["green-500"]};
			}
			&.active {
				color: ${(props) => props.theme["green-500"]} !important;
			}

			&:first-child {
				color: ${(props) => props.theme["purple-700"]};
				background: ${(props) => props.theme["purple-200"]};
				padding: 0.5rem;
				gap: 0.25rem;
				border-radius: 0.375rem;
			}

			&:nth-child(2) {
				color: ${(props) => props.theme["yellow-700"]};
				background: ${(props) => props.theme["yellow-200"]};
				padding: 0.5rem;
				border-radius: 0.375rem;
			}
		}
	}
`;
