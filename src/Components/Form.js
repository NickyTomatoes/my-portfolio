import "./Form.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form action="https://submit-form.com/YFVdg9yE">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required=""
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required=""
        />
        <label for="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required=""
        />
        <label for="message">Message</label>
        <textarea
          rows="6"
          id="message"
          name="message"
          placeholder="Type your message here"
          required=""
        ></textarea>
        <button type="submit" className="btn">
          Let's Chat
        </button>
      </form>
    </div>
  );
};

export default Form;
