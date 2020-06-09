import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from "./components/App";
import "./css/style.css";

render(<StorePicker />, document.querySelector("#main"));



// the render method takes two things: first some jsx which is sort of like html 
// second:  render method needs a mounting point, i need to give an actual DOM element in order to mount to the page. 
// document.querySelector or document.getElementById,  is the DOM ELEMENT , I passed id #main 
// render(<p>Heyyyy</p>), document.querySelector('#main');



