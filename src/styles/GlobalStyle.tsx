import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: ${props => props.theme.colors.background.default};
        color: ${props => props.theme.colors.text.default};
        font-family: "Pretendard", sans-serif;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;


/*
    CSS만 사용하는 방법이였다면,
    웹폰트를 적용하는건, 2가지 방법이 있음

    1. index.html에 <link rel=" style />
    2. CSS 파일에 @import()  => react가 css는 head에 자동으로 넣어주기 때문

    styled-components를 이용할 때에는 CSS 파일이 없으니,
    1번으로 진행해도 되고,
    2번으로 진행한다면 GlobalStyle에 넣으면 "되기는 됨"
    정석적으로는 2번으로 진행하면 안됨
    => 원래 CSS 파일을 불러오는건, html 파일의 <head>
* */