<template>
  <div class="sidebar slide" id="sidebar">
    <div class="container">
      <div class="col-md-12">
        <div class="tab-content">
          <div id="discussions" class="tab-pane fade in">
            <figure class="setting">
              <img class="avatar-xl" src="@/assets/avatar-male-1.jpg" alt="avatar" />
            </figure>
            <span class="logo">
              <img src="@/assets/logo.png" alt />
            </span>
            <div class="search">
              <form class="form-inline position-relative">
                <input
                  id="conversations"
                  type="search"
                  class="form-control"
                  placeholder="Search for conversations..."
                />
                <button type="button" class="btn btn-link loop">
                  <i class="ti-search" />
                </button>
              </form>
              <button class="btn create" data-toggle="modal" data-target="#startnewchat">
                <i class="ti-pencil" />
              </button>
            </div>
            <div
              class="list-group sort ps-container ps-theme-default"
              data-ps-id="96c4e300-4566-480f-6ee4-4ad734a7940f"
            >
              <button
                class="btn filterDiscussionsBtn active show"
                data-toggle="list"
                data-filter="all"
              >All</button>
              <button
                class="btn filterDiscussionsBtn"
                data-toggle="list"
                data-filter="read"
              >Favourit</button>
              <button
                class="btn filterDiscussionsBtn"
                data-toggle="list"
                data-filter="unread"
              >Unread</button>
              <div class="ps-scrollbar-x-rail" style="left: 0; bottom: 0;">
                <div class="ps-scrollbar-x" tabindex="0" style="left: 0; width: 0;"></div>
              </div>
              <div class="ps-scrollbar-y-rail" style="top: 0; right: 0;">
                <div class="ps-scrollbar-y" tabindex="0" style="top: 0; height: 0;"></div>
              </div>
            </div>
          </div>
          <div id="notifications" class="tab-pane fade active show">
            <figure class="setting">
              <img class="avatar-xl" src="@/assets/avatar-male-1.jpg" alt="avatar" />
            </figure>
            <span class="logo">
              <img alt src="@/assets/logo.png" />
            </span>
            <div class="search">
              <form class="form-inline position-relative">
                <input
                  id="notice"
                  type="search"
                  class="form-control"
                  placeholder="Filter notifications..."
                />
                <button type="button" class="btn btn-link loop">
                  <i class="ti-filter"></i>
                </button>
              </form>
            </div>
            <div class="list-group sort">
              <button
                class="btn filterNotificationsBtn active show"
                data-toggle="list"
                data-filter="all"
              >All</button>
              <button
                class="btn filterNotificationsBtn"
                data-toggle="list"
                data-filter="latest"
              >Latest</button>
              <button
                class="btn filterNotificationsBtn"
                data-toggle="list"
                data-filter="oldest"
              >Oldest</button>
            </div>
            <div class="notifications">
              <h1>Notifications</h1>
              <div
                id="alerts"
                class="list-group ps-container ps-theme-default"
                role="tablist"
                data-ps-id="35599824-a34c-e697-635c-f2242d9ef761"
                style="overflow: scroll !important;overflow-x: unset;max-height: 600px"
              >
                <a href="/#" class="filterNotifications all latest notification" data-toggle="list">
                  <img
                    class="avatar-md"
                    src="@/assets/avatar-female-1.jpg"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    alt="avatar"
                    data-original-title="Sarah"
                  />
                  <div class="status online"></div>
                  <div class="data">
                    <p>Sarah has accepted your friend request on Talkshak.</p>
                    <span>Oct 17, 2018</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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

.bg-image {
  display: inline-block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
}

a:hover {
  color: #1dc4e9;
}

.button,
.form-control,
p {
  font-weight: 400;
}

.switch,
p {
  margin-bottom: 0;
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
  color: rgba(0, 0, 0, 0) linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%) repeat scroll 0 0;
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

