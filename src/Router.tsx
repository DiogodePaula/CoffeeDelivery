import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				{/* <Route path="/" element={<Home />} />
				<Route path="/history" element={<History />} /> */}
			</Route>
		</Routes>
	);
}

// esse cenário seria se a aplicação tivesse OfflineAudioCompletionEvent,
// todas as rotas que começarem por admin chamariam esse layout
{
	/* 
	<Route path="/admin" element={<AdminLayout />}>     ROTA PAI, AS ROTAS FICAM ENCADEADAS
		<Route path="/products" element={<Products />} /> /admin/products
		<Route path="/history" element={<History />} /> /admin/history
	</Route>; 
*/
}
