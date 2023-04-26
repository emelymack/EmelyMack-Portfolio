import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Content } from './components/Content';

function App() {
  return (
    <div className="App">
      <Layout children={<Content />} />
    </div>
  );
}

export default App;
