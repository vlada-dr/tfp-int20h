import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import { Name, Layout, Button } from '../atoms'


const Image = styled.section`
  background-position: center center;
  background-size: cover;
  overflow: hidden;  
  z-index: 3;
  position: relative;
  
  @media (orientation: portrait) {
    width: 100%;
    height: 20vh;
  }
  @media (orientation: landscape) {
    width: 35vw;
    height: 100%;
  }
`;

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  font-size: 1rem;
  
  @media (orientation: portrait) {
    flex-direction: column;
  }
  
  @media (orientation: landscape) {
    flex-direction: row;
  }
`;

const FormContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 40px auto;
  
  @media (orientation: portrait) {
    width: 100%;
    height: 80vh;
  }
  @media (orientation: landscape)  {
    width: 65vw;
    height: 100%;
  }
`;

const Tab = styled.div`
  position: absolute;
  top: 5vh;
  z-index: 4;
  right: 20%;
`;

export const LoginTemplate = ({ children, tab, onClick, title }) => (
  <PageContainer>
    <FormContainer>
      <Title>
        {title}
      </Title>
      {children}
    </FormContainer>
  </PageContainer>
);

LoginTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  tab: PropTypes.string,
}

LoginTemplate.defaultTypes = {
  tab: 'Реєстрація',
};

const Title = styled.h2`
  font-size: 40px;
  font-weight: 200;
  text-align: left;
  line-height: 1.4;
  margin-bottom: 24px;
`;
