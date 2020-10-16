import React from 'react';
import mapMarkerImg from '../images/map-.marquer.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import '../styles/pages/orphanage-map.css';
import { Map , TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'


function OrphabagesMap() {
  return (



    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>

        </header>
        <footer>
          <strong>Goias</strong>
          <span>Goiania</span>
        </footer>


      </aside>
      <Map
          center={[-16.5822636, -49.3957846]}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphabagesMap;