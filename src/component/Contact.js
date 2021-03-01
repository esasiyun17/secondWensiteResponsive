import React from "react";
import "../App.css";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_re32na7",
        "template_xhxyonb",
        e.target,
        "user_r7toTWTCoTgBIHkmbzMzX"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mesajınız başarılı bir şekilde gönderilmiştir ..")
        },
        (error) => {
          console.log(error.text);
          alert("Mesajınız gönderilemedi..")
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact">
      <div className="contact-container">
        <form onSubmit={sendEmail}>
          <h5 className="contact-header">Contact</h5>
          <div className="form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="form-group mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Adress"
              name="email"
            />
          </div>
          <div className="form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="form-group mx-auto">
            <textarea
              className="text-area"
              id=""
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div className="form-group mx-auto">
            <input
              type="submit"
              className="btn btn-info form-control"
              name="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
