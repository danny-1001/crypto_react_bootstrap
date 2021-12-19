import React from "react";
const Footer = () => {
  return (
    <footer className="p-0 text-center position-relative">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center ">Contact Info</h2>
            <ul className="contact-list list-group list-group-flush lead">
              <li className="list-item">
                <span className="fw-bold">Github: </span>{" "}
                <a
                  href="https://github.com/danny-1001"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  danny-1001
                </a>
              </li>
              <li className="list-item">
                <span className="fw-bold">Linkedin: </span>{" "}
                <a
                  href="https://linkedin.com/in/danny-aviles-a1730a178"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Danny Aviles
                </a>
              </li>
              <li className="list-item">
                <span className="fw-bold">Email:</span> danielaviles@gmail.com
              </li>
            </ul>
          </div>
          <p className="lead">Copyright &copy; 2021 CryptoWatcher </p>
          <a href="#" class=" arrow bottom-0 end-0 p-5">
            <i className="arrow_up bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
