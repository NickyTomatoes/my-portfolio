import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImgTwo from "../Components/HeroImgTwo";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImgTwo heading="Contact" text="Want to work together?" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
