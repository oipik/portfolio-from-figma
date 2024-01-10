
import Header from '../header/Header';
import Profile from '../profile/Profile';
import Nav from '../nav/Nav';
// import About from '../content/about/About';
import Resume from '../content/resume/Resume';
import Portfolio from '../content/portfolio/Portfolio';

import './app.scss';

function App() {
    return (
        <div className="wrapper">
            <div className="inner">
                <Header />
                <div className="content">
                    <Profile />
                    <div className="info">
                        <Nav />
                        {/* <About/> */}
                        {/* <Resume /> */}
                        <Portfolio />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
