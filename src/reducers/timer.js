const timer = (state = {running: false, startTime: false, timeToDisplay: '00:00:00'}, action) => {
  switch (action.type) {

    case 'START_TIMER':
      return Object.assign({}, state, {
        running: true,
        startTime: Date.now()
      });

    case 'STOP_TIMER':
      return Object.assign({}, state, {
        running: false,
        timeToDisplay: currentTimeDifference(state.startTime, Date.now(), false)
      });

    case 'RESET_TIMER':
      return Object.assign({}, state, {
        running: false,
        startTime: false,
        timeToDisplay: '00:00:00'
      });

    case 'SET_DISPLAY_TIME':
      if(!action.running) {
        return state;
      }

      return Object.assign({}, state, {
        timeToDisplay: currentTimeDifference(action.startTime)
      });

    default: return state;
  }
};

const withLeadingZero = (number) => {
  return (number < 10) ? '0'+number : number;
};

const currentTimeDifference = (startTime, endTime = Date.now(), floorSeconds = true) => {
  var delta = Math.abs(endTime - startTime) / 1000;

  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  var seconds = delta % 60;

  if(floorSeconds) {
    seconds = Math.floor(seconds);
  }

  return (
    `${withLeadingZero(hours)}:${withLeadingZero(minutes)}:${withLeadingZero(seconds)}`
  );
};

export default timer;