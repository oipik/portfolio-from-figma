import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../header/Header';
import Profile from '../profile/Profile';
import Nav from '../nav/Nav';
import About from '../content/about/About';
import Resume from '../content/resume/Resume';
import Portfolio from '../content/portfolio/Portfolio';
import Contact from '../content/contact/Contact';

import './app.scss';

function App() {

    return (
        <Router>
            <div className="wrapper">
                <div className="inner">
                    <Header />
                    <div className="content">
                        <Profile />
                        <div className="info">
                            <Nav />
                            <Routes>
                                <Route path="/" element={null} />
                                <Route path="about" element={<About />} />
                                <Route path="resume" element={<Resume />} />
                                <Route path="portfolio" element={<Portfolio />} />
                                <Route path="contacts" element={<Contact />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