.btn,
.sidebar .create {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

p {
  line-height: 1.7;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.06);
  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.06);
  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.06);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.06);
}

::-webkit-scrollbar-thumb {
  background: #e8e8e8;
}

/*--- form style ---*/
.form-control {
  background: #fff none repeat scroll 0 0;
  border: medium none;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
  color: #000 !important;
  font-size: 14px;
  padding: 25px 15px;
  width: 100% !important;
  -webkit-box-shadow: 0 6px 17px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 6px 17px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 6px 17px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 6px 17px rgba(0, 0, 0, 0.1);
  box-shadow: 0 6px 17px rgba(0, 0, 0, 0.1);
}

.form-control:focus {
  background: #fff;
  border: none !important;
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.btn,
.btn:active,
.btn:focus,
.btn:hover,
.btn:not(:disabled):not(.disabled).active,
.btn:not(:disabled):not(.disabled):active,
.show > .btn.dropdown-toggle {
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none;
  -o-box-shadow: none;
  box-shadow: none;
  outline: 0;
}

.form-control::placeholder {
  font-size: 16px;
  font-weight: 400;
  color: #bdbac2;
}

.btn {
  background: 0 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.button {
  padding: 16px 25px;
  width: 100%;
  background: rgba(0, 0, 0, 0)
    linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%) repeat scroll 0 0;
  color: #fff;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
  -webkit-box-shadow: 0 0 30px 5px #f5f5f5;
  -moz-box-shadow: 0 0 30px 5px #f5f5f5;
  -ms-box-shadow: 0 0 30px 5px #f5f5f5;
  -o-box-shadow: 0 0 30px 5px #f5f5f5;
  box-shadow: 0 0 30px 5px #f5f5f5;
  font-size: 14px;
}

.button:hover {
  -webkit-opacity: 0.9;
  -moz-opacity: 0.9;
  -ms-opacity: 0.9;
  -o-opacity: 0.9;
  opacity: 0.9;
}

.bg-blue {
  background: rgba(0, 0, 0, 0)
    linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%) repeat scroll 0 0 !important;
}

.bg-indigo {
  background: #6610f2 !important;
}

.bg-purple {
  background: #6f42c1 !important;
}

.bg-red {
  background: #f75454 !important;
}

.bg-pink {
  background: #e83e8c !important;
}

.bg-orange {
  background: #fd7e14 !important;
}

.bg-green {
  background: #28a745 !important;
}

.bg-teal {
  background: #20c997 !important;
}

.bg-yellow {
  background: #ffc107 !important;
}

a.facebook {
  background: #516eab;
}

a.twitter {
  background: #55acee;
}

a.google {
  background: #dd4b39;
}

a.pinterest {
  background: #ca212a;
}

a.youtube {
  background: #e62117;
}

a.dribble {
  background: #1572b8;
}

a.linkedin {
  background: #0077b5;
}

a.tumblr {
  background: #36465d;
}

a.rss {
  background: #e3a103;
}

a.vk {
  background: #466991;
}

/*--- switch style ---*/
.switch {
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 42px;
  max-width: 42px;
  height: 18px;
}

.switch input {
  -webkit-opacity: 0;
  -moz-opacity: 0;
  -ms-opacity: 0;
  -o-opacity: 0;
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc !important;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 3px;
  bottom: 3px;
  background-color: #fff;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.avatar-lg,
.avatar-md,
.avatar-sm,
.avatar-xl {
  width: 100%;
  -webkit-box-shadow: 0 5px 10px 4px #f5f5f5;
  -moz-box-shadow: 0 5px 10px 4px #f5f5f5;
  -ms-box-shadow: 0 5px 10px 4px #f5f5f5;
  -o-box-shadow: 0 5px 10px 4px #f5f5f5;
  box-shadow: 0 5px 10px 4px #f5f5f5;
}

input:checked + .slider {
  background-color: #1dc4e9 !important;
}

input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -moz-transform: translateX(24px);
  -ms-transform: translateX(24px);
  -o-transform: translateX(24px);
  transform: translateX(24px);
}

