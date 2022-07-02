import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [
    <li>Bob Dust</li>,
    <li>Fredy Mercury</li>,
    <li>Shazam Nikola</li>,
    <li>Wilibin Walabam</li>
];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
