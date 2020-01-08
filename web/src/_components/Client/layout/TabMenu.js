import React, { Component } from 'react';

class TabMenu extends Component {
  render() {
    return (
      <div className="navigation active">
        <div className="container">
          <div className="inside">
            <div className="nav nav-tab menu">
              <a href="/#" data-toggle="tab" title="User Setting"
                 className="">
                <i className="ti-panel"/>
                Setting
              </a>
              <a href="/#" data-toggle="tab" title="All members"
                 className="active show">
                <i className="ti-home active"/>
                All Friends
              </a>
              <a href="/#" data-toggle="tab" className="" title="Chat">
                <i className="ti-comment-alt"/>
                Recent Chat
              </a>
              <a href="/#" data-toggle="tab" className="f-grow1"
                 title="Notifications">
                <i className="ti-bell"/>
                Notifications
              </a>
              <a href="/#" id="dark" className="dark-theme" title="Use Night Mode">
                <i className="ti-wand"/>
                Night Mode
              </a>
              <a href="/#" className="btn power" title="Sign Out"><i
                className="ti-power-off"/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TabMenu;
