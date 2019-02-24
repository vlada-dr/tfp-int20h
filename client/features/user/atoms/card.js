import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout } from '../../../ui/atoms';
import { color } from 'ui/theme';
import { HeartOutlineIcon, HeartIcon } from '../../../ui/icons';

export function Card({
  photo, gallery, country, city, name, liked, like,
}) {
  if (!gallery || !gallery.photos) {
    return null;
  }

  return (
    <StyledWrapper>
      <Layout flow="row" wrap>
        {gallery.photos.map(({ picture }) => (
          <Image src={picture} key={picture} />
        ))}
      </Layout>
      <Layout flow="row" align="center">
        <Link to={'/steps'}>
          <Avatar src={photo} />
        </Link>
        <div>
          <div>
            {name}
          </div>
          <StyledCity>
            {[country, city].join(', ')}
          </StyledCity>
        </div>
        <StyledLike onClick={like}>
          <HeartIcon liked={liked}/>
        </StyledLike>
      </Layout>
    </StyledWrapper>
  );
}

Card.propTypes = {
};

const StyledLike = styled.div`
  width: 30px;
  height: 30px;
  margin: auto 0 auto auto;
  
  svg {
    width: 100%;
    height: 100%;
    fill: ${p => p.liked ? color.blueGray : color.lightBlueGray};
  }
`;

const StyledWrapper = styled.div`
  width: 500px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 24px 0 rgba(0,0,0,.11);
  border-radius: .625rem;
  padding: 16px;
  margin: 24px 0;
  cursor: pointer;
  transition: all .3s ease-in-out;
  
  &:nth-child(odd) {
    margin-right: 24px;
  }
  
  &:hover {
  
  box-shadow: 0 8px 24px 0 rgba(0,0,0,.21);
  }
`;

const Image = styled.img`
  width: calc(50% - 8px);
  height: 150px;
  margin-bottom: 16px;
  border-radius: 4px;
  object-fit: cover;
  
  &:nth-child(odd) {
    margin-right: 16px;
  }
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 24px;
`;

const StyledCity = styled.div`
  color: ${color.blueGray};
`;
