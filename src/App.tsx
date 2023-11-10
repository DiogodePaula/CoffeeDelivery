import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				{/* quando passar um componentes dentro do context adicionar children nele */}

				<Router />
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	);
}
