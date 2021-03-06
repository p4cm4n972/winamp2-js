import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';


class ClutterBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDownDouble = this.handleMouseDownDouble.bind(this);
    this.handleMouseUpDouble = this.handleMouseUpDouble.bind(this);
  }

  handleMouseDownDouble() {
    this.props.dispatch({type: 'SET_FOCUS', input: 'double'});
  }

  handleMouseUpDouble() {
    this.props.dispatch({type: 'TOGGLE_DOUBLESIZE_MODE'});
    this.props.dispatch({type: 'UNSET_FOCUS'});
  }

  render() {
    return <div id='clutter-bar'>
      <div id='button-o' />
      <div id='button-a' />
      <div id='button-i' />
      <div
        id='button-d'
        className={classnames({selected: this.props.doubled})}
        onMouseUp={this.handleMouseUpDouble}
        onMouseDown={this.handleMouseDownDouble}
      />
      <div id='button-v' />
    </div>;
  }
}

module.exports = connect((state) => state.display)(ClutterBar);