.slider.round {
  -webkit-border-radius: 34px;
  -moz-border-radius: 34px;
  -ms-border-radius: 34px;
  -o-border-radius: 34px;
  border-radius: 34px;
}

.slider.round:before {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}

.tooltip {
  font-size: 15px;
  font-weight: 600;
}

.tooltip.show {
  -webkit-opacity: 1;
  -moz-opacity: 1;
  -ms-opacity: 1;
  -o-opacity: 1;
  opacity: 1;
}

.tooltip-inner {
  padding: 5px 12px;
  background: #212529;
  color: #fff;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
}

.bs-tooltip-auto[x-placement^="top"] .arrow::before,
.bs-tooltip-top .arrow::before {
  border-top-color: #212529;
}

.bs-tooltip-auto[x-placement^="left"] .arrow::before,
.bs-tooltip-left .arrow::before {
  border-left-color: #212529;
}

.bs-tooltip-auto[x-placement^="right"] .arrow::before,
.bs-tooltip-right .arrow::before {
  border-right-color: #212529;
}

.bs-tooltip-auto[x-placement^="bottom"] .arrow::before,
.bs-tooltip-bottom .arrow::before {
  border-bottom-color: #212529;
}

.layout {
  overflow: hidden;
}

.logo {
  display: inline-block;
  vertical-align: middle;
}

.avatar-sm {
  height: 30px;
  min-width: 30px;
  max-width: 30px;
  border: 2px solid #fff;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
}

.avatar-md {
  height: 45px;
  min-width: 45px;
  max-width: 45px;
  border: 2px solid #fff;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
}

.avatar-lg {
  height: 50px;
  min-width: 50px;
  max-width: 50px;
  border: 3px solid #fff;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
}

.tab-pane > figure {
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 0;
  margin-right: 20px;
  cursor: pointer;
}

.avatar-xl {
  height: 45px;
  min-width: 45px;
  max-width: 45px;
  border: 3px solid #fff;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  -webkit-box-shadow: 0 2px 0px #1dc4e9;
  -moz-box-shadow: 0 2px 0px #1dc4e9;
  -ms-box-shadow: 0 2px 0px #1dc4e9;
  -o-box-shadow: 0 2px 0px #1dc4e9;
  box-shadow: 0 2px 0px #1dc4e9;
}

.align-ctr {
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

/*--- dropdown style ---*/
.dropdown-menu {
  border: medium none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0 10px 20px rgba(157, 184, 209, 0.7);
  -moz-box-shadow: 0 10px 20px rgba(157, 184, 209, 0.7);
  -ms-box-shadow: 0 10px 20px rgba(157, 184, 209, 0.7);
  -o-box-shadow: 0 10px 20px rgba(157, 184, 209, 0.7);
  box-shadow: 0 10px 20px rgba(157, 184, 209, 0.7);
  margin-top: 10px;
  min-width: 180px;
  padding: 10px;
}

.create.btn:not(:disabled):not(.disabled):active,
.show > .btn.dropdown-toggle,
.sidebar .create,
.sidebar .create.btn:not(:disabled):not(.disabled).active {
  -webkit-box-shadow: 0 0 30px 5px #f5f5f5;
  -moz-box-shadow: 0 0 30px 5px #f5f5f5;
  -ms-box-shadow: 0 0 30px 5px #f5f5f5;
  -o-box-shadow: 0 0 30px 5px #f5f5f5;
  box-shadow: 0 0 30px 5px #f5f5f5;
}

.dropdown-item,
.dropdown-item:focus,
.dropdown-item:hover {
  color: #bdbac2;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
}

.dropdown-menu hr {
  border-top: 2px solid #fbfbfb;
  margin: 10px;
}

.dropdown-item {
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  color: #888;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  font-size: 13px;
  padding: 8px 10px;
}

.dropdown-item > i {
  font-size: 14px;
  margin-right: 10px;
}

.dropdown-item:hover {
  background: #f4f8ff none repeat scroll 0 0;
  color: #000;
}

.dropdown-item:focus {
  background: 0 0;
}

.dropdown-item.active,
.dropdown-item:active {
  background: rgba(0, 0, 0, 0)
    linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%) repeat scroll 0 0 !important;
  color: #fff !important;
}

