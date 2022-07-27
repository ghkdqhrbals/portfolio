import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/portfolio.json';
import Modal from './Modal/Modal'
const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [modalOpen, setModalOpen] = useState(false);
    const [listOfImages, setlistOfImages] = useState([]);
    const [portTitle, setPortTitle] = useState('')

    const openModal = () => {
        setModalOpen(true);
        return true
    };
    const closeModal = () => {
        setModalOpen(false);
        return false
    };

    console.log(portfolioData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const setList = (lists) => {
        setlistOfImages(lists)
        return true
    }



    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                    src={port.cover}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => port.openModalFlag ? (openModal() && setList(port.images) && setPortTitle(port.title)) : window.open(port.url)}
                                    >{port.btntext}</button>
                                </div>
                            </div>
                        )
                    })

                }

                {
                    modalOpen && < Modal open={openModal} close={closeModal} images={listOfImages} header={portTitle} />
                }
            </div >
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={5}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;