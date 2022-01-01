import React from "react";
const Footer = () => {
  return (
    <footer className="p-0 position-relative ">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center contact-info ">Contact Info</h2>
            <ul className="contact-list text-center list-group list-group-flush lead">
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
          <a href="#" class="text-center arrow bottom-0 end-0 py-2">
            <i className="arrow-up bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
