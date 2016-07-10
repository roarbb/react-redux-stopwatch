export const startTimer = () => {
  return {
    type: 'START_TIMER'
  }
};

export const stopTimer = () => {
  return {
    type: 'STOP_TIMER'
  }
};

export const resetTimer = () => {
  return {
    type: 'RESET_TIMER'
  }
};

export const setDisplayTime = (startTime, running) => {
  return {
    type: 'SET_DISPLAY_TIME',
    startTime: startTime,
    running: running
  }
};