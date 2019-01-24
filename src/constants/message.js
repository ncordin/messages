import PropTypes from 'prop-types';

export const shapeOfMessage = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  isPublic: PropTypes.bool.isRequired,
};
