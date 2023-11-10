import { ShoppingCart, MapPin } from "phosphor-react";

import { HeaderContainer } from "./styles";
import logoIgnite from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
	return (
		<HeaderContainer>
			<img src={logoIgnite} alt="" />
			<nav>
				<NavLink to="/" title="Timer">
					<MapPin size={24} weight="fill" />
					<span>Porto Alegre, RS</span>
				</NavLink>
				<NavLink to="/history" title="Histórico">
					<ShoppingCart size={24} />
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
