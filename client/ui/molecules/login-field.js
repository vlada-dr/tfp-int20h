import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Error } from '../atoms'
import { color, font, variables } from '../theme'


const height = 2.4
const left = 1.5
const right = 2.5

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  @media (orientation: portrait) {
    width: 80vw;
  }
  
  width: ${p => (p.small ? '20vw' : '40vw')};
  height: 5rem;
  color: ${color.text};
  -webkit-appearance: none;
  flex-shrink: 0;
  align-items: center;
  border-radius: 2px;
  
  ${Input} {
    height: 3rem;
    width: 100%;
  }
`

const FieldWrapper = styled.div`
  height: ${variables.inputHeight + variables.inputUnit};
  position: relative;
  width: 100%;
`;

const Label = styled.div`
  color: ${color.oxford};
  font-weight: 500;
  font-size: 14px;
  text-align: left;
  margin-bottom: ${size.s};
  display: flex;
  align-self: flex-start;
`;


export const LoginField = ({ small, error, label, name, icon, children, ...rest }) => (
  <FieldContainer small={small}>
    <Label>
      {label}
    </Label>
    <FieldWrapper>
      <Input
        {...rest}
        type={name.includes('pass') ? 'password' : 'text'}
        name={name}
        aria-describedby={label}
        aria-label={label}
        autoCapitalize="false"
        autoCorrect="false"
        bordered
        placeholder={label}
        back={color.backgroundWhite}
      />
    </FieldWrapper>
    <Error error={error} active={!!(error && (error.length > 0))} />
    {children}
  </FieldContainer>
)

export const RegisterField = ({ error, ...props }) => {
  const isValid = error !== null ? (
    'error'
  ) : null

  return (
    <LoginField {...props} error={error}>
      {isValid}
    </LoginField>
  )
}

RegisterField.propTypes = { error: PropTypes.string }

RegisterField.defaultProps = { error: null }

LoginField.propTypes = {
  children: PropTypes.node,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  icon: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
}

LoginField.defaultProps = {
  children: null,
  error: null,
  icon: null,
  label: null,
}
