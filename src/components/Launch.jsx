import "../App.css";
import { useState } from "react";

const Center = () => {
    console.log("Mon composant App se render");

    // Je créer un state (une variable) nommée counter, sa valeur initiale est de 0 et la fonction qui permet de le faire changer de valeur en provoquant en un rerender du composant s'appelle setCounter
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);
    const [switch3, setSwitch3] = useState(false);

    return (
        <div className="container">
            <nav>
                <div>
                    <button
                        onClick={() => {
                        setSwitch1(!switch1);
                        }}
                        style={switch1 === true ? {backgroundColor: "#5C48D3", color: 'white'} : {backgroundColor: "white", color: '#5C48D3'}}
                    >on</button>
                    <button
                        onClick={() => {
                        setSwitch1(!switch1);
                        }}
                        style={switch1 === false ? {backgroundColor: "#5C48D3", color: 'white'} : {backgroundColor: "white", color: '#5C48D3'}}
                    >off</button>
                </div>

                <div>
                    <button
                        onClick={() => {
                        setSwitch2(!switch2);
                        }}
                        style={switch2 === true ? {backgroundColor: "#5C48D3", color: 'white'} : {backgroundColor: "white", color: '#5C48D3'}}
                    >on</button>
                    <button
                        onClick={() => {
                        setSwitch2(!switch2);
                        }}
                        style={switch2 === false ? {backgroundColor: "#5C48D3", color: 'white'} : {backgroundColor: "white", color: '#5C48D3'}}
                    >off</button>
                </div>

                <div>
                    <button
                        onClick={() => {
                        setSwitch3(!switch3);
                        }}
                        style={switch3 === true ? {backgroundColor: "#5C48D3", color: 'white'} : {backgroundColor: "white", color: '#5C48D3'}}
                    >on</button>
                    <button
                        onClick={() => {
                        setSwitch3(!switch3);
                        }}
                        style={switch3 === false ? {backgroundColor: "#5C48D3", color: 'white'} : {backgroundColor: "white", color: '#5C48D3'}}
                    >off</button>
                </div>
            </nav>

            <p className={switch1 === true && switch2 === true && switch3 === true ? "clear" : "fail"}>{switch1 === true && switch2 === true && switch3 === true ? "Go !" : "No way !"}</p>
        </div>
    );
}

export default Center