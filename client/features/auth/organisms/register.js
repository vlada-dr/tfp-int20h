import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withStateHandlers, withHandlers } from 'recompose'
import { auth } from 'api'
import { Button, Layout } from 'ui/atoms'
import { LoginField } from 'ui/molecules'
import { validate } from 'features/validations'
import { register } from '../actions'
import { Avatar } from '../../user/atoms';
import { Checkbox } from '../../../ui/molecules';


const mapDispatchToProps = (dispatch) => ({ onRegister: (user) => dispatch(register(user)) })

const enhance = compose(
  connect(null, mapDispatchToProps),
  withStateHandlers(
    ({ user = {}, errors = {}, touched = {} }) => ({ user: {
        profileType: 0,
      }, errors, touched }),
    {
      updateField: ({ user, touched }) => (name, value) => ({
        user: { ...user, [name]: value },
        touched: { ...touched, [name]: true },
      }),
    },
  ),
  withHandlers({
    onChange: ({ errors, updateField }) => ({ target: { name, value } }) => {
      updateField(name, value)
    },
    onSubmit: ({ user, touched, errors, onRegister }) => (e) => {
      e.preventDefault()
      auth.register(user);
    },
  }),
);

const RegisterView = ({ valid, errors, onSubmit, onChange, updateField, compare, user }) => {
  const { username, email, gender, password, profileType } = user

  return (
    <Layout onSubmit={onSubmit} flow="column" align='center' width='100%' gap={16} padding={2}>
      <LoginField
        name='email'
        value={email}
        onChange={onChange}
        onBlur={valid}
        error={errors.email}
        icon='Email'
        label='Електронна адреса'
      />
      <LoginField
        name='password'
        value={password}
        onChange={onChange}
        onBlur={valid}
        error={errors.password}
        icon='Password'
        label='Пароль'
      />
      <Layout flow="row" gap={16}>
        <Checkbox
          checked={profileType === 0}
          text="МОДЕЛЬ"
          onClick={() => {
            if (profileType === 0) {
              return;
            }

            const e = {
              target: {
                name: 'profileType',
                value: 0,
              },
            };

            onChange(e);
          }}
        />
        <Checkbox
          checked={profileType === 1}
          text="ФОТОГРАФ"
          onClick={() => {
            if (profileType === 1) {
              return;
            }

            const e = {
              target: {
                name: 'profileType',
                value: 1,
              },
            };

            onChange(e);
          }}
        />
      </Layout>
      <Button shine darkblue onClick={onSubmit}>Зареєструватися</Button>
    </Layout>
  )
}

RegisterView.propTypes = {
  compare: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.string),
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  valid: PropTypes.func,
  updateField: PropTypes.func,
  user: PropTypes.objectOf(PropTypes.string),
}

RegisterView.defaultProps = {
  compare: null,
  errors: null,
  onSubmit: null,
  onChange: null,
  valid: null,
  updateField: null,
  user: null,
}

export const Register = enhance(RegisterView)
