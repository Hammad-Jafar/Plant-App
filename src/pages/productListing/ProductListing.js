import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Card } from '../../components/Card';
import plants from '../../components/Data';
import './ProductListing.css';

export const ProductListing = () => {
    const airPurifyingPlants = plants.slice(0, 6);
    const aromaticFragrantPlants = plants.slice(6, 12);

    return (
        <div className="background">
            <Navbar />
            <div className="d-flex justify-content-center mt-1">
                <h1>Air Purifying Plants</h1>
            </div>
            <div className='cards-style'>
                <div className='d-flex justify-content-around flex-wrap'>
                    {airPurifyingPlants.map((plant, index) => {
                        return (
                            <Card
                                key={index}
                                title={plant.title}
                                imgUrl={plant.imgUrl}
                                description={plant.description}
                                price={plant.price}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="d-flex justify-content-center mt-1">
                <h1>Aromatic Fragrant Plants</h1>
            </div>
            <div className='cards-style'>
                <div className='d-flex justify-content-around flex-wrap'>
                    {aromaticFragrantPlants.map((plant, index) => {
                        return (
                            <Card
                                key={index}
                                title={plant.title}
                                imgUrl={plant.imgUrl}
                                description={plant.description}
                                price={plant.price}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
