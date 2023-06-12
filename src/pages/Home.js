import { Link } from 'react-router-dom';
import '../styles/pages/home.css'

function Home() {
    return (
        <div className="Page">
            <div className="container-busca" style={{display: 'none'}}>
                <div className="busca">
                    <form>
                        <label for='dtAluguel'>Data:</label>
                        <input type='date' placeholder='Data' id='dtAluguel'/><br/>
                        <label for='dtRetorno'>Retorno:</label>
                        <input type='date' id='dtRetorno'/>
                    </form>
                </div>
            </div>
            
            <div className="carousel">
                <h1>
                    <Link to="/cadastro">CAROUSEL</Link>
                </h1>
            </div>
            
        </div>
    );
}

export default Home;