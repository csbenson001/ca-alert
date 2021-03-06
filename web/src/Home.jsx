import React from "react";
import { Link } from "react-router";
import { isLoggedIn, loggedInUser, apiCreds } from "./session";

import Button from './Button';
import SignUpForm from './SignUpForm';

export default React.createClass({
  render() {
    return (
      <div>
        <section className="usa-hero calerts">
          <div className="usa-grid">
            <div className="usa-width-one-half">
              <h2>
                <span className="usa-hero-callout-alt">Sign up for alerts in your neighborhood</span>
                {" "}
              </h2>
              <p className="secondary-message">Keep track of emergencies where you and your loved ones live, work and play. </p>
              <div className="feature">
                <h3>What’s happening right now?</h3>
                <Link to="/alerts">
                  <Button>See current alerts</Button>
                </Link>
              </div>

            </div>

            <div className="usa-width-one-half">
              <SignUpForm />
            </div>

          </div>
        </section>

      </div>
    );
  }
});
