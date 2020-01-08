import React, { Component } from 'react';
import './Message.scss';

class Message extends Component {

  render() {
    const message = this.props.data;
    const user = {
      _id: "asdasd"
    };

    return (
      <div className={message.user === user._id ? 'message me' : 'message'}>
        <img className="avatar-md" src={require('./../../assets/client/avatar-female-5.jpg')}
             data-toggle="tooltip"
             data-placement="top" title="" alt="avatar" data-original-title="Karen joye"/>
        <div className="text-main">
          <div className={message.user === user._id ? 'text-group me' : 'text-group'}>
            <div className={message.user === user._id ? 'text me' : 'text'}>
              <pre>{message.content}</pre>
            </div>
          </div>
          <span>{message.created_at}</span>
        </div>
      </div>
    );
  }
}

export default Message;
