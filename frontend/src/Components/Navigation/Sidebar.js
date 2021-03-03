import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";

// Import icons
import {IoCloseOutline} from "react-icons/io5";

// Import components
import StringField from "../Form/StringField";

// Import data
import tickerList from "../../Assets/tickers.json";

const Sidebar = props => {
  let activeStyle = props.isActive ? " active" : "";
  let path = "";
  let toggler = props.sidebarToggler;
  let regex;

  const [ticker, setTicker] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

  // Input Uppercase
  const inputSuggestion = e => {
    regex = new RegExp(`^${ticker}`, 'i');
    setSuggestions(tickerList.sort().filter(s => regex.test(s[0])));

    // Check if ticker empty for suggestion
    if (ticker.length === 0) {
      setSuggestions([]);
    }
  };

  // Bold Text
  const boldText = value => {
    const textArray = value.split(ticker);
    return (
      <span>
        {textArray.map((item, index) => (
          <>
            {item}
            {index !== textArray.length - 1 && (
              <b>{ticker}</b>
            )}
          </>
        ))};
      </span>
    );
  };

  // Select Suggestion
  const selectSuggestion = value => {
    setTicker(value.toLowerCase());
    setSuggestions([]);
    pushToTicker(value.toLowerCase());
  }

  // Redirect to Ticker
  const changeHandler = e => {
    setTicker(e.target.value.toLowerCase());
  };

  const pushToTicker = ticker => {
    path = "/stock/" + ticker + "/";
    history.push(path);
    toggler();
    setSuggestions([]);
  };

  const submitHandler = e => {
    e.preventDefault();
    pushToTicker(ticker);
  };

  return (
    <Fragment>
      <div className={"overlay" + activeStyle} onClick={toggler}></div>
      <nav className={"sidebar" + activeStyle}>
        <div className="flex flex-row items-center justify-end p-6">
          <button className="btn btn-link" onClick={toggler}>
            <IoCloseOutline className="icon" />
          </button>
        </div>
        <form onSubmit={submitHandler} className="flex p-6">
          <StringField
            id="ticker"
            label="Ticker"
            type="text"
            placeholder="TSLA"
            value={ticker.toUpperCase()}
            onKeyUp={inputSuggestion}
            onChange={changeHandler}
            autoFocus={props.isActive}
          />
        </form>
        {
          suggestions.length !== 0 ?
          <div className="flex">
            <div className="absolute w-full px-6">
              <ul className="flex flex-col overflow-y-auto bg-gray-darker border border-secondary rounded max-h-36">
                {
                  suggestions.map((item, i) => (<li key={i} className="flex p-3 w-full cursor-pointer hover:text-secondary" onClick={() => selectSuggestion(item[0])}>{boldText(item[0])}</li>))
                }
              </ul>
            </div>
          </div> :
          null
        }
      </nav>
    </Fragment>
  );
};

Sidebar.propTypes = {
  isActive: PropTypes.bool,
  sidebarToggler: PropTypes.func.isRequired
};

export default Sidebar;
