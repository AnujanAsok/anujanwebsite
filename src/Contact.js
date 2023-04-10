import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import "./styles.css";
import Layout from "./Layout";

const Contact = () => {
  const [state, handleSubmit] = useForm("xknapjvk");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    setIsSubmitted(true);
  };

  if (state.succeeded) {
    return (
      <Layout>
        <div className="contact-container">
          <p className="submission-message">Thank you for your submission!</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="contact-container">
        {isSubmitted ? (
          <p>Submitting form...</p>
        ) : (
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default Contact;
