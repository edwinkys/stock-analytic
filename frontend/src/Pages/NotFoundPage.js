import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

// Import static
import NotFoundImage from "../Assets/404.png";

const NotFoundPage = props => {
  let message;
  const history = useHistory();

  if (props.message) {
    message = props.message;
  }
  else {
    message = "Oops! We can't find what you are looking for. We will bring you home."
  }

  // Redirect
  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/");
    }, 7000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="container wrapper flex flex-col justify-center items-center min-h-screen min-w-full text-center">
      <img 
        src={NotFoundImage}
        className="w-60 mb-6"
        alt="Page Not Found"
      />
      <span className="text-lg">{message}</span>
    </div>
  );
};

NotFoundPage.propTypes = {
  message: PropTypes.string
}

export default NotFoundPage;
