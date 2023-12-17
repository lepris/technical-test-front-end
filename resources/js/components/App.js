import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WindFarms from './WindFarms';

const App = () => (
    <Router>
        <Routes>
            <Route
                exact
                path="/wind-farms/*"
                element={<WindFarms />}
            />

        </Routes>
    </Router>
);

export default App;
