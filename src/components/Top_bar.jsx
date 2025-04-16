import React, { useState } from 'react';

function Top_bar() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="top-bar">
            <div>
            
            </div>
            <span className="font-medium">🎉 Special Offer: Get 20% off on all courses! Limited time only.</span>
            <button
                onClick={() => setVisible(false)}
                className="closebtn"
            >
                &times;
            </button>
        </div>
    );
}

export default Top_bar;
