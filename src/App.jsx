import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes

} from 'react-router-dom'

import {
    Sidebar,
    TopShowStories,
    TopNewStories,
    TopBestStories,
    TopStories,
    TopJobStories
} from './components/Index'

const App = () => {
    return (
        <Router >
            <div className="app-container">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route path='/' element={<TopNewStories />} />
                        <Route path='/top-new-stories' element={<TopNewStories />} />
                        <Route path='/top-best-stories' element={<TopBestStories />} />
                        <Route path='/top-stories' element={<TopStories />} />
                        <Route path='/show-stories' element={<TopShowStories />} />
                        <Route path='/job-stories' element={<TopJobStories />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
