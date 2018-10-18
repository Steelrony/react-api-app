import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import AddTodo from './AddTodo';
// import Clock from './Clock';
// import Lists from './Lists';
// import NameForm from './NameFom';
import Reservation from './Reservation'
ReactDOM.render(<Reservation />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
