import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'
import AAOH_logo1 from "./../../images/AAOH_logo1.png";
import AAOH_logo2 from "./../../images/AAOH_logo2.png";
import AAOH_logo3 from "./../../images/AAOH_logo3.png";
import AAOH_logo4 from "./../../images/AAOH_logo4.png";
import AAOH_logo4Copy from "./../../images/AAOH_logo4Copy.png";

const landingPageJSX = {
  [ENGLISH]:
  <body>
    
      
      <div id="embed-container">

        <iframe
          src="https://jlijewski.github.io/LingView/#/story/a5fd7f19-7044-462e-b501-200cb57c60e8"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
          title="Embedded Content"
        ></iframe>
      </div>

    
  </body>
    ,
  [ESPANOL]:
    <div>
      <p>¡Bienvenido! Este sitio web funciona con LingView. Haga clic <a href='#/index'>"Índice de textos"</a> para ver algunos textos de ejemplo. </p>
      <p>Para personalizar este texto de bienvenida, edite el archivo 'jsx/App/LandingPage.jsx' y luego ejecute el paquete web para que los cambios surtan efecto. </p>
    </div>,
  [FRANCAIS]:
    <div>
      <p>Bienvenue! Ce site Web est alimenté par LingView. Cliquez <a href='#/index'>"Index des Textes"</a> pour voir quelques exemples de textes. </p>
      <p>Pour personnaliser ce texte de bienvenue, modifiez le fichier 'jsx/App/LandingPage.jsx', puis exécutez webpack pour que vos modifications prennent effet. </p>
    </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
