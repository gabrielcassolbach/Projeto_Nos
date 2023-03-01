import React from 'react';
import './App.css';
import Logo from './components/Logo'
import Last_Searchs from './components/Last_Searchs'
import Main_Title from './components/Main_Title'
import Searchs from './components/Searchs'
import Input_Button from './components/Input_Button';

export default function App() {
  return (
    <body className = "page">
      <Logo/> 
      <Last_Searchs/>
      <Main_Title/>
      <Searchs/>
      <Input_Button/>
    </body>
  );
}

