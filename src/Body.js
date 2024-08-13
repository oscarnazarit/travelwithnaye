import './App.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageModal from './ImageModal';
import { useState } from 'react';



function Body(){
    const [modalShow, setModalShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    return(
        <section>
            <Container>
                <Row className="greeting">
                    <h2 >Welcome</h2>
                    <p>This is a website dedicated to all of my trips. I have no plans of slowing down anytime soon, so join me and please feel free to contact me.</p>
                </Row>
                <Row className="country-header" style={{"border-style":"outset", "margin-right": "4rem", "background-color":"#C2DAB8", "border-radius":"5px", textAlign:"center"}}>
                    <h2 >Mexico pics</h2>
                </Row>
                <Row className="mexico">
                    <Col xs lg="auto">
                        <div className='flip-box' onClick={(e) => {
                            setSelectedImage("./images/Mexico/ColimaBeach.jpg"); 
                            setModalShow(true);
                            }}>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image"  src="./images/Mexico/ColimaBeach.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Beach</h3>
                                    <p>Colima beach </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="auto">
                    <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" onClick={() => {setModalShow(true); {setSelectedImage("./images/Mexico/ColimaBeach.jpg")}}} src="./images/Mexico/PlazaDeTecnologia.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Vendor</h3>
                                    <p>Outside vendor</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" onClick={() => {setModalShow(true); {setSelectedImage("./images/Mexico/ColimaBeach.jpg")}}} src="./images/Mexico/WeddingWineGlass.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Wedding</h3>
                                    <p>Wine glass</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                <Image className="body-image" onClick={() => {setModalShow(true); {setSelectedImage("./images/Mexico/ColimaBeach.jpg")}}} src="./images/Mexico/HorseOnBeach.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="country-header" style={{"border-style":"outset", "margin-right": "5rem", "background-color":"#FDE0E0", "border-radius":"5px", textAlign:"center"}}>
                    <h2 >Canada pics</h2>
                </Row>
                <Row className="canada">
                    
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" src="./images/CanadaNF&T/Shark.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" src="./images/CanadaNF&T/LittleCanada.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" src="./images/CanadaNF&T/LittlePetit.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" src="./images/CanadaNF&T/NiagaraFalls2.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3 className="image-header">Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                   
                </Row>
               
                <Row className="country-header" style={{"border-style":"outset", "margin-right": "4rem", "background-color":"#ADD8E6", "border-radius":"5px", textAlign:"center"}}>
                    <h2 >US pics</h2>
                </Row>
                <Row className="usa">
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" src="./images/FloridaD&M&kw/BeachDay.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" src="./images/FloridaD&M&kw/KeyWestBoats.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" src="./images/FloridaD&M&kw/PalmTreeSunset.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" src="./images/FloridaD&M&kw/WinterHavana.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3 className="image-header">Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
                <Row className="usa2">
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" src="./images/FloridaD&M&kw/BeachDay.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" src="./images/FloridaD&M&kw/KeyWestBoats.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" src="./images/FloridaD&M&kw/PalmTreeSunset.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs lg="auto">
                        <div className='flip-box'>
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <Image className="body-image" src="./images/FloridaD&M&kw/WinterHavana.jpg"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3 className="image-header">Beach</h3>
                                    <p>Horse</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            {selectedImage && <ImageModal
        show={modalShow}
        onHide={() => {
            setModalShow(false); 
            setSelectedImage();
        }}
        selectedImage = {selectedImage}
      />}
        </section>
    );
}

export default Body;