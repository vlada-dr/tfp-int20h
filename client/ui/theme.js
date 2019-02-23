const css = String.raw;

export const color = {
  primary: '#3897f0',

  backgroundLight: '#fafafa',
  backgroundWhite: 'rgba(255,255,255,0.8)',

  text: '#262626',
  textLight: '#999',

  border: '#efefef',
  borderDark: '#e6e6e6',

  success: '#35DC83',
  danger: '#DC3545',

  highlight: '#FDFAEE',
  light: '#F1E198',
  yellow: '#FFCA28',
  gray: '#E6E6E6',
  lightGray: '#4a4a4a',
  darkGray: '#333333',
  blue: '#5FBDC5',
  darkBlue: '#3C9DA5',

  oxford: '#354052',
  blueGray: '#7f8fa4',
  lightBlueGray: '#c5ccd6',

  i0: '#E8EAF6',
  i1: '#C5CAE9',
  i2: '#9FA8DA',
  i3: '#7986CB',
  i4: '#5C6BC0',
  i5: '#3F51B5',
  i6: '#3949AB',
  i7: '#303F9F',
  i8: '#283593',
  i9: '#1A237E',
};

export const size = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '48px',
  xxl: '64px',
};

export const font = {
  playfair: 'Playfair Display',
  lato: 'Lato',
  base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

export const globalStyles = css`
  html, body {
    font-size: 16px;
    color: ${color.darkGray};
    font-family: ${font.base};
    line-height: 18px;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    background-color: #fff;
    background-attachment: fixed;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: normal;
  }
  
  a {
    text-decoration: none;
    color: ${color.darkGray};
  }
  
  a:visited, a:focus, a:active {
    text-decoration: none;
    color: ${color.darkGray};
  }
  * {
    box-sizing: border-box;
  }
`;

export const variables = {
  fieldHeight: 5,
  fieldUnit: 'rem',
  inputHeight: 3.6,
  inputUnit: 'rem',
};
