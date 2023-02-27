import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x1hewh5",
        "template_2ki8hlo",
        form.current,
        "vxDcl4UI2jbOQBn6f"
      )
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Ponerse en contacto</h2>
      <span className="section__subtitle">Contactarme</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          {/* <h3 className="contact__title">Talk to me</h3> */}

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Correo</h3>
              <span className="contact__card-data">hernanjavierrinaldi@gmail.com</span>

              <a
                href="mailto:hernanjavierrinaldi@gmail.com"
                className="contact__button"
                target='_blank'
              >
                Escribime{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+ 54 1136256570</span>

              <a
                href="https://api.whatsapp.com/send?phone=00541136256570&text=Hello, this is Hernan Rinaldi's whatsapp!"
                className="contact__button"
                target='_blank'
              >
                Escribime{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

          </div>
        </div>

        <div className="contact__content">

        </div>
      </div>
    </section>
  );
};

export default Contact;
