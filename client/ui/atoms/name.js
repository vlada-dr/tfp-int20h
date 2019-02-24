import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import React from 'react'
import { color } from '../theme'


const Title = styled.span`
    display: inline-block;
    h2 {
       letter-spacing: 0.5rem;
    }
    
    text-transform: uppercase;
    color: #1C1C59;
    text-align:center;
`

export const Name = ({ size }) => <Title size={size}><h2>SurpriseU</h2></Title>

Name.propTypes = {
  size: PropTypes.string,
}

Name.defaultTypes = {
  size: '5rem',
}
