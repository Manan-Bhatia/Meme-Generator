import React from "react";

export default function Form() {
    return (
        <div className = "form-section">
            <form className="form">
                <span className = "form-inputs">
                    <input type="text" placeholder = "Top Text" className = "input"/>
                    <input type="text"  placeholder = "Bottom Text" className = "input"/>
                </span>
                <button className="form-btn">Get me a new image!</button>
            </form>
        </div>
    );
}