.sidebar .contacts .contact .avatar-md,
.sidebar .discussions .single .avatar-md,
.sidebar .notifications .notification .avatar-md {
  margin-right: 15px;
}

.navigation {
  background: #fff;
}

.navigation .inside .menu .btn {
  padding: 0;
  color: inherit;
}

.navigation .inside .menu .btn:last-child {
  margin-bottom: 30px;
}

.navigation .inside .menu .avatar-xl:hover {
  border: 3px solid rgba(0, 0, 0, 0)
    linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%) repeat scroll 0 0;
}

.navigation .inside .menu .power:hover {
  color: #dc3545;
}

.navigation .inside .menu .mode:hover {
  color: rgba(0, 0, 0, 0) linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%)
    repeat scroll 0 0;
}

/*--- sidebar style ---*/
.sidebar {
  min-width: 370px;
  max-width: 370px;
  background: #fdfdfd;
}

.sidebar .search {
  margin-bottom: 30px;
  margin-top: 20px;
  position: relative;
}

.sidebar .search .form-control {
  padding: 0 35px 0 54px;
  height: 45px;
  border: 1px solid #ced4da;
  background: #f4f7fa;
}

.sidebar .search .loop {
  position: absolute;
  padding: 0 15px;
  top: 0;
  bottom: 0;
  left: 0;
  line-height: 0;
  margin-bottom: 0 !important;
}

.sidebar .sort {
  -webkit-align-items: baseline;
  -moz-align-items: baseline;
  -ms-align-items: baseline;
  -o-align-items: baseline;
  align-items: baseline;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  -o-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: left;
  -moz-justify-content: left;
  -ms-justify-content: left;
  -o-justify-content: left;
  justify-content: left;
  padding-bottom: 30px;
  margin-top: 0px;
}

.sidebar .sort .btn {
  padding: 5px 20px;
  background: none;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  -ms-border-radius: 100px;
  -o-border-radius: 100px;
  border-radius: 100px;
  color: inherit;
  font-size: 12px;
  font-weight: 500;
}

.sidebar .sort .btn.active {
  background: #1dc4e9;
  padding: 5px 20px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
  color: #fff;
  -webkit-box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
}

.sidebar .create {
  color: #acacac;
  float: right;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  line-height: 0;
}

.sidebar .contacts a:hover {
  color: inherit;
}

.sidebar .contacts .contact .status .online {
  color: #1dc4e9;
}

.sidebar .contacts .contact {
  -webkit-align-items: flex-start;
  -moz-align-items: flex-start;
  -ms-align-items: flex-start;
  -o-align-items: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #ebebeb;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  padding: 20px 0;
  position: relative;
}

.sidebar .contacts .contact:hover {
  border-bottom: 1px solid #1dc4e9;
}

.sidebar .contacts .contact:last-of-type {
  border-bottom: 1px solid transparent !important;
}

.sidebar .discussions h1,
.sidebar .contacts h1,
.sidebar .notifications h1,
.categories h1 {
  color: #5c5c5c;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0;
  padding-bottom: 10px;
}

.sidebar .discussions .single.active p,
.sidebar .discussions .single.active span,
.sidebar .discussions .single.unread p,
.sidebar .discussions .single.unread span {
  font-weight: 400;
}

.sidebar .discussions a:hover {
  color: inherit;
}

