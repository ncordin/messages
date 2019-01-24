import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  return <div className="layout-header">{children}</div>;
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
