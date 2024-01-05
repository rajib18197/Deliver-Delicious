import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	*, *::after, *::before{
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		transition: background-color 0.3s, border 0.3s;
	}

	html {
  		font-size: 62.5%;

		/**************************/
		/* BELOW 1040px  */
		/**************************/
		@media (max-width: 65em){
			font-size: 56.25%;
		}

	}

	body {
		font-family: "Poppins", sans-serif;
		color: var(--color-grey-700);
		background-color: #e7e5e4;

		transition: color 0.3s, background-color 0.3s;
		min-height: 100vh;
		line-height: 1.5;
		font-size: 1.6rem;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
		color: inherit;
	}

	button {
		cursor: pointer;
	}

	*:disabled {
		cursor: not-allowed;
	}

	button:has(svg) {
  		line-height: 0;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	ul {
		list-style: none;
	}

`;

export default GlobalStyles;
