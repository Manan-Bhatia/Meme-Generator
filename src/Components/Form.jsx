import React from "react";
import { useState, useEffect } from "react";

export default function Form() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imageURL: "http://i.imgflip.com/1bij.jpg",
    });

    const [memeData, setMemeData] = useState([]); //Meme from API

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes") //API Call
            .then((res) => res.json())
            .then((data) => setMemeData(data.data.memes));
    }, []);

    function getRandomImage() {
        const randomNumber = Math.floor(Math.random() * memeData.length);
        const url = memeData[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            imageURL: url,
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    return (
        <section>
            <div className="form-section">
                <div className="form">
                    <span className="form-inputs">
                        <input
                            type="text"
                            placeholder="Top Text"
                            className="input"
                            name="topText"
                            value={meme.topText}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Bottom Text"
                            className="input"
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={handleChange}
                        />
                    </span>
                    <button className="form-btn" onClick={getRandomImage}>
                        Get me a new image!
                    </button>
                </div>
                <div className="meme">
                    <img src={meme.imageURL} className="meme-image" />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </section>
    );
}
