import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const University = ({ saved, setSaved }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const university = location.state.university;
  const { name, url, description } = university;

  const save = () => {
    setSaved((saved) => [...saved, university]);
    window.localStorage.setItem("saved", JSON.stringify(saved));
    navigate("/saved");
  };
  // unsave
  const unsave = () => {
    setSaved((saved) => saved.filter((university) => university.name !== name));
    window.localStorage.setItem("saved", JSON.stringify(saved));
    navigate("/saved");
  };
  return (
    <div>
      <Container className="university__container">
        <Row>
          <Col>
            <h1 className="university__container__title">{name}</h1>
            <p className="university__container__description">{description}</p>

            <div className="university__container__buttons">
              <button
                className="btn btn-primary university__button"
                onClick={save}
              >
                Save
              </button>
              {saved.find(
                (savedUniversity) => savedUniversity.name === university.name,
              ) && (
                <button
                  className="btn btn-primary university__button"
                  onClick={unsave}
                >
                  Unsave
                </button>
              )}
            </div>
          </Col>
          <Col>
            <div className="university__container__wrapper">
              <img
                className="university__container__wrapper__image"
                src={url}
                alt={name}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default University;
