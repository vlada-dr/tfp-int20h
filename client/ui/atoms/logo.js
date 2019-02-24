import * as React from 'react';
import { Link } from 'react-router-dom';
import pt from 'prop-types';
import styled, { css } from 'styled-components';


const Wrapper = styled(Link)`
  display: inline-flex;
  margin: ${size.l} 0;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const Title = styled.div`
  color: ${color.darkGray};
  letter-spacing: 2px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  
  svg {
    width: 14px;
    height: 14px;
    fill: ${color.yellow};
    margin: 0 2px 4px;
  } 
`;

const Text = styled.div`
  color: ${color.darkGray};
  letter-spacing: 0.52px;
  font-size: 12px;
  padding-top: 4px;
  font-weight: 600;
  
  ${p => p.collapse && css`
    ${media.pho`
      display: none;
    `}
  `}
`;

export const Logo = ({ collapse }) => (
  <Wrapper to='/'>
    <Title>
      tfp
    </Title>
    <Text collapse={collapse}>
      time for photo
    </Text>
  </Wrapper>
);

Logo.propTypes = {
  collapse: pt.bool,
};

Logo.defaultProps = {
  collapse: false,
};
