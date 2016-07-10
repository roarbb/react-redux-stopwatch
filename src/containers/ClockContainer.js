import {connect} from 'react-redux'
import {setDisplayTime} from '../actions'
import Clock from '../components/Clock'

const mapStateToProps = (state) => {
  return {
    timerRunning: state.timer.running,
    timeToDisplay: state.timer.timeToDisplay,
    startTime: state.timer.startTime
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    tick: (startTime, running) => {
      dispatch(setDisplayTime(startTime, running))
    }
  }
};

const ClockContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock);

export default ClockContainer;