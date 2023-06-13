import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/pages/home.css'

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="Page">
            <div className="container-busca" style={{ display: 'none' }}>
                <div className="busca">
                    <form>
                        <label for='dtAluguel'>Data:</label>
                        <input type='date' placeholder='Data' id='dtAluguel' /><br />
                        <label for='dtRetorno'>Retorno:</label>
                        <input type='date' id='dtRetorno' />
                    </form>
                </div>
            </div>

            <div className="carousel">
                <Slider {...settings}>
                    <div>
                        <h1>Slide 1</h1>
                    </div>
                    <div>
                        <h1>Slide 2</h1>
                    </div>
                    <div>
                        <h1>Slide 3</h1>
                    </div>
                </Slider>
            </div>

            <div className="Home-content">
                <div className="grid">
                </div>
            </div>
        </div>
    );
}

export default Home;