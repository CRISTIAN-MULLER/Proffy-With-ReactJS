import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/250px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
          alt="Albert Eintein"
        />
        <div>
          <strong>Albert Eintein</strong>
          <span>Física</span>
        </div>
      </header>
      <p>
        Albert Einstein (Ulm, 14 de março de 1879 — Princeton, 18 de abril de
        1955) foi um físico teórico alemão que desenvolveu a teoria da
        relatividade geral, um dos pilares da física moderna ao lado da mecânica
        quântica. Embora mais conhecido por sua fórmula de equivalência
        massa-energia, E=mc² — que foi chamada de "a equação mais famosa do
        mundo" —, foi laureado com o Prêmio Nobel de Física de 1921 "por suas
        contribuições à física teórica" e, especialmente, por sua descoberta da
        lei do efeito fotoelétrico, que foi fundamental no estabelecimento da
        teoria quântica.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>US$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato." />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
