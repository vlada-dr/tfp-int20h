import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { color } from '../theme'


export const Input = styled.input`
  display: flex;
  flex: 1;
  padding: 8px 16px;
  font-size: 16px;
  color: ${color.oxford};
  border: 1px solid ${color.lightBlueGray};   
  overflow: hidden;
  outline: none;
  text-overflow: ellipsis;
  -webkit-appearance: none;
  border-radius: 4px;

  &:focus {
    outline:none;
    border: 1px solid ${color.i7};
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
  }
  
  &:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus,
&:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}
`;
