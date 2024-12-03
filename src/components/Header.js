import React from "react";
import Button from "./components/Button"

const Header = () => {
    const tg = window.Telegram.WebApp;

    const onClose = () => {
        tg.close()
    }

    return (
        <div>
            <Button onClick={onClose}>Закрыть</Button>
            <span className="username">
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
}