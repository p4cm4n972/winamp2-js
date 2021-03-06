import React from 'react';
import {connect} from 'react-redux';
import {play, pause, stop} from '../actionCreators';


class ActionButtons extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.stop = this.stop.bind(this);
  }
  play() {
    this.props.dispatch(play(this.props.mediaPlayer));
  }
  pause() {
    this.props.dispatch(pause(this.props.mediaPlayer));
  }
  stop() {
    this.props.dispatch(stop(this.props.mediaPlayer));
  }
  render() {
    return <div className='actions'>
      <div id='previous' />
      <div id='play' onClick={this.play} />
      <div id='pause' onClick={this.pause} />
      <div id='stop' onClick={this.stop} />
      <div id='next' />
    </div>;
  }
}

module.exports = connect((state) => state.media)(ActionButtons);
