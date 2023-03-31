import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './ui/Layout';

import Home from './pages/Home';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';
import PageNotFound from './pages/PageNotFound';

import './App.css';

function App() {
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/movies/:id' element={<SingleMovie />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>
        </Routes>
    </>;
}

export default App;
