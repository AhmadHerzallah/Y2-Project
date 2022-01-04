import React from "react";
import SubmissionForm from "../Components/SubmissionForm";
import { Container } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div>
      <Container>
        <h1>أعطينا مكالمة يا كبير</h1>
        <SubmissionForm />
      </Container>
    </div>
  );
};

export default ContactUs;
