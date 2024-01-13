import React from "react";
import './helpStyle.css';


export function Help() {
    return (
        <div className="help-container">
          <h1>FAQ - Najczęściej Zadawane Pytania</h1>
          <section>
            <h2>Jak mogę zresetować hasło?</h2>
            <p>Aby zresetować hasło, kliknij na stronie logowania opcję "Zapomniałem hasła" i postępuj zgodnie z instrukcjami.</p>
          </section>
          <section>
            <h2>Problemy z Logowaniem</h2>
            <a href="/help">Pomoc i FAQ</a>
            <p>
              Jeśli masz problemy z logowaniem, sprawdź czy:
              <ul>
                <li>Sprawdziłeś poprawność loginu i hasła.</li>
                <li>Sprawdziłeś połączenie z internetem.</li>
                <li>W razie dalszych problemów skorzystaj z opcji "Przypomnij hasło".</li>
              </ul>
            </p>
          </section>
          <section>
            <h2>Kontakt</h2>
            <p>Jeśli potrzebujesz dalszej pomocy, skontaktuj się z nami:</p>
            <ul>
              <li>Telefon: (numer telefonu)</li>
              <li>Email: info@example.com</li>
            </ul>
          </section>
        </div>
      );
    }
    
    export default Help;