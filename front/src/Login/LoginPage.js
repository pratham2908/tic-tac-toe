import Login from "./Login";
import { useEffect } from "react";
import { appendScript, disAppendScript } from "../appendScript";

const LoginPage = () => {
    useEffect(() => {
        appendScript("./loopGame.js");
        appendScript('./formAnimation.js');
    }, [])

    function openModal() {
        appendScript('./modal.js');
        disAppendScript('./loopGame.js');
        const modal = document.querySelector('.modal');
        modal.classList.add('active');

    }

    function closeModal() {
        const modal = document.querySelector('.modal');
        modal.classList.remove('active');
        disAppendScript('./modal.js');
        appendScript('./loopGame.js');

    }

    return (
        <div className="loginPage">
            <canvas className="loop-game" onClick={openModal}></canvas>
            <Login />
            <div className="modal">
                <div className="modal-content">
                    <header>
                        <img></img>
                        <span>TIC-TAC-TOE</span>
                        <span id="closeModalBtn" onClick={closeModal}>&times;</span>
                    </header>
                    <canvas></canvas>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;