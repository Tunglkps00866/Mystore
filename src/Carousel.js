import React from 'react';
import {Carousel} from 'react-bootstrap';

class Slider extends React.Component{
    render(){
        return(
            <Carousel>
                    <Carousel.Item>
                        <img width={2000} height={500} alt="900x500" src="image/h4.jpg" />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={2000} height={500} alt="900x500" src="image/h2.jpg" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={2000} height={500} alt="900x500" src="image/h3.jpg" />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        );
    }
}
export default Slider;