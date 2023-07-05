import React, { useState } from 'react';
import FloatingInput from '../utils/floatingInput';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    return (
        <div className="Page">
            <div className="container-busca">
                <form>
                    <div className="form-row">
                        <div className="input-cell">
                            <FloatingInput label="Local de retirada" id="inputLocal" type="text" autoComplete="off" />
                        </div>
                        <div className="input-cell">
                            <FloatingInput
                                label="Data de retirada"
                                type="datepicker"
                                selected={startDate}
                                onChange={handleStartDateChange}
                                minDate={new Date()}
                                maxDate={endDate}
                            />
                        </div>
                        <div className="input-cell">
                            <FloatingInput
                                label="Data de devolução"
                                type="datepicker"
                                selected={endDate}
                                onChange={handleEndDateChange}
                                minDate={startDate}
                                dayClassName={(date) => {
                                if (startDate && endDate) {
                                    if (date > startDate && date < endDate) {
                                    return 'between-dates';
                                    }
                                }
                                return '';
                                }}
                            />
                        </div>
                    </div>
                </form>
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