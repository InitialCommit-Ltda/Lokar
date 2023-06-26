import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/pages/home.css'
import slide1 from '../assets/img/cars/onix-plus-premier-at-turbo.png'
import slide2 from '../assets/img/cars/corolla xei.png'

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
                        <label htmlFor='dtAluguel'>Data:</label>
                        <input type='date' placeholder='Data' id='dtAluguel' /><br />
                        <label htmlFor='dtRetorno'>Retorno:</label>
                        <input type='date' id='dtRetorno' />
                    </form>
                </div>
            </div>

            <div className="carousel">
                <Slider {...settings}>
                    <div className='slides'>
                        <img src={slide1} alt="slide1" />
                    </div>
                    <div className='slides'>
                        <img src={slide2} alt="slide2" />
                    </div>
                    <div className='slides'>
                        <img src={slide2} alt="slide3" />
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