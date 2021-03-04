import React, {Fragment, useState, useEffect} from "react";
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

  const [ticker, setTicker] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

  // Input Suggestions
  useEffect(() => {
    setSuggestions([]);

    // Check if ticker empty for suggestion
    if (ticker.length > 0) {
      let regex = new RegExp(`^${ticker}`, 'i');
      let filteredOptions = tickerList.sort().filter(s => regex.test(s));

      if (filteredOptions.length > 10) {
        filteredOptions.length = 10;
      }

      setSuggestions(filteredOptions);
    }
    else {
      setSuggestions([]);
    }
  }, [ticker]);

  const changeHandler = e => {
    setTicker(e.target.value.toLowerCase());
  };

  // Bold Text
  const boldText = value => {
    if (value && ticker) {
      let textArray = value.split(ticker.toUpperCase());
      textArray = [textArray.shift(), textArray.join(ticker.toUpperCase())];
      return (
        <span>
          {
            textArray.length > 1 ? <b>{ticker.toUpperCase()}</b> : null
          }
          {
            textArray.length > 1 ? textArray[1] : null
          }
        </span>
      );
    }

    return null;
  };

  // Select Suggestion
  const selectSuggestion = value => {
    setTicker(value.toLowerCase());
    pushToTicker(value.toLowerCase());
  }

  // Redirect to Ticker
  const pushToTicker = ticker => {
    setSuggestions([]);
    path = "/stock/" + ticker + "/";
    history.push(path);
    toggler();
  };

  // Form Submit
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
            onChange={changeHandler}
            autoFocus={props.isActive}
          />
        </form>
        {
          suggestions.length > 0 ?
          <div className="flex">
            <div className="absolute w-full px-6">
              <ul className="flex flex-col overflow-y-auto bg-gray-darker border border-secondary rounded max-h-36">
                {
                  suggestions.map((item, i) => (<li key={i} className="flex p-3 w-full cursor-pointer hover:text-secondary" onClick={() => selectSuggestion(item)}>{boldText(item, ticker)}</li>))
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
