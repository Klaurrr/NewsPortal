import React from "react";

import EgorImg from 'assets/img/я.jpg'

import routeMain from "./routes";

import "./styles.scss"

const Contacts = () => (
    <section className="contacts">
        <div className="info">
            <div className="phone">
                <a href="tel:89040455531">8 904 04 555 31</a>
            </div>
            <div className="name">
                Егор <br/> Усачев
            </div>
            <div className="mail">
                <a href="mailto:usachev-85@yandex.ru">usachev-85@yandex.ru</a>
            </div>
            <div className="position">
                FrontEnd Developer
            </div>
            <div className="technologies">
                HTML, CSS, JS, REACT
            </div>
        </div>
        <div className="image">
            <img src={EgorImg} alt={EgorImg}/>
        </div>
    </section>
)

 

export {routeMain}

export default Contacts;