import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import nfts from './nfts'


function backend() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<nfts />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default backend