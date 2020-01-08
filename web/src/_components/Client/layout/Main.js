import React, { Component } from 'react'

import StatusActive from './StatusActive';
import Chat from '../../../_containers/Chat';

class Main extends Component {

  render() {
    return (
      <div className="main" id="chat-dialog">
        <div className="tab-content" id="nav-tabContent">
          <div className="babble tab-pane fade active show" id="list-chat" role="tabpanel"
               aria-labelledby="list-chat-list">
            <div className="chat" id="chat1">
              <StatusActive/>
              <Chat/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
