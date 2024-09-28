// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/sidebar.css';

// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleMenuToggle = (e) => {
//         setIsOpen(!isOpen);
//     }


//     return (
//         <div className={`sidebar ${isOpen ? 'show' : ''}`}>
//             <div className={`logo ${isOpen ? 'burgerLogo' : ''}`}>
//                 <Link to="/">Daily News</Link>
//             </div>
//             <div className={`sidebar-links-main`}>
//                 <div className="sidebar-links">
//                     <Link to="/top-new-stories" onClick={handleMenuToggle}>New Stories</Link>
//                     <Link to="/top-stories" onClick={handleMenuToggle}>Top Stories</Link>
//                     <Link to="/top-best-stories" onClick={handleMenuToggle}>Best Stories</Link>
//                     <Link to="/show-stories" onClick={handleMenuToggle}>Show Stories</Link>
//                     <Link to="/job-stories" onClick={handleMenuToggle}>Job Stories</Link>
//                 </div>
//                 <div className={`hamburgerBtn ${isOpen ? 'show' : ''}`} onClick={handleMenuToggle}>
//                     <span className='bar1 bar'></span>
//                     <span className='bar2 bar'></span>
//                     <span className='bar3 bar'></span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = (e) => {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = () => {
        setIsOpen(false);
    }

    return (
        <div className={`sidebar-main-div ${isOpen ? 'show' : ''}`}>
            <div className={`hamburgerBtn ${isOpen ? 'show' : ''}`} onClick={handleMenuToggle}>
                <span className='bar1 bar'></span>
                <span className='bar2 bar'></span>
                <span className='bar3 bar'></span>
            </div>

            <div className={`logo`}>
                <Link to="/">Daily News</Link>
            </div>
            {/* <div className={`logo ${isOpen ? 'burgerLogo' : ''}`}>
                <Link to="/">Daily News</Link>
            </div> */}
            <div className={`sidebar ${isOpen ? 'show' : ''}`}>

                <div className={`sidebar-links-main`}>
                    <div className="sidebar-links">
                        <Link to="/top-new-stories" onClick={handleLinkClick}>New Stories</Link>
                        <Link to="/top-stories" onClick={handleLinkClick}>Top Stories</Link>
                        <Link to="/top-best-stories" onClick={handleLinkClick}>Best Stories</Link>
                        <Link to="/show-stories" onClick={handleLinkClick}>Show Stories</Link>
                        <Link to="/job-stories" onClick={handleLinkClick}>Job Stories</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
