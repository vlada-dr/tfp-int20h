import React from 'react';
import styled from 'styled-components';
import { Layout, Button } from 'ui/atoms';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <Layout flow='column' align='center'>
    <h1>404</h1>
    <Button secondary>
      <Link to='/'>
        Вернуться на главную страницу
      </Link>
    </Button>
  </Layout>
);
