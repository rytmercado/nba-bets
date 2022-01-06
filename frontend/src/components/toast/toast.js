import React from 'react';

const Toast = () => {
    return(
        <div className="notification-container">
            <button>X</button>
            <div className="notification-image">
                <img src="" alt=""></img>
            </div>
            <div>
                <p className="notification-title">Title</p>
                <p className="notification-message">Message</p>
            </div>
        </div>
    )
}

export default Toast;