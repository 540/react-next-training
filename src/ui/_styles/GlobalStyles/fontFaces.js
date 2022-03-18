import { css } from 'styled-components'

export const fontFaces = css`
  @font-face {
    font-family: 'Lato';
    src: local('Lato Regular'), local('Lato-Regular'), url(fonts/Lato-Regular.woff2) format('font-woff2'),
    url(fonts/Lato-Regular.woff) format('font-woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: local('Lato Bold'), local('Lato-Bold'), url(fonts/Lato-Bold.woff2) format('font-woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: local('Lato Black'), local('Lato-Black'), url(fonts/Lato-Black.woff2) format('font-woff2');
    font-weight: 900;
    font-style: normal;
  }
`
