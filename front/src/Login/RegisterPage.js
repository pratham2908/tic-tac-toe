import Register from "./Register"
import { useEffect } from "react";
import { appendScript, disAppendScript } from "../appendScript";

const RegisterPage = () => {
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
        <div className="registerPage">
            <canvas className="loop-game" onClick={openModal}></canvas>
            <Register />
            <div className="modal">
                <div className="modal-content">
                    <header>
                        <img alt="app-logo"></img>
                        <span>TIC-TAC-TOE</span>
                        <span id="closeModalBtn" onClick={closeModal}>&times;</span>
                    </header>
                    <canvas></canvas>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage