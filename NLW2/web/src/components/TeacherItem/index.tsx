import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/65976669?s=460&u=f010266914f8585f92d3c678fd2a82724a59b57a&v=4" alt="Diogo Sales"/>
        <div>
          <strong>Diogo Sales</strong>
          <span>Física</span>
        </div>
      </header>
      <p>
        Texto
        <br/><br/>
        hafjkndjkvndmsvdf ksfbnkçasdnmfsdm,.nf.sd,mf jshfjskdhnçfajsdf kjshdfkjsdhnfjksnldf
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem