import React from 'react'
import './App.css';
import Quote from './components/Quote';
import quotes from './Quote.json'
import { useState } from 'react';


const App = () => {

  const myJson = JSON.parse(JSON.stringify(quotes));

  return (
    <body style={{backgroundColor: "blue"}}>
    <div style={{backgroundColor: "blue"}}>
      <Quote myQuotes={myJson}/>
    </div>
    </body>);
}

export default App;
