import React, { Component } from 'react';
import '../../assets/client/bootstrap.min.css';
import './../../assets/client/perfect-scrollbar.min.css';
import './../../assets/client/themify-icons.css';
import './../../assets/client/emoji.css';
import './Client.css'
import './../../assets/client/responsive.css';
import './layout/TabMenu';
import TabPane from './layout/TabPane';
import Main from './layout/Main';

class Client extends Component {

  render() {
    return (
      <main>
        <div className='layout'>
          {/*<TabMenu/>*/}
          <TabPane/>
          <Main/>
        </div>
      </main>
    );
  }
}

export default Client;
