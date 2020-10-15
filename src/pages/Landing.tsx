import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import logoimg from '../images/Logo.svg'
import '../styles/global.css';
import '../styles/pages/lading.css';


function Loadind() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoimg} alt="Happy" />

                <main>
                    <h1>Leve Felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o diade muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Goias</strong>
                    <span>Goiania</span>
                </div>
                <Link to="/app" className="enter-app"><FiArrowRight size={26}
                    color="rgba(0, 0, 0, 0.6)" /></Link>
            </div>
        </div>
    )
}

export default Loadind;