import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  static PropTypes = {
    hystory: PropTypes.object
  };
}



export default StorePicker;