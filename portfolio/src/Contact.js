import React from "react";

function Contact() {
  return (
    <div class="contact" name="contact">
      <h1 className="title">Contact me</h1>
      <p className="text">
        You can use links bellow to contact me if you have any questions!
      </p>
      <div className="social-icons">
          <p class="button">
            <a href="mailto:ujcicmate41@gmail.com">Email</a>
          </p>
          <p class="button">
              <a href="https://www.linkedin.com/in/mateujcic/">LinkedIn</a>
          </p>
      </div>
    </div>
  );
}

export default Contact;
