import React, { useState }from "react";
import "./opinionStyle.css";
import { toast } from "react-toastify";
import { toastConstant } from '../Constants';
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
    
        setRating(null);
        setMessage("");
        toast.success("Dziękujemy za oddanie oceny!",toastConstant );
    };

    return (
        <div className="opinion-container-custom">
            <h1 className="opinion-header">Czy podoba Ci się nasza nowa strona?</h1>
            <div className="opinion-option">
                <input type="radio" id="fajna" name="rating" value="fajna" onChange={() => handleRatingChange("fajna")} checked={rating === "fajna"} className="opinion-radio" />
                <label htmlFor="fajna" className="opinion-label">Doskonale się prezentuje.</label>
            </div>
            <div className="opinion-option">
                <input type="radio" id="srednia" name="rating" value="srednia" onChange={() => handleRatingChange("srednia")} checked={rating === "srednia"} className="opinion-radio" />
                <label htmlFor="srednia" className="opinion-label">Może być lepsza.</label>
            </div>
            <div className="opinion-option">
                <input type="radio" id="niepodoba" name="rating" value="niepodoba" onChange={() => handleRatingChange("niepodoba")} checked={rating === "niepodoba"} className="opinion-radio" />
                <label htmlFor="niepodoba" className="opinion-label">Nie spełnia moich oczekiwań.</label>
            </div>
            <textarea placeholder="Dodaj komentarz..." value={message} onChange={handleMessageChange} className="opinion-textarea"></textarea>
            <button onClick={handleSubmit} className="opinion-button">Prześlij opinię</button>
        </div>
    );
}

export default Opinion;