.sidebar .discussions .single {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-align: start;
  -webkit-align-items: flex-start;
  -moz-align-items: flex-start;
  -ms-align-items: flex-start;
  -o-align-items: flex-start;
  align-items: flex-start;
  padding: 20px 0;
  border-top: 1px solid #ebebeb;
  position: relative;
}

.sidebar .discussions .single:hover {
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.sidebar .discussions .single:hover {
  border-bottom: 2px solid rgba(0, 0, 0, 0)
    linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%) repeat scroll 0 0;
}

.sidebar .discussions .single:last-of-type {
  border-bottom: 2px solid transparent !important;
}

.sidebar .discussions .single.active,
.sidebar #contacts > a.active,
.sidebar .notifications .notification.active {
  background: #f4f8ff;
  border-left: 3px solid #1dc4e9;
  padding-left: 5px;
}

.sidebar .discussions .single .new {
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  background: #f0d24b none repeat scroll 0 0;
  border: 1px solid #fff;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  -webkit-box-shadow: 0 3px 4px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 3px 4px rgba(0, 0, 0, 0.25);
  -ms-box-shadow: 0 3px 4px rgba(0, 0, 0, 0.25);
  -o-box-shadow: 0 3px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.25);
  display: inline-block;
  height: 25px;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  -o-justify-content: center;
  justify-content: center;
  line-height: 22px;
  vertical-align: sub;
  width: 25px;
}

.sidebar .discussions .single .new span {
  color: #fff !important;
  font-size: 11px !important;
  font-weight: 400;
  line-height: inherit;
}

.sidebar .status {
  border: 2px solid #fff;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  bottom: 18px;
  height: 16px;
  left: 28px;
  position: absolute;
  width: 16px;
}

.sidebar .status::before {
  background: #999;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  content: "";
  height: 12px;
  left: 0;
  position: absolute;
  top: 0;
  width: 12px;
}

.sidebar .status.online::before {
  background: #7fba00;
}

.sidebar .status.offline::before {
  background: #a9a9a9;
}

.sidebar .status.away::before {
  background: #ffd300;
}

.sidebar .discussions .single .data,
.sidebar .contacts .contact .data,
.sidebar .notifications .notification .data,
.sidebar .category .data {
  width: 100%;
  position: relative;
}

.sidebar .category .data {
  margin-left: 13px;
}

.sidebar .discussions .single .data h5,
.sidebar .contacts .contact .data h5,
.sidebar .settings .categories .category .title .data h5 {
  color: #1a1a1a;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  vertical-align: middle;
  text-transform: capitalize;
}

.sidebar .discussions .single .data p,
.sidebar .contacts .contact .data p,
.sidebar .notifications .notification .data span,
.sidebar .settings .categories .category .title .data p {
  font-size: 13px;
  line-height: 1.4;
  font-weight: 400;
  color: #888;
}

.sidebar .discussions .single .data span {
  color: #888;
  float: right;
  font-size: 12px;
  font-weight: 400;
  padding-right: 5px;
}

.sidebar .notifications a:hover {
  color: inherit;
}

.sidebar .notifications .notification {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-align: start;
  -webkit-align-items: flex-start;
  -moz-align-items: flex-start;
  -ms-align-items: flex-start;
  -o-align-items: flex-start;
  align-items: flex-start;
  padding: 11px 0;
  border-bottom: 1px solid #ebebeb;
  position: relative;
}

.sidebar .notifications .notification .status {
  bottom: 30px;
  left: 30px;
}

.sidebar .notifications .notification .data p {
  font-size: 13.5px;
  line-height: 1.4;
  font-weight: 400;
  color: #212529;
  margin-bottom: 3px;
}

.sidebar .settings .profile {
  text-align: center;
  margin-bottom: 40px;
}

.sidebar .settings .profile .avatar-xl {
  margin-bottom: 20px;
}

.sidebar .settings .profile h1 {
  font-size: 18px;
  font-weight: 700;
  color: #212529;
  margin-bottom: 8px;
}

