import React from "react";

const SubmissionForm = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="hassan@hacker.com"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="ألحقنووووي"
          ></textarea>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;
