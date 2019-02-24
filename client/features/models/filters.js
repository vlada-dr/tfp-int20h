import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withStateHandlers, withHandlers } from 'recompose'
import { auth } from 'api'
import { Button, Layout } from 'ui/atoms'
import { LoginField, Checkbox } from 'ui/molecules'


const mapDispatchToProps = (dispatch) => ({
  onRegister: () => dispatch(),
})

const enhance = compose(
  connect(null, mapDispatchToProps),
  withStateHandlers(
    ({ model = {}, errors = {}, touched = {} }) => ({ model: {
        country: '',
        city: '',
        hair: '',
        eyes: '',
      }, errors, touched }),
    {
      updateField: ({ model, touched }) => (name, value) => ({
        model: { ...model, [name]: value },
        touched: { ...touched, [name]: true },
      }),
    },
  ),
  withHandlers({
    onChange: ({ errors, updateField }) => ({ target: { name, value } }) => {
      updateField(name, value)
    },
    onSubmit: ({ model, touched, errors, onRegister }) => (e) => {
      e.preventDefault()
      onRegister(model);
    },
  }),
);

const RegisterView = ({ valid, errors, onSubmit, onChange, updateField, compare, model }) => {
  const { country, city, hair, eyes } = model;

  return (
    <Layout flow="row" align='center' width='100%' gap={16} padding={16} justify="center">
      <LoginField
        name='country'
        value={country}
        onChange={onChange}
        onBlur={valid}
        small
        label='Страна'
      />
      <LoginField
        name='city'
        value={city}
        onChange={onChange}
        onBlur={valid}
        label='Город'
        small
      />
      <LoginField
        name='hair'
        value={hair}
        onChange={onChange}
        onBlur={valid}
        label='Волосы'
        small
      />
      <LoginField
        name='eyes'
        value={eyes}
        onChange={onChange}
        onBlur={valid}
        label='Глаза'
        small
      />
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
  model: PropTypes.objectOf(PropTypes.string),
}

RegisterView.defaultProps = {
  compare: null,
  errors: null,
  onSubmit: null,
  onChange: null,
  valid: null,
  updateField: null,
  model: null,
}

export const ModelFilters = enhance(RegisterView)
