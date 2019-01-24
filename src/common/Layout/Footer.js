import React from 'react';
import PropTypes from 'prop-types';

function Footer({ children }) {
  return <div className="layout-footer">{children}</div>;
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
