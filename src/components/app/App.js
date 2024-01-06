
import Header from '../header/Header';
import Profile from '../profile/Profile';
import Nav from '../nav/Nav';
// import About from '../content/about/About';
import Resume from '../content/resume/Resume';

import './app.scss';

function App() {
    return (
        <div className="wrapper">
            <div className="portfolio">
                <Header />
                <div className="content">
                    <Profile />
                    <div className="info">
                        <Nav />
                        {/* <About/> */}
                        <Resume />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
