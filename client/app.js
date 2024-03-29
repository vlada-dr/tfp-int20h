import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rootRoutes } from 'routes';
import { LOAD_USER } from 'types';
import { auth } from 'api';
import Notification from 'ui/notification';
import { Menu } from 'ui/organisms';
import { compose, lifecycle } from 'recompose';
import { Shapes } from 'ui/icons';


const enhance = compose(
  connect(state => ({
    appLoaded: state.common.appLoaded,
    user: state.common.user,
    state,
  }), dispatch => ({
    onLoad: () => dispatch({ type: LOAD_USER, payload: auth.current() }),
  })),
  lifecycle({
    componentDidMount() {
      this.props.onLoad();
    },
  }),
);

const Layout = () => (
  <Wrapper>
    <Notification />
    <Menu />
    <Content>
      {rootRoutes()}
      <StyledBackground />
    </Content>
  </Wrapper>
);

export const App = enhance(Layout);

const Content = styled.div`
  z-index: 3;
  position: relative;
  padding-top: 90px;
  width: 100vw;
  overflow: hidden;
  
  ${media.pho`
    padding: 96px 0;
  `}
`;

const Wrapper = styled.div`
  width: 100%;
`;

const StyledBackground = styled(Shapes)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
`;
