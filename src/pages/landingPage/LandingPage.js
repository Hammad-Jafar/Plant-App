import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${require('../../assets/Background.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
        >
            <div className="mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <h1 className='mt-3'>Welcome to Paradise Nursery</h1>
                        <h5 className='mt-3'>When green meets serinity</h5>
                        <Link className='mt-3' to="/product-listing">
                            <button className="btn1 mt-5">Get Started</button>
                        </Link>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-7">
                        <p style={{ fontSize: '1rem' }}>
                            We are a small family-owned nursery specializing in indoor plants.When green meets serinity!
                        </p>
                        <p style={{ fontSize: '1rem' }}>
                            You can buy as many plants as you intend. A plant nursery is a specialized facility dedicated to the propagation,
                            cultivation, and sale of plants, including trees, shrubs, flowers, and various other horticultural specimens.
                            These nurseries play a crucial role in gardening and landscaping by providing healthy and robust plants that are
                            essential for creating beautiful outdoor spaces. Typically, plant nurseries offer a wide variety of plants
                            suited for different climates and conditions, catering to both amateur gardeners and professional landscapers.
                        </p>
                        <p style={{ fontSize: '1rem' }}>
                            Many nurseries also provide expert advice on plant care, gardening techniques, and landscape design, making
                            them invaluable resources for anyone looking to enhance their green spaces. Additionally, nurseries often focus
                            on sustainable practices, promoting native plant species and eco-friendly gardening solutions to support
                            biodiversity and environmental health. Whether you're looking to add color to your garden or create a tranquil
                            indoor atmosphere, a visit to a local plant nursery can provide inspiration and access to a diverse selection
                            of plants tailored to your needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
