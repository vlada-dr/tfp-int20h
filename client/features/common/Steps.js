import React from 'react';
import styled, { css } from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import { Button } from '../../ui/atoms';

const locations = [
  'https://static0.vigbo.com/u14829/17548/blog/1933187/436937/6090992/1000-yana_tkachenko-b01448335d76ae2a9e1b1b1808e472bb.jpg',
  'https://static0.vigbo.com/u14829/17548/blog/1933187/436937/9168488/1000-yana_tkachenko-f8aa441c59c4d7d6e324f93a4a549ab3.jpg',
  'https://static0.vigbo.com/u14829/17548/blog/1933187/436937/6091250/1000-yana_tkachenko-783c5a735f82489b1ddf076904f2ebb7.jpg',
  'https://static0.vigbo.com/u14829/17548/blog/1933187/436937/6091250/500-yana_tkachenko-537331596284a1aba058a3c4b7d0017e.jpg',
  'https://static0.vigbo.com/u14829/17548/blog/1933187/436937/7106405/1000-yana_tkachenko-417bd84d0da146387435c4302034fcd0.jpg',
];

const dates = [
  {
    time: '12:00',
    date: '24 февраля',
  },
  {
    time: '14:00',
    date: '28 февраля',
  },
  {
    time: '17:30',
    date: '3 марта',
  },
];

export const StepsPage = withRouter(() => (
  <Dates />
));

class Dates extends React.Component {
  state = {
    activeDate: null,
    location: null,
  };

  render() {
    const { activeDate, location } = this.state;

    return (
      <StyledWrapper>
        <Title>
          Выберите локацию
        </Title>
        {locations.map((l, i) => (
          <StyledLocation
            active={i === location}
            onClick={() => this.setState({
              location: i,
            })}
            key={l}
          >
            <img src={l} />
          </StyledLocation>
        ))}
        <Title>
          Выберите дату
        </Title>
        {dates.map(({ date, time }, j) => (
          <StyledDate
            active={j === activeDate}
            onClick={() => this.setState({
              activeDate: j,
            })}
            key={date}
          >
            <div>
              {time}
            </div>
            <div>
              {date}
            </div>
          </StyledDate>
        ))}
        <StyledButton>
          <Link to="/approve">
        <Button>
          ПРОДОЛЖИТЬ
        </Button>
          </Link>
        </StyledButton>
      </StyledWrapper>
    )
  }

}


const StyledLocation = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 4px;
  margin: 8px;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  
  ${p => p.active && css`
    box-shadow: 0 8px 24px 0 rgba(0,0,0,.21);
  `}
  
  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 200;
  text-align: left;
  line-height: 1.4;
  margin-bottom: 24px;
  
  &:last-of-type {
    margin-top: 24px;
  }
`;

const StyledWrapper = styled.div`
 margin: 60px auto;
  width: 60vw;
`;

const StyledDate = styled.div`
  display: inline-block;
  margin: 8px;
  border-radius: 4px;
  padding: 8px 32px;
  box-shadow: 0 8px 24px 0 rgba(0,0,0,.11);
  text-align: center;
  cursor: pointer;

  div:first-child {
    font-weight: bold;
    
  }
  
  ${p => p.active && css`
    box-shadow: 0 8px 24px 0 rgba(0,0,0,.21);
  `}
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px auto;
`;
