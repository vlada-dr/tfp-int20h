import * as React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { all, like } from './actions';
import { Card } from '../user/atoms/card';
import { Layout } from '../../ui/atoms';

const photos = [
  {
    picture: 'https://scstylecaster.files.wordpress.com/2018/08/kendall-jenner1.jpg'
  },
  {
    picture: 'https://scstylecaster.files.wordpress.com/2018/08/kendall-jenner1.jpg'
  },
  {
    picture: 'https://scstylecaster.files.wordpress.com/2018/08/kendall-jenner1.jpg'
  },
  {
    picture: 'https://scstylecaster.files.wordpress.com/2018/08/kendall-jenner1.jpg'
  },
  {
    picture: 'https://scstylecaster.files.wordpress.com/2018/08/kendall-jenner1.jpg'
  },
];

const mapStateToProps = state => ({
  models: state.model.models,
  filters: state.model.filters,
  likes: state.common.user ? state.common.user.user.likes : [],
});

const mapDispatchToProps = dispatch => ({
  onLoad: (filters) => dispatch(all(filters)),
  like: id => dispatch(like(id)),
});

class ListView extends React.Component {
  componentDidMount() {
    this.props.onLoad(this.props.filters);
  }

  render() {
    const { models, likes, like } = this.props;

    return (
      <Layout flow="row" wrap justify="center">
        {
          models.length ? models.map(({ user, userId }, i) => user.gallery && user.gallery.photos.length && (
            <Card
              photo={user.photo}
              gallery={{ photos: user.gallery ? user.gallery.photos.slice(0, 4) : []}}
              country={user.country}
              city={user.city}
              name={user.name}
              liked={likes.includes(userId)}
              like={() => like(userId)}
            />
          )) : null
        }
      </Layout>
    );
  }
};

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0 ${size.m};
`;

const Popular = styled(Row)`
  flex-flow: row nowrap;

  & > * {
    width: 25%;
  }
`;

const Half = styled.div`
  flex: 1 1 50%;
  display: flex;

  ${p => p.second && css`
    order: 2;
  `}

   ${p => p.main && css`
      div {
        width:100%;
      }
  `}

  ${media.pho`
    flex: 1 1 100%;
  `}
`;

const Column = styled.div`
  flex: 1 1 50%;
  height: 50%;
  flex: 1;
`;

ListView.propTypes = {
  presents: PropTypes.array,
};

export const ModelsList = withRouter(connect(mapStateToProps, mapDispatchToProps)(ListView));

