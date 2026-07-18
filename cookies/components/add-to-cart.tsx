"use client";
import { useState } from "react";

export function AddToCart() {
    const [quantity, setQuantity] = useState<number>(1);
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);

        if (!isNaN(value) && value >= 1) {
            setQuantity(value);
        }
    };
    return(
        <div>
            <input
                type="number"
                min="1"
                max="99"
                step="1"
                onChange={handleQuantityChange}
            />  
            <button onClick={() => alert("Added to cart!")}>
                Add to Cart
            </button>
        </div>

    )
  
}