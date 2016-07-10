import React, {PropTypes} from 'react'

class Clock extends React.Component {
  componentDidUpdate() {
    this._startIntervalIfTimerRunning();
  }

  componentDidMount() {
    this._startIntervalIfTimerRunning();
  }

  _startIntervalIfTimerRunning() {
    if(this.props.timerRunning) {
      setTimeout(() => {
        this.props.tick(this.props.startTime, this.props.timerRunning);
      }, 1000);
    }
  }

  render() {
    return <div className="row text-xs-center clock-display">{this.props.timeToDisplay}</div>
  }
}

Clock.PropTypes = {
  timerRunning: PropTypes.bool.isRequired,
  tick: PropTypes.func.isRequired,
  timeToDisplay: PropTypes.string.isRequired,
  startTime: PropTypes.number
};

export default Clock;