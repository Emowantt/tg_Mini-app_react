import React from "react";
import './header.css';
import Button from "../Button/Button";

function Header () {

    const onClose = () => {
        tg.close()
    }

    return (
        <div>
            <Button onClick={onClose}>Закрыть</Button>
            <span className="username"></span>
        </div>
    )
}

export default Header;