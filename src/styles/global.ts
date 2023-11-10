import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["gray-500"]};;
    }

    body {
        background: ${(props) => props.theme["background"]};
        color: ${(props) => props.theme["gray-300"]};
        -webkit-font-smoothing: antialiased;
        /* é uma regra de estilo CSS que é usada para melhorar a renderização de fontes no navegador, 
        especialmente em fontes pequenas ou de baixa resolução, tornando-as mais suaves e mais legíveis. 
        
        antialiased: Aplica antialiasing padrão, suavizando as bordas das fontes, tornando-as mais legíveis.
        */
    }

    body, input, text-area, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size:  1rem;
    }
`;
