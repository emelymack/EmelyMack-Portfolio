import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Layout } from './components/Layout';
import { Content } from './components/Content';
import "aos/dist/aos.css";
import {Provider} from "react-redux";
import store from './redux/store';

const AOS = require('aos');

function App() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Layout children={<Content />} />
      </div>
    </Provider>
  );
}

export default App;
