import React from "react";
const Footer = () => {
  return (
    <footer className="p-3  text-center position-relative">
      <div className="container">
        <ul className="contact-list text-center list-group list-group-flush lead">
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
        <p className="lead">Copyright &copy; 2021 </p>
        <a href="#" class="position-absolute bottom-0 end-0 p-5">
          <i className="arrow-up bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
