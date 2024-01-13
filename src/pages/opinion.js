import React, { useState }from "react";
import "./opinionStyle.css";
export function Opinion() {
    const [rating, setRating] = useState(null);
    const [message, setMessage] = useState("");

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = () => {
        // Tutaj możesz obsługiwać logikę przesyłania oceny na serwer itp.
        // Możesz również użyć stanu "rating" i "message" w dowolny inny sposób.

        // Resetowanie wartości po przesłaniu oceny
        setRating(null);
        setMessage("");
        alert("Dziękujemy za oddanie oceny!");
    };

    return (
        <div className="opinion-container">
            <h1>Czy podoba Ci się nasza nowa strona?</h1>
            <div>
                <input type="radio" id="fajna" name="rating" value="fajna" onChange={() => handleRatingChange("fajna")} checked={rating === "fajna"} />
                <label htmlFor="fajna">Jest bardzo fajna</label>
            </div>
            <div>
                <input type="radio" id="srednia" name="rating" value="srednia" onChange={() => handleRatingChange("srednia")} checked={rating === "srednia"} />
                <label htmlFor="srednia">Taka sobie</label>
            </div>
            <div>
                <input type="radio" id="niepodoba" name="rating" value="niepodoba" onChange={() => handleRatingChange("niepodoba")} checked={rating === "niepodoba"} />
                <label htmlFor="niepodoba">Nie podoba mi się</label>
            </div>
            <textarea placeholder="Dodaj komentarz..." value={message} onChange={handleMessageChange}></textarea>
            <button onClick={handleSubmit}>Prześlij opinię</button>
        </div>
    );
}

export default Opinion;