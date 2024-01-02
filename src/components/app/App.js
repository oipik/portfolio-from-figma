
import Header from '../header/Header';
import Profile from '../profile/Profile';

import './app.scss';

function App() {
    return (
        <div className="wrapper">
            <div className="portfolio">
                <Header />
                <Profile />
            </div>
        </div>
    );
}

export default App;
