import React from "react";
import Button from "./components/Button/Button"
import './header.css';

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