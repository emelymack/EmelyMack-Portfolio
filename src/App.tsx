import { useState, useEffect } from 'react';
import './App.scss';
import { Layout } from './components/Layout/Layout';
import { Content } from './components/Layout/Content';
import "aos/dist/aos.css";

import { setScrolling } from './redux/scrollingSlice';
import { useAppDispatch } from './hooks/hooks';

const AOS = require('aos');

function App() {
  // const [ isScrolling, setIsScrolling ] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    window.onscroll = () => dispatch(setScrolling());
    AOS.init({
    });
  }, []);

  return (
    
      <div className="App">
        <Layout children={<Content />} />
      </div>
  );
}

function scrolling() {
  
  
}

export default App;
