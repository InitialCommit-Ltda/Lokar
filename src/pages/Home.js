import '../styles/pages.css'

function Home() {
    return (
        <div className="Page">
            <div className="container-busca">
                <div className="busca">
                    <form>
                        <input type='date' placeholder='Data'>
                        </input>
                    </form>
                </div>
            </div>
            
            <div className="carousel">
                <h1>
                    CAROUSEL
                </h1>
            </div>
            
        </div>
    );
}

export default Home;