import React from "react";
import './header.css';
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

function Header () {

    const {user, onClose} = useTelegram();

    return (
        <div className="header">
            <Button onClick={onClose}>Закрыть</Button>
            <span className="username">
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
}

export default Header;