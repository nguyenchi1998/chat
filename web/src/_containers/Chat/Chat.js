import React, { Component } from 'react';
import Message from '../Message';
import { connect } from 'react-redux';
import getMessages from '../../_actions/messageActions';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentUser: null,
    };
  }

  componentDidMount() {
    // this.props.fetchMessages();
  }

  render() {
    const { messages = [] } = this.props;
    const { currentUser } = this.state;

    return (
      <div>
        <div className='content ps-theme-default' id='content' ref={this.chatThreadRef}>
          <div className='container'>
            <div className='col-md-12'>
              <div className='date'>
                <hr/>
                <span>Yesterday</span>
                <hr/>
              </div>
              {
                (messages && messages.length)
                  ? messages.map((message, i) => (
                    <Message data={message} user={currentUser} key={i}/>
                  ))
                  : null
              }
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='col-md-12'>
            <div className='bottom'>
              <form className='text-area'>
                <textarea
                  className='form-control'
                  id='enter-message'
                  placeholder='Start typing for reply...'
                  rows='1'
                  onKeyDown={this.handleChat}
                />
                <div className='add-smiles'>
                  <span title='add icon' className='em em-blush'/>
                </div>
                <div className='smiles-bunch'>
                  <i className='em em---1'/>
                  <i className='em em-smiley'/>
                  <i className='em em-anguished'/>
                  <i className='em em-laughing'/>
                  <i className='em em-angry'/>
                  <i className='em em-astonished'/>
                  <i className='em em-blush'/>
                  <i className='em em-disappointed'/>
                  <i className='em em-worried'/>
                  <i className='em em-kissing_heart'/>
                  <i className='em em-rage'/>
                  <i className='em em-stuck_out_tongue'/>
                  <i className='em em-expressionless'/>
                  <i className='em em-bikini'/>
                  <i className='em em-christmas_tree'/>
                  <i className='em em-facepunch'/>
                  <i className='em em-pushpin'/>
                  <i className='em em-tada'/>
                  <i className='em em-us'/>
                  <i className='em em-rose'/>
                </div>
                <button
                  type='submit'
                  className='btn send'
                  onClick={this.handleChat}
                >
                  <i className='ti-location-arrow'/>
                </button>
              </form>
              <label>
                <input type='file'/>
                <span className='btn attach'>
                  <i className='ti-clip'/>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: dispatch(getMessages)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
