import {connect} from 'react-redux'
import {startTimer, resetTimer, stopTimer} from '../actions'
import Button from '../components/Button'

const isActive = (type, timerRunning) => {
  switch (type) {
    case 'START':
      return !timerRunning;

    case 'STOP':
      return timerRunning;

    case 'RESET':
      return true;
  }
};

const mapStateToProps = (state, ownprops) => {
  return {
    active: isActive(ownprops.type, state.timer.running),
    label: ownprops.label
  }
};

const mapDispatchToProps = (dispatch, ownprops) => {
  switch (ownprops.type) {
    case 'START':
      return {
        onClick: () => {
          dispatch(startTimer())
        }
      };

    case 'STOP':
      return {
        onClick: () => {
          dispatch(stopTimer())
        }
      };

    case 'RESET':
      return {
        onClick: () => {
          dispatch(resetTimer())
        }
      }
  }
};

const ButtonController = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default ButtonController