import React from "react";

import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Socials from "../components/Socials";
import BtnsBot from "../components/BtnsBot";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  const variants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <motion.div
        exit="out"
        animate="in"
        initial="out"
        variants={variants}
        transition={transition}
        className="contact"
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue du code </p>
              <p>34000 Montpellier</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>téléphone </h4>
              <CopyToClipboard text="0638148201" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié!");
                  }}
                >
                  0638148201
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="y.beneito@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("email copié!");
                  }}
                >
                  y.beneito@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <Socials />
          <div className="credits">
            <p>YBeneito 2021</p>
          </div>
        </div>
        <BtnsBot left={"/project-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
