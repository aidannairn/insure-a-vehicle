import React from "react";
import PhoneIco from "../../images/Phone.png";
import MailIco from "../../images/Mail.png";
import './Question.css';

interface QuestionProps {}

export const Question: React.FC<QuestionProps> = ({}) => {
  return (
    <div className="question-container">
      <div className="question-text">
        <h1>Do you have a question?</h1>
        <p>
          Check out our Frequently Asked Questions page or simply get in touch
          with us.
        </p>
      </div>
      <div className="contact-us">
        <img src={PhoneIco} />
        <img src={MailIco} />
      </div>
    </div>
  );
};
