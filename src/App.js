import React from 'react';
import Countdown from 'react-countdown';
import background from './assets/ac-back.jpg';
import './App.css';

function App() {
  const releaseDate = new Date(2020, 2, 20, 0, 0, 0);
  console.log(releaseDate)
  const renderer = ({total, days, hours, minutes, seconds, complete }) => {
    if (complete) {
      return <span> Let's Play! </span>
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div>
                {days}
              </div>
              <div>
                日
              </div>
            </div>
            <div className="col-sm-3">
              <div>
                {hours}
              </div>
              <div>
                時
              </div>
            </div>
            <div className="col-sm-3">
              <div>
                {minutes}
              </div>
              <div>
                分
              </div>
            </div>
            <div className="col-sm-3">
              <div>
                {seconds}
              </div>
              <div>
                秒
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="App">
      <div className="App-Main">
        <div className="App-Header">
          <span className="Header-Text">
            Animal Crossing: New Horizons Countdown
          </span>
        </div>
        <div className="App-Body">
          <Countdown
            date={releaseDate}
            renderer={renderer}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
