import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

import { Address1Input, Address2Input, AddressText, CardPayment, CepInput, CheckoutContainer, City1Input, City2Input, City3Input, PaymentContainer, StreetInput } from "./styles";

export function Checkout() {
	return (
		<CheckoutContainer>
			<div>
				<h3>Complete seu pedido</h3>
				<form>
					<AddressText>
						<MapPinLine size={24} className="addressIcon" />
						<div className="addressText">
							<p>Endereço de Entrega</p>
							<p>Informe o endereço onde deseja receber seu pedido</p>
						</div>
					</AddressText>
					<CepInput placeholder="CEP" type="number" />
					<StreetInput placeholder="Rua" type="text" />
					<div className="address-container">
						<Address1Input placeholder="Numero" type="text" />
						<Address2Input placeholder="Complemento" type="text" />
					</div>
					<div className="address-container">
						<City1Input placeholder="Bairro" type="text" />
						<City2Input placeholder="Cidade" type="text" />
						<City3Input placeholder="UF" type="text" />
					</div>
				</form>
				<PaymentContainer>
					<div className="payment-describe">
						<div>
							<CurrencyDollar size={24} className="dollarIcon" />
							<span>Pagamento</span>
						</div>
						<p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
					</div>
					<div className="card-container">
						<CardPayment>
							<CreditCard size={24} className="iconColor" />
							Cartão de crédito
						</CardPayment>
						<CardPayment>
							<Bank size={24} className="iconColor" />
							cartão de débito
						</CardPayment>
						<CardPayment>
							<Money size={24} className="iconColor" />
							dinheiro
						</CardPayment>
					</div>
				</PaymentContainer>
			</div>

			<div>
				<h3>Cafés selecionados</h3>
				<div>pedido</div>
				<div>
					<p>Total de itens R$ 29,70</p>
					<p>Total de itens R$ 29,70</p>
					<p>Total de itens R$ 29,70</p>
					<button>confirmar pedido</button>
				</div>
			</div>
		</CheckoutContainer>
	);
}
