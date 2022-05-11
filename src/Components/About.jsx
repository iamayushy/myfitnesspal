import React from "react";
import styles from "../components/About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <script type="text/javascript">
            facebook_error_string ="Your Facebook account was not authorized.";
          </script>
          <div className={styles.main}>
            <h2 className={styles.main_title}>
              Lose Weight with MyFitnessPal.com — for FREE!
            </h2>

            <p className={styles.p1}>
              Losing weight isn't easy - we know. But with a membership to
              MyFitnessPal.com, you'll get the tools you need to successfully
              take weight off - and keep it off. And best of all, you can signup
              for free, no strings attached. So put away your credit card -
              you'll never have to pay a cent.
            </p>

            <p className={styles.p1}>
              Study after study has confirmed the benefits of keeping track of
              the food you eat and the activity you do. It's simple - the more
              consistently you track your food intake, the more likely you are
              to lose weight. That's why every successful weight management
              program suggests that you keep a food diary and/or an activity
              log. But recording everything you eat without the right tools can
              be tedious at best, or simply impossible at worst.
            </p>

            <p className={styles.p1}>
              At MyFitnessPal.com, we focus on making sure you can log your
              meals as quickly and easily as possible. Because the easier we
              make it for you, the more likely you are to stay on track, and the
              more likely you are to succeed in your weight loss goals.
            </p>

            <div className={styles.our_system}>
              <h4 className={styles.secondary_title}>How does it work?</h4>

              <p>
                The reason our system is so easy to use is because{" "}
                <strong>it learns from you!</strong> All of us tend to eat the
                same foods over time. <strong>MyFitnessPal.com</strong>{" "}
                remembers what you've eaten and done most often in the past, and
                makes it easy for you to add those foods again to your log.
              </p>
              <p>
                <strong>
                  So the more you track your meals, the easier it becomes!
                </strong>
              </p>
            </div>

            <h4 className={styles.secondary_title}>
              With a FREE membership you get:
            </h4>

            <ul className={styles.list0}>
              <li>
                <h5>
                  <span>The easiest to use food diary on the web -</span>
                </h5>

                <p>
                  Track what you eat with just a few clicks from anywhere with
                  an internet connection - at home or at work
                </p>
              </li>

              <li>
                <h5>
                  <span>
                    A searchable food database of over 300,000,000 items -
                  </span>
                </h5>

                <p> and it's growing every day!</p>
              </li>

              <li>
                <h5>
                  <span>Your own personal food database -</span>
                </h5>

                <p>
                  add your own foods and recipes at any time and access them
                  from anywhere with an internet connection
                </p>
              </li>

              <li>
                <h5>
                  <span>Free mobile apps for iPhone and Android -</span>
                </h5>

                <p>
                  so you can log your meals and exercise even when you are on
                  the go
                </p>
              </li>

              <li>
                <h5>
                  <span>Support and motivation </span>
                </h5>

                <p>
                  from people just like you - Our discussion forums let you
                  learn from others, share your own tips, receive and give
                  encouragement, and make friends.
                </p>
              </li>

              <li>
                <h5>A personalized diet profile</h5>

                <p>- customized to your unique weight loss goals.</p>
              </li>

              <li>
                <h5>
                  <span>Flexibility</span>
                </h5>

                <p>
                  - our system can support any diet like Atkins, the South Beach
                  Diet, the Zone, and more. No matter what diet you're on, we
                  can help.
                </p>
              </li>
            </ul>

            <h4 className={styles.secondary_title}>
              Don't wait! Start losing weight the healthy way - all for FREE!
            </h4>

            <div className={styles.healty_living}>
              <div className={styles.healty_living_sub}>
                <p>
                  All the tools you need for healthy, sustainable weight loss
                  are right at your fingertips - and you'll never have to pay a
                  cent! So what are you waiting for? Stop wasting money on other
                  dieting programs.
                </p>

                <p>
                  <strong>
                    Join today and get on the path to healthier living!
                  </strong>
                </p>

                <p className={styles.button}>
                  <a className={styles.button} href="#">
                    Join Now for FREE!
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <form className={`${styles.form} ${styles.login}`}>
              <input name="utf8" type="hidden" value="✓" />
              <input type="hidden" name="authenticity_token" value=" " />
              <div className={styles.member_login}>
                <h2>Member Login</h2>
                <ul>
                  <li>
                    <div
                      className={`${styles.fb_login_button} ${styles.fb_iframe_widget}`}
                      data-onlogin="MFP.onFBLogin();"
                      data-max-rows="1"
                      data-size="large"
                      data-button-type="login_with"
                      data-show-faces="false"
                      data-auto-logout-link="false"
                      data-use-continue-as="true"
                      login_text="Log in with Facebook"
                      fb-xfbml-state="rendered"
                      fb-iframe-plugin-query="app_id=186796388009496&amp;auto_logout_link=false&amp;button_type=login_with&amp;container_width=234&amp;locale=en_US&amp;login_text=Log%20in%20with%20Facebook&amp;max_rows=1&amp;sdk=joey&amp;show_faces=false&amp;size=large&amp;use_continue_as=true"
                    >
                      <span className={styles.span194}>
                        <iframe
                          name="f134297aae6a718"
                          width="1000px"
                          height="1000px"
                          data-testid="fb:login_button Facebook Social Plugin"
                          title="fb:login_button Facebook Social Plugin"
                          frameborder="0"
                          allowtransparency="true"
                          allowfullscreen="true"
                          scrolling="no"
                          allow="encrypted-media"
                          src="https://www.facebook.com/v3.2/plugins/login_button.php?app_id=186796388009496&amp;auto_logout_link=false&amp;button_type=login_with&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfc1fec02d130c%26domain%3Dwww.myfitnesspal.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.myfitnesspal.com%252Ff24c5bde514eda%26relation%3Dparent.parent&amp;container_width=234&amp;locale=en_US&amp;login_text=Log%20in%20with%20Facebook&amp;max_rows=1&amp;sdk=joey&amp;show_faces=false&amp;size=large&amp;use_continue_as=true"
                          className={styles.iframe211}
                        ></iframe>
                      </span>
                    </div>
                  </li>
                  <li className={styles.or}>or</li>
                  <li>
                    <label>Username:</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value=""
                      size="12"
                      className={styles.text}
                    />
                  </li>
                  <li>
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value=""
                      size="12"
                      className={styles.text}
                    />
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="remember_me"
                      id="remember_me"
                      value="1"
                      className={styles.checkbox}
                      checked="checked"
                    />
                    <label for="remember_me">Remember me next time</label>
                  </li>
                  <li className={styles.submit}>
                    <input type="submit" value="Log In" />
                  </li>
                </ul>
              </div>
              <ul className={styles.forgot}>
                <li>
                  <a href="#">
                    Forgot password or username?
                  </a>
                </li>
                <li>
                  Not a member yet? <a href="#">Sign up now!</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export {About};
