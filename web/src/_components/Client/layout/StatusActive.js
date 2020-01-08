import React, { Component } from 'react';

class StatusActive extends Component {
  render() {
    return (
      <div className="top">
        <div className="container">
          <div className="col-md-12">
            <div className="inside">
              <div className="status online"/>
              <div className="data">
                <h5><a href="/#">Sarah Dalton</a></h5>
                <span>Active now</span>
              </div>
              <button className="btn d-md-block d-none audio-call" title="Audio call">
                <i className="ti-headphone-alt"/>
              </button>
              <button className="btn d-md-block d-none video-call" title="Video call">
                <i className="ti-video-camera"/>
              </button>
              <button className="btn d-md-block d-none" title="More Info">
                <i className="ti-info"/>
              </button>
              <div className="dropdown">
                <button className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="ti-view-grid"/>
                </button>
                <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end"
                     style={{
                       position: 'absolute',
                       transform: 'translate3d(-140, 40, 0)',
                       top: 0,
                       left: 0,
                       willChange: 'transform',
                     }}>
                  <a href="/#" className="dropdown-item audio-call"><i
                    className="ti-headphone-alt"/>Voice Call</a>
                  <a href="/#" className="dropdown-item video-call"><i
                    className="ti-video-camera"/>Video Call</a>
                  <hr/>
                  <a href="/#" className="dropdown-item"><i
                    className="ti-server"/>Clear History</a>
                  <a href="/#" className="dropdown-item"><i
                    className="ti-hand-stop"/>Block Contact</a>
                  <a href="/#" className="dropdown-item"><i
                    className="ti-trash"/>Delete Contact</a>
                </div>
              </div>
              <button className="btn back-to-mesg" title="Back">
                <i className="ti-arrow-right"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StatusActive;
