import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { options, serviceId, templateID } from "../../../options";
import ConfirmationModal from "../Elements/ConfirmationModal";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [mailConfirmation, setMailConfirmation] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateID, e.target, options).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    
    setMailConfirmation(true);   
  }

  return (
    <Wrapper id="contact">
      <ContactBox className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Contact me</h1>
            <p className="font13">
              If you are interested hiring me you can contact me directly
              filling the form below.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form onSubmit={handleSubmit} id="contactForm">
                <label className="font13">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font20 extraBold"
                  required
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="font20 extraBold"
                  required
                />
                <label className="font13">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font20 extraBold"
                  required
                />
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                  required
                />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput
                  form="contactForm"
                  type="submit"
                  value="Send Message"
                  className="pointer animate radius8"
                  style={{ maxWidth: "220px" }}
                />
              </SumbitWrapper>
              <ConfirmationModal mailConfirmation={mailConfirmation}/>
            </div>
          </div>
        </div>
      </ContactBox>
    </Wrapper>
  );
}

const ContactBox = styled.div`
  display: flex;
  flex-direction: center;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
