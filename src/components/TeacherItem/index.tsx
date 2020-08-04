import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/5144914?s=460&u=1eeaf8d14302dcb8b0c4c91d9c8ab69f11ecab1b&v=4"
          alt="foto de perfil"
        />
        <div>
          <strong>Willian D Santos</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br /> Neque vitae impedit iste expedita, sequi exercitationem at et
        commodi molestiae nostrum provident beatae ipsam debitis animi totam
        aspernatur repudiandae, ut autem.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Icone do WhatssApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
