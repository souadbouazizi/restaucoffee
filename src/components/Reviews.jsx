import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import './Reviews.css';
import Person1 from '../user/img/clt1.png';
import Person2 from '../user/img/clt2.png';
import Person3 from '../user/img/clt3.png';
import Person4 from '../user/img/clt4.png';

const TextWithStars = ({ rating }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<FaStar key={i} color="#FFD700" />); // Étoile pleine
        }
        return stars;
    };

    return <span>{renderStars(rating)}</span>;
};

export function Reviews() {
    return (
        <div className='container'>
            <h2 className='text-center mb-5 fw-bold'>Reviews</h2>
            <div className='scroll-container'> {/* Ajout du conteneur scroll */}
                <div className='scroll-content row'>
                    <div className='col-lg-6'>
                        <Card className='h-100 shadow'>
                            <CardBody>
                                <div className='p-4'>
                                    <CardText>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi illo repellendus veniam earum non autem a dolores.</p>
                                        <TextWithStars rating={5} />
                                    </CardText>
                                </div>
                            </CardBody>
                            <CardFooter className="d-flex align-items-center justify-content-around">
                                <img src={Person1} className='img-fluid rounded-circle mx-3 shadow' alt='client' />
                                <CardTitle className="text-warning fw-bold">Ciline Ali</CardTitle>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className='col-lg-6'>
                        <Card className='h-100 shadow'>
                            <CardBody>
                                <div className='p-4'>
                                    <CardText>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi illo repellendus veniam earum non autem a dolores.</p>
                                        <TextWithStars rating={5} />
                                    </CardText>
                                </div>
                            </CardBody>
                            <CardFooter className="d-flex align-items-center justify-content-around">
                                <img src={Person2} className='img-fluid rounded-circle mx-3 shadow' alt='client' />
                                <CardTitle className="text-warning fw-bold">Sami Ben Ahmed</CardTitle>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className='col-lg-6'>
                        <Card className='h-100 shadow'>
                            <CardBody>
                                <div className='p-4'>
                                    <CardText>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi illo repellendus veniam earum non autem a dolores.</p>
                                        <TextWithStars rating={5} />
                                    </CardText>
                                </div>
                            </CardBody>
                            <CardFooter className="d-flex align-items-center justify-content-around">
                                <img src={Person3} className='img-fluid rounded-circle mx-3 shadow' alt='client' />
                                <CardTitle className="text-warning fw-bold">Sana Taher</CardTitle>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className='col-lg-6'>
                        <Card className='h-100 shadow'>
                            <CardBody>
                                <div className='p-4'>
                                    <CardText>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi illo repellendus veniam earum non autem a dolores.</p>
                                        <TextWithStars rating={5} />
                                    </CardText>
                                </div>
                            </CardBody>
                            <CardFooter className="d-flex align-items-center justify-content-around">
                                <img src={Person4} className='img-fluid rounded-circle mx-3 shadow' alt='client' />
                                <CardTitle className="text-warning fw-bold">Ahmed Salih</CardTitle>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
