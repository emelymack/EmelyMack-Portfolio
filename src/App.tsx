import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Layout } from './components/Layout';
import { Content } from './components/Content';
import "aos/dist/aos.css";

const AOS = require('aos');

function App() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className="App">
      <Layout children={<Content />} />
    </div>
  );
}

export default App;
