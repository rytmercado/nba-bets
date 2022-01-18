import React, { useState, useEffect } from 'react';
import checkIcon from '../../images/check.svg'
// import checkIcon from '../../images/checked.png'

const Toast = (props) => {
    const { toastList, position } = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList(toastList);
    }, [toastList, list]);


    const deleteToast = id => {
        const index = list.findIndex(e => e.id === id);
        list.splice(index, 1);
        setList([...list]);
    }

    return(
        <>
        <div className={`notification-container ${position}`}>
            {
                list.map((toast, i) =>     
                    <div key={i} className={`notification toast ${position}`} style={{ backgroundColor: toast.backgroundColor }} >
                        <button onClick={() => deleteToast(toast.id)}>
                            x
                        </button>
                        <div className="notification-image">
                            {/* <img className="notification-img" src={toast.icon} alt="" /> */}
                            <img className="notification-img" src={checkIcon} alt="" />
                        </div>
                            <p className="notification-title">{toast.title}</p>
                            <p className="notification-message">{toast.description}</p>
                    </div>
                )
            }
        </div>
        </>
    )
}

export default Toast;