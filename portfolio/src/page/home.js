import logo from '../image/72ppi/logo.png'
import facebook from '../image/facebook-brands.svg'
import instagram from '../image/instagram-brands.svg'
import pinterest from '../image/pinterest-brands.svg'
import test from '../image/box.png'
import { Carousel } from 'react-bootstrap'

function Home() {
    return (
        <div className="d-flex flex-column">
            {/* about me */}
            
                <img className="img-fluid mw-100 position-relative" alt="main_image" src={test}></img>
                <div className="container d-flex flex-column justify-content-start align-items-center text-left mw-50 position-absolute">
                    <h1 className="font-weight-bold">Siriporn</h1>
                    <h1 className="font-weight-bold">Jongjit</h1>
                    <p>I’m a multimedia and game development student. I’m passionate about building usable, visually captivating multimedia.</p>
                    <p> I have been involved in all aspects of the development process, from ideation, design, software engineering, project management, to delivery.</p>
                    <div className="d-flex">
                        <img className="icon pr-2" src={facebook} href="https://www.facebook.com/srpkwan" alt="facebook"></img>
                        <img className="icon pr-2" src={instagram} href="https://www.instagram.com/aprilfoolk/" alt="instagram"></img>
                        <img className="icon pr-2" src={pinterest} href="https://www.pinterest.com/srpkwan/" alt="pinterest"></img>
                    </div>
                </div>
            
            {/* carousel */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Home;