.sidebar .settings .profile span {
  display: block;
  margin-bottom: 31px;
  font-size: 15px;
}

.sidebar .settings .profile .stats {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  -o-justify-content: center;
  justify-content: center;
  padding: 20px 0;
  background: #fff;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
  -webkit-box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  -moz-box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  -ms-box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  -o-box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.sidebar .settings .profile .stats:hover {
  -webkit-transform: translateY(-5px) translateZ(0);
  -moz-transform: translateY(-5px) translateZ(0);
  -ms-transform: translateY(-5px) translateZ(0);
  -o-transform: translateY(-5px) translateZ(0);
  transform: translateY(-5px) translateZ(0);
}

.sidebar .settings .profile .stats .item {
  width: 100%;
  text-align: center;
  border-right: 2px solid #fbfbfb;
}

.sidebar .settings .profile .stats .item:last-child {
  border-right: none;
}

.sidebar .settings .profile .stats .item h2 {
  font-size: 20px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 6px;
}

.sidebar .settings .profile .stats .item h3 {
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 0;
  color: #bdbac2;
}

.sidebar .settings .categories .category .title {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #ebebeb;
  position: relative;
}

.sidebar .settings .categories .category .title:last-child {
  border-bottom: 2px solid transparent;
}

.sidebar .settings .categories .category .active {
  background: #f4f8ff none repeat scroll 0 0;
  border-left: 3px solid #1dc4e9;
  padding-left: 5px;
}

.sidebar .settings .categories .category .content {
  padding: 30px 0;
  border-bottom: 2px solid #fbfbfb;
}

.sidebar .settings .categories .category .content .button {
  padding: 14px 25px;
}

.sidebar .settings .categories .category .content .btn-link {
  padding: 0;
  color: #dc3545;
  font-weight: 400;
  margin-bottom: 18px;
}

.sidebar .settings .categories .category .content.layer {
  padding: 24px 0 30px !important;
}

.sidebar .settings .categories .category .content.no-layer {
  padding: 28px 0 27px !important;
}

.sidebar .settings .categories .category .content .upload {
  padding: 27px 25px;
  background: #fff;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
  -webkit-box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  -moz-box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  -ms-box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  -o-box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  margin-bottom: 30px;
}

.sidebar .settings .categories .category .content .upload p {
  font-size: 13px;
  font-weight: 400;
}

.sidebar .settings .categories .category .content .upload .data {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  margin-bottom: 19px;
}

.sidebar .settings .categories .category .content .upload .data label {
  margin-bottom: 0;
}

.sidebar .settings .categories .category .content .upload .data input {
  display: none;
}

.sidebar .settings .categories .category .content .upload .data .avatar-xl {
  margin-right: 20px;
}

.sidebar .settings .categories .category .content .data .button {
  padding: 10px 25px;
}

.sidebar .settings .categories .category .content .parent {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
}

.sidebar .settings .categories .category .content .parent .field {
  margin-right: 15px;
}

.sidebar .settings .categories .category .content .parent .field:last-child {
  margin-right: 0;
  margin-bottom: 20px;
}

.sidebar .settings .categories .category .content .field {
  width: 100%;
  margin-bottom: 20px;
}

.sidebar .settings .categories .category .content .field:last-of-type {
  margin-bottom: 30px;
}

.sidebar .settings .categories .category .content .field label {
  color: #757575;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.6px;
  margin-bottom: 10px;
  text-transform: capitalize;
}

.sidebar .settings .categories .category .content .field label > span {
  font-weight: 400;
  color: #dc3545;
}

.sidebar .settings .categories .category .content .field .form-control {
  padding: 0 18px;
  height: 46px;
  font-weight: 400;
  font-size: 13px;
  border: 2px solid transparent;
  color: #999 !important;
}

.sidebar .settings .categories .category .content .field .form-control:focus {
  border: 2px solid rgba(0, 0, 0, 0)
    linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%) repeat scroll 0 0 !important;
}

