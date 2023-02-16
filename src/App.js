import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import {GlobalProvider}  from './context/GlobalState';

export default function App() {
  return (
    <GlobalProvider>
        <Header/>
        <Main/>
    </GlobalProvider>
  )
}
