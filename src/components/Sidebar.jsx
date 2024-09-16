import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='logo'>
                <Link to="/">Daily News</Link>
            </div>
            <div className="sidebar-links-main">
                <div className="sidebar-links">
                    {/* <Link to="/">Home</Link> */}
                    <Link to="/top-new-stories">New Stories</Link>
                    <Link to="/top-stories">Top Stories</Link>
                    <Link to="/top-best-stories">Best Stories</Link>
                    <Link to="/show-stories">Show Stories</Link>
                    <Link to="/job-stories">Job Stories</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
