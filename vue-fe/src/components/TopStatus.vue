<template>
  <div class="top">
    <div class="container">
      <div class="col-md-12">
        <div class="inside">
          <div class="status online"></div>
          <div class="data">
            <h5>
              <a href="/#">Sarah Dalton</a>
            </h5>
            <span>Active now</span>
          </div>
          <button class="btn d-md-block d-none audio-call" title="Audio call">
            <i class="ti-headphone-alt" />
          </button>
          <button class="btn d-md-block d-none video-call" title="Video call">
            <i class="ti-video-camera" />
          </button>
          <button class="btn d-md-block d-none" title="More Info">
            <i class="ti-info" />
          </button>
          <div class="dropdown">
            <button class="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="ti-view-grid" />
            </button>
            <div
              class="dropdown-menu dropdown-menu-right"
              x-placement="bottom-end"
              style="position: absolute; transform: translate3d(-140px, 40px, 0px); top: 0; left: 0; will-change: transform;"
            >
              <a href="/#" class="dropdown-item audio-call">
                <i class="ti-headphone-alt" />Voice
                Call
              </a>
              <a href="/#" class="dropdown-item video-call">
                <i class="ti-video-camera" />Video
                Call
              </a>
              <hr />
              <a href="/#" class="dropdown-item">
                <i class="ti-server" />Clear History
              </a>
              <a href="/#" class="dropdown-item">
                <i class="ti-hand-stop" />Block
                Contact
              </a>
              <a href="/#" class="dropdown-item">
                <i class="ti-trash" />Delete Contact
              </a>
            </div>
          </div>
          <button class="btn back-to-mesg" title="Back">
            <i class="ti-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopStatus"
};
</script>

<style scoped>
@import "../assets/bootstrap.min.css";
@import "../assets/perfect-scrollbar.min.css";
@import "../assets/themify-icons.css";
@import "../assets/responsive.css";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700");

a,
img {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

a,
a:hover {
  -webkit-text-decoration: none;
  -moz-text-decoration: none;
  -ms-text-decoration: none;
  -o-text-decoration: none;
  text-decoration: none;
}

a:hover {
  color: #1dc4e9;
}

body {
  font-family: Open Sans, sans-serif;
  font-size: 15px;
  background: #fff;
  color: #888;
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

a:hover {
  color: rgba(0, 0, 0, 0) linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%)
    repeat scroll 0 0;
}

.main .chat .content .message .text .attachment .file a:hover,
.main .start .content .callout span > a:hover {
  -webkit-text-decoration: underline;
  -moz-text-decoration: underline;
  -ms-text-decoration: underline;
  -o-text-decoration: underline;
  text-decoration: underline;
}

img {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

p {
  line-height: 1.7;
}

.btn {
  background: 0 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -moz-transform: translateX(24px);
  -ms-transform: translateX(24px);
  -o-transform: translateX(24px);
  transform: translateX(24px);
}

.main .chat .top .inside {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
}

.main .chat .top .inside .status {
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  bottom: 15px;
  display: inline-block;
  left: 85px;
  line-height: 20px;
  margin-top: 0;
  position: absolute;
}

.main .chat .top .inside .status::before {
  background: #999 none repeat scroll 0 0;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  content: "";
  display: inline-block;
  height: 12px;
  left: 0;
  position: absolute;
  top: 0;
  width: 13px;
}

.main .chat .top .inside .status.online:before {
  background: #7fba00;
}

.main .chat .top .inside .status.offline:before {
  background: #a9a9a9;
}

.main .chat .top .inside .status.away:before {
  background: #ffd300;
}

.main .chat .top .inside .data {
  margin-right: auto;
}

.main .chat .top .inside .data h5 {
  font-size: 20px;
  font-weight: 400;
  color: #000;
  margin-bottom: 2px;
}

.main .chat .top .inside .data span {
  display: block;
  font-size: 12px;
  line-height: 1.4;
  font-weight: 400;
}

.main .chat .top .inside .btn {
  background: #f5f5f5 none repeat scroll 0 0;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  color: inherit;
  height: 40px;
  margin-right: 10px;
  text-align: center;
  width: 40px;
  -webkit-transition: all 0.2s linear 0s;
  -moz-transition: all 0.2s linear 0s;
  -ms-transition: all 0.2s linear 0s;
  -o-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}

.main .chat .top .inside .btn.back-to-mesg {
  display: none;
}

.main .chat .top .inside .btn:hover {
  background: rgba(0, 0, 0, 0)
    linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%) repeat scroll 0 0;
  color: #fff;
}

.main .chat .top .inside .dropdown .btn {
  margin-right: 0;
}

.main .chat .top .inside .dropdown-menu-right {
  right: 0 !important;
  bottom: inherit !important;
}
</style>
