import logo from '../assets/img/logo.png';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    HOME
                </h1>
                <p>
                    Edite: <code>src/pages/Home.js</code>
                </p>
            </header>
        </div>
    );
}

export default Home;