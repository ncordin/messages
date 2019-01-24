import React from 'react';
import PropTypes from 'prop-types';

function Content({ children }) {
  return <div className="layout-content">{children}</div>;
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
