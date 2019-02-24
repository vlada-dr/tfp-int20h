import React from 'react';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { color } from 'ui/theme';
import { Button } from '../../ui/atoms';

const PHOTO = 'https://static0.vigbo.com/u14829/17548/blog/1933187/436937/7106405/1000-yana_tkachenko-417bd84d0da146387435c4302034fcd0.jpg';

const date = {
  time: '12:00',
  date: '24 февраля',
};

export const ApprovePage = withRouter(() => (
  <div>
  <StyledWrapper>
    <div>
    <Title>
      Фотосессия
    </Title>
    <BoldTitle>
      PLAY STUDIO
    </BoldTitle>
    <Address>
      г. Киев, просп. Леся Курбаса 2Б
    </Address>
    <Address>
      {date.time}, {date.date}
    </Address>
    </div>
    <Image src={PHOTO} />
  </StyledWrapper>
    <StyledButton>
      <Button>
        ПОДТВЕРДИТЬ
      </Button>
    </StyledButton>
  </div>
));

const StyledButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 200;
  text-align: left;
  line-height: 1.4;
  margin-bottom: 24px;
  display: inline-block;
  width: 100%;
  &:last-of-type {
    margin-top: 24px;
  }
`;

const StyledWrapper = styled.div`
  margin: 60px auto;
  width: 60vw;
  display: flex;
  text-align: right;
  
  * {
    text-align: right;
  }
  
  div {
    flex-shrink: 0;
  }
  
`;

const Image = styled.img`
  object-fit: cover;
  width: 40vw;
  border-radius: 16px;
  margin-left: 32px;
`;

const BoldTitle = styled(Title)`
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
`;

const Address = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin: 16px 0;
`;