.sidebar
  .settings
  .categories
  .category
  .content
  .field
  .form-control::placeholder {
  font-weight: 400;
  font-size: 16px;
}

.sidebar .settings .categories .category .content .history p {
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 10px;
}

.sidebar .settings .categories .category .content .history p:last-of-type {
  margin-bottom: 20px;
}

.sidebar .settings .categories .category .content .history .custom-control {
  margin-bottom: 10px;
}

.settings,
.categories,
.category,
.content,
.history,
.custom-control:last-of-type {
  margin-bottom: 20px;
}

.sidebar,
.settings,
.categories,
.category,
.content,
.history,
.custom-control-label {
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
}

.sidebar,
.settings,
.categories,
.category,
.content,
.history,
.custom-control-label::before {
  background-color: #ccc;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none;
  -o-box-shadow: none;
  box-shadow: none;
}

.sidebar,
.settings,
.categories,
.category,
.content,
.history,
.custom-control-input:checked,
~ .custom-control-label::before {
  color: #fff;
  background-color: #007bff;
}

.sidebar .settings .categories .category .content .app {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-align: start;
  -webkit-align-items: flex-start;
  -moz-align-items: flex-start;
  -ms-align-items: flex-start;
  -o-align-items: flex-start;
  align-items: flex-start;
  padding: 15px 25px;
  background: #fff;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
  -webkit-box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  -moz-box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  -ms-box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  -o-box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  margin-bottom: 4px;
}

.sidebar .settings .categories .category .content .app:last-child {
  margin-bottom: 0;
}

.sidebar .settings .categories .category .content .app img {
  width: 36px;
  height: 36px;
  margin-right: 15px;
}

.sidebar .settings .categories .category .content .app .permissions {
  margin-right: auto !important;
}

.sidebar .settings .categories .category .content .app .permissions h5 {
  font-size: 14px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 8px;
}

.sidebar .settings .categories .category .content .app .permissions p {
  font-size: 13px;
  line-height: 1.4;
  font-weight: 400;
}

.sidebar .settings .categories .category .content .language label {
  font-size: 14px;
  font-weight: 700;
  color: #212529;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.sidebar .settings .categories .category .content .language .custom-select {
  background: #eaeaea none repeat scroll 0 0;
  border: 2px solid transparent;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
  color: #6d6a72;
  font-size: 14px;
  font-weight: 400;
  height: 52px;
  padding: 0 18px;
  width: 100%;
}

.sidebar,
.settings,
.categories,
.category,
.content,
.language,
.custom-select:focus {
  border: 2px solid rgba(0, 0, 0, 0)
    linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%) repeat scroll 0 0 !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  -ms-box-shadow: none !important;
  -o-box-shadow: none !important;
  box-shadow: none !important;
}

.sidebar .settings .categories .category .content .language select > option {
  font-weight: 400;
}

.sidebar .settings .categories .category .content .set {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  -webkit-align-items: flex-start;
  -moz-align-items: flex-start;
  -ms-align-items: flex-start;
  -o-align-items: flex-start;
  align-items: flex-start;
  padding: 21px 0 20px;
  border-bottom: 1px solid #d0d0d0;
}

.sidebar .settings .categories .category .content .set:only-child {
  padding: 0 !important;
}

.sidebar .settings .categories .category .content .set:first-child {
  padding: 0 0 20px;
}

.sidebar .settings .categories .category .content .set:last-child {
  padding: 21px 0 0;
  border-bottom: none;
}

.sidebar .settings .categories .category .content .set .details {
  margin-right: auto;
}

.sidebar .settings .categories .category .content .set .details h5 {
  color: #1dc4e9;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

.sidebar .settings .categories .category .content .set .details p {
  font-size: 13px;
  line-height: 1.4;
  font-weight: 400;
}
</style>
