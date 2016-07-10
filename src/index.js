import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import timerApp from './reducers'
import StartContainer from './containers/StartContainer'
import ClockContainer from './containers/ClockContainer'

require('./styles/main.scss');

let store = createStore(
  timerApp,
  window.devToolsExtension && window.devToolsExtension()
);

const StopwatchAppRoot = () => (
  <Provider store={store}>
    <div className="container-fluid">
      <ClockContainer />
      <div className="row text-xs-center">
        <div className="btn-group">
          <StartContainer label="Start" type="START"/>
          <StartContainer label="Stop" type="STOP"/>
          <StartContainer label="Reset" type="RESET"/>
        </div>
      </div>
    </div>
  </Provider>
);

render(<StopwatchAppRoot/>, document.getElementById('app'));