<template>
  <main>
    <div class="layout">
      <div class="sign-bg">
        <div class="start">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="register-content">
                  <div class="login-header">
                    <div class="logo">
                      <img src="@/assets/logo2.png" alt />
                    </div>
                    <h1>
                      <i class="ti-key" />Sign in
                    </h1>
                  </div>
                  <form @submit.prevent="login" class="login-up">
                    <div class="form-group">
                      <label for="inputEmail" />
                      <input
                        id="inputEmail"
                        v-model="email"
                        type="text"
                        class="form-control"
                        placeholder="Email Address"
                        tabindex="1"
                      />
                      <button class="btn icon" tabindex="-1">
                        <i class="ti-email" />
                      </button>
                    </div>
                    <div class="form-group">
                      <label for="inputPassword" />
                      <input
                        id="inputPassword"
                        v-model="password"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        tabindex="2"
                      />
                      <button class="btn icon" tabindex="-1">
                        <i class="ti-lock" />
                      </button>
                    </div>
                    <button type="submit" class="btn button" formaction="index.html">Sign In</button>
                    <div class="callout">
                      <span>Sign in with</span>
                      <ul>
                        <li>
                          <a href="/#" title class="facebook">
                            <i class="ti-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="/#" title class="twitter">
                            <i class="ti-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="/#" title class="google">
                            <i class="ti-google" />
                          </a>
                        </li>
                      </ul>
                      <span>
                        Don't have account?
                        <a href="/#">Create Account</a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-8 col-md-6">
                <div class="page-meta">
                  <h2>Talkshak is a simplest and friendly interface Messagner or plateform.</h2>
                  <span>login now and enjoy!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import auth from "@/auth";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    login() {
      auth.login(this.email, this.password, loggedIn => {
        if (!loggedIn) {
          this.error = true;
        } else {
          this.$router.replace(this.$route.query.redirect || "/");
        }
      });
    }
  }
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

.sign-bg {
  background: rgba(0, 0, 0, 0)
    linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%) repeat scroll 0 0;
  height: 100vh;
  width: 100%;
}

.sign-bg .start .container > .row > div {
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  -o-justify-content: center;
  justify-content: center;
  width: 100%;
}

.sign-bg .start .container {
  max-width: 1170px;
}

.login-header > h1 {
  color: #fff;
  display: inline-block;
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 20px;
  width: 100%;
}

.login-header > h1 i {
  margin-right: 5px;
}

.login-up .form-group > input {
  height: auto;
  padding: 13px 20px;
}

.callout > span {
  color: #404040;
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 15px;
  margin-top: 30px;
  width: 100%;
}

.callout > ul {
  display: inline-block;
  list-style: outside none none;
  padding-left: 0;
  width: 100%;
  margin-bottom: 0;
}

.callout > ul li {
  display: inline-block;
  margin-right: 6px;
}

.callout > ul li a {
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 40px;
}

.page-meta {
  display: inline-block;
  padding: 0 50px;
  width: 100%;
}

.page-meta > h2 {
  color: #fff;
  display: inline-block;
  font-size: 44px;
  font-weight: 200;
  width: 100%;
}

.page-meta > span {
  color: #fff;
  display: inline-block;
  font-size: 20px;
  margin-top: 20px;
  text-transform: capitalize;
  width: 100%;
}

.callout > span > a {
  color: #1de9b6;
  -webkit-text-decoration: underline;
  -moz-text-decoration: underline;
  -ms-text-decoration: underline;
  -o-text-decoration: underline;
  text-decoration: underline;
}

.sign-bg .start {
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  height: 100%;
}
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

.button,
.form-control,
p {
  font-weight: 400;
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

/*--- sign in page ---*/

.register-content {
  background: #fff none repeat scroll 0 0;
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: inline-block;
  padding: 30px 30px 10px;
  position: relative;
  vertical-align: middle;
  width: 100%;
}

.login-header {
  background: rgba(0, 0, 0, 0)
    linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%) repeat scroll 0 0;
  padding: 40px 30px 60px;
  text-align: center;
  width: 100%;
}

.sign-bg .start .container > .row > div {
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  -o-justify-content: center;
  justify-content: center;
  width: 100%;
}

.login-header > h1 {
  color: #fff;
  display: inline-block;
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 20px;
  width: 100%;
}

.login-header > h1 i {
  margin-right: 5px;
}

form.login-up {
  background: #fff none repeat scroll 0 0;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  margin-left: 14px;
  margin-top: -25px;
  padding: 20px;
  width: 90%;
}

.login-up .form-group {
  position: relative;
}

.login-up .form-group > input {
  height: auto;
  padding: 13px 20px;
}

.login-up .form-group .btn.icon {
  color: #cfcfcf;
  height: 100%;
  position: absolute;
  right: 0;
  top: 14px;
}

.callout {
  display: inline-block;
  width: 100%;
}

.callout > span {
  color: #404040;
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 15px;
  margin-top: 30px;
  width: 100%;
}

.callout > ul {
  display: inline-block;
  list-style: outside none none;
  padding-left: 0;
  width: 100%;
  margin-bottom: 0;
}

.callout > ul li {
  display: inline-block;
  margin-right: 6px;
}

.callout > ul li a {
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 40px;
}

.page-meta > h2 {
  color: #fff;
  display: inline-block;
  font-size: 44px;
  font-weight: 200;
  width: 100%;
}

.page-meta > span {
  color: #fff;
  display: inline-block;
  font-size: 20px;
  margin-top: 20px;
  text-transform: capitalize;
  width: 100%;
}

.login-up > .btn.button {
  padding: 10px;
}

.callout > span > a {
  color: #1de9b6;
  -webkit-text-decoration: underline;
  -moz-text-decoration: underline;
  -ms-text-decoration: underline;
  -o-text-decoration: underline;
  text-decoration: underline;
}
</style>
