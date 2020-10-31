import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Header } from '../components';

const PageLayout = ({ children, pageClass }) => {
  return (
    <>
      <Header />
      <main className={classnames('page-body', pageClass)}>{children}</main>
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PageLayout;
