import 'asset/bootstrap.min.css';
import 'asset/perfect-scrollbar.min.css';
import 'asset/themify-icons.css';
// import 'asset/emoji.css';
import 'asset/style.scss';
import 'asset/responsive.css';
import SideBar from 'layouts/MainLayout/SideBar';

import Avatar5 from 'asset/avatar-female-5.jpg';
import Avatar2 from 'asset/avatar-female-2.jpg';

import Box from '@material-ui/core/Box';
import Message from './Message';

const MainPage = () => {
  return (
    <Box className="layout">
      <SideBar />
      <Box className="main">
        <Box className="tab-content">
          <Box
            className="babble tab-pane fade active show"
            aria-labelledby="list-chat-list"
          >
            <Box className="chat">
              <Box className="top">
                <Box className="container">
                  <Box className="col-md-12">
                    <Box className="inside">
                      <Box className="status online" />
                      <Box className="data">
                        <h5>
                          <a href="#">Sarah Dalton</a>
                        </h5>
                        <span>Active now</span>
                      </Box>
                      <button
                        className="btn d-md-block d-none audio-call"
                        title="Audio call"
                      >
                        <i className="ti-headphone-alt" />
                      </button>
                      <button
                        className="btn d-md-block d-none video-call"
                        title="Video call"
                      >
                        <i className="ti-video-camera" />
                      </button>
                      <button
                        className="btn d-md-block d-none"
                        title="More Info"
                      >
                        <i className="ti-info" />
                      </button>
                      <Box className="dropdown">
                        <button
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="ti-view-grid" />
                        </button>
                        <Box
                          className="dropdown-menu dropdown-menu-right"
                          x-placement="bottom-end"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            willChange: 'transform',
                          }}
                        >
                          <a href="#" className="dropdown-item audio-call">
                            <i className="ti-headphone-alt" />
                            Voice Call
                          </a>
                          <a href="#" className="dropdown-item video-call">
                            <i className="ti-video-camera" />
                            Video Call
                          </a>
                          <hr />
                          <a href="#" className="dropdown-item">
                            <i className="ti-server" />
                            Clear History
                          </a>
                          <a href="#" className="dropdown-item">
                            <i className="ti-hand-stop" />
                            Block Contact
                          </a>
                          <a href="#" className="dropdown-item">
                            <i className="ti-trash" />
                            Delete Contact
                          </a>
                        </Box>
                      </Box>
                      <button className="btn back-to-message" title="Back">
                        <i className="ti-arrow-right" />
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="content ps-container ps-theme-default ps-active-y">
                <Box className="container">
                  <Box className="col-md-12">
                    <Box className="date">
                      <hr />
                      <span>Yesterday</span>
                      <hr />
                    </Box>
                    {[
                      {
                        isMine: false,
                        message: `Where was i, i worry about my viewrs missing me too much!`,
                        time: '09:46 AM',
                      },
                      {
                        isMine: true,
                        message: `But if you are not available to talk, then would
                          not they miss you more?`,
                        time: '11:32 AM',
                      },
                      {
                        isMine: false,
                        message: `Are not you sweet.`,
                        time: '02:56 PM',
                      },
                      {
                        isMine: true,
                        message: `Are not you sweet.`,
                        time: '02:56 PM',
                      },
                    ].map(({ isMine, message, time }) => (
                      <Message isMine={isMine} message={message} time={time} />
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box className="container">
                <Box className="col-md-12">
                  <Box className="bottom">
                    <form className="text-area">
                      <textarea
                        className="form-control"
                        placeholder="Start typing for reply..."
                        rows="1"
                        defaultValue=""
                      />
                      <Box className="add-smiles">
                        <span title="add icon" className="em em-blush" />
                      </Box>
                      <Box className="smiles-bunch">
                        <i className="em em---1" />
                        <i className="em em-smiley" />
                        <i className="em em-anguished" />
                        <i className="em em-laughing" />
                        <i className="em em-angry" />
                        <i className="em em-astonished" />
                        <i className="em em-blush" />
                        <i className="em em-disappointed" />
                        <i className="em em-worried" />
                        <i className="em em-kissing_heart" />
                        <i className="em em-rage" />
                        <i className="em em-stuck_out_tongue" />
                        <i className="em em-expressionless" />
                        <i className="em em-bikini" />
                        <i className="em em-christmas_tree" />
                        <i className="em em-facepunch" />
                        <i className="em em-pushpin" />
                        <i className="em em-tada" />
                        <i className="em em-us" />
                        <i className="em em-rose" />
                      </Box>
                      <button type="submit" className="btn send">
                        <i className="ti-location-arrow" />
                      </button>
                    </form>
                    <label htmlFor="a">
                      <input type="file" />
                      <span className="btn attach">
                        <i className="ti-clip" />
                      </span>
                    </label>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            className="babble tab-pane fade"
            role="tabpanel"
            aria-labelledby="list-empty-list"
          >
            <Box className="chat">
              <Box className="top">
                <Box className="container">
                  <Box className="col-md-12">
                    <Box className="inside">
                      <Box className="status offline" />
                      <Box className="data">
                        <h5>
                          <a href="#">Bob Frank</a>
                        </h5>
                        <span>Inactive</span>
                      </Box>
                      <button
                        className="btn d-md-block d-none audio-call"
                        title="Audio call"
                      >
                        <i className="ti-headphone-alt" />
                      </button>
                      <button
                        className="btn d-md-block d-none video-call"
                        title="Video call"
                      >
                        <i className="ti-video-camera" />
                      </button>
                      <button
                        className="btn d-md-block d-none"
                        title="More Info"
                      >
                        <i className="ti-info" />
                      </button>
                      <Box className="dropdown">
                        <button
                          className="btn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="ti-view-grid" />
                        </button>
                        <Box className="dropdown-menu dropdown-menu-right">
                          <a href="#" className="dropdown-item">
                            <i className="ti-headphone-alt" />
                            Voice Call
                          </a>
                          <a href="#" className="dropdown-item">
                            <i className="ti-video-camera" />
                            Video Call
                          </a>
                          <hr />
                          <a href="#" className="dropdown-item">
                            <i className="ti-server" />
                            Clear History
                          </a>
                          <a href="#" className="dropdown-item">
                            <i className="ti-hand-stop" />
                            Block Contact
                          </a>
                          <a href="#" className="dropdown-item">
                            <i className="ti-trash" />
                            Delete Contact
                          </a>
                        </Box>
                      </Box>
                      <button className="btn back-to-message" title="Back">
                        <i className="ti-arrow-right" />
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="content empty ps-container ps-theme-default">
                <Box className="container">
                  <Box className="col-md-12">
                    <Box className="no-messages">
                      <i className="ti-comments" />
                      <p>
                        Seems people are shy to start the chat. Break the ice
                        send the first message.
                      </p>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="container">
                <Box className="col-md-12">
                  <Box className="bottom">
                    <form className="text-area">
                      <textarea
                        className="form-control"
                        placeholder="Start typing for reply..."
                        rows="1"
                        defaultValue=""
                      />
                      <Box className="add-smiles">
                        <span title="add icon" className="em em-blush" />
                      </Box>
                      <Box className="smiles-bunch">
                        <i className="em em---1" />
                        <i className="em em-smiley" />
                        <i className="em em-anguished" />
                        <i className="em em-laughing" />
                        <i className="em em-angry" />
                        <i className="em em-astonished" />
                        <i className="em em-blush" />
                        <i className="em em-disappointed" />
                        <i className="em em-worried" />
                        <i className="em em-kissing_heart" />
                        <i className="em em-rage" />
                        <i className="em em-stuck_out_tongue" />
                        <i className="em em-expressionless" />
                        <i className="em em-bikini" />
                        <i className="em em-christmas_tree" />
                        <i className="em em-facepunch" />
                        <i className="em em-pushpin" />
                        <i className="em em-tada" />
                        <i className="em em-us" />
                        <i className="em em-rose" />
                      </Box>
                      <button type="submit" className="btn send">
                        <i className="ti-location-arrow" />
                      </button>
                    </form>
                    <label htmlFor="a">
                      <input type="file" />
                      <span className="btn attach">
                        <i className="ti-clip" />
                      </span>
                    </label>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="call">
              <Box className="content">
                <Box className="container">
                  <Box className="col-md-12">
                    <Box className="inside">
                      <Box className="panel">
                        <Box className="participant">
                          <img
                            className="avatar-xxl"
                            src={Avatar2}
                            alt="avatar"
                          />
                          <span>Connecting to sarah</span>
                          <Box className="wave">
                            <span className="dot" />
                            <span className="dot" />
                            <span className="dot" />
                          </Box>
                        </Box>
                        <Box className="options">
                          <button className="btn option">
                            <i className="ti-microphone" />
                          </button>
                          <button className="btn option">
                            <i className="ti-video-camera" />
                          </button>
                          <button className="btn option">
                            <i className="ti-user">+</i>
                          </button>
                          <button className="btn option">
                            <i className="ti-volume" />
                          </button>
                          <button className="btn option">
                            <i className="ti-comment" />
                          </button>
                        </Box>
                        <button className="btn option call-end">
                          <i className="ti-close" />
                        </button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
