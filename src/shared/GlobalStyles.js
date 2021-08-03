import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
	${reset};

	@font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


    :root {
    --main: #4D6C56;
    --black: #151515;
    --darkgrey: #757575;
    --grey: #b7b7b7;
    --line: #eaeaea;
		--white : #ffffff;
		--point : #ffcccc;
		--notice : #ff7776
  };

  * {
		box-sizing : border-box;
	}

	a {
		text-decoration:none;
		color:inherit;
	}

	

	html {
		font-size:62.5%;
		margin : 0;
		padding: 0;
		
	}
	body{
		font-family: 'NanumSquareRound';
		/* font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  */
	}
`;

export default GlobalStyles;
