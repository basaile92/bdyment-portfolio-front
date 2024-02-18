import React from 'react';
import './Console.css';
import Command from "../command/Command";
import Response from "../response/Response";
import Prompt from "../prompt/Prompt";
import Bar from "../bar/Bar";

function Console() {
  return (
      <div>
          <Bar/>
          <label>
            <div className="console">
                <Command>mkdir CV</Command>
                <Response>Développement et maintenance d’applications permettant d’afficher pour les clients leur factures d’énergie, d’estimer leurs dépenses futures et d’optimiser leur contrat d’énergie afin de réduire les coûts.</Response>
                <Prompt></Prompt>
            </div>
          </label>
      </div>
  );
}

export default Console;
