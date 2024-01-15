import React from "react";
import './helpStyle.css';

export function Help() {
    return (
        <div className="help-container">
            <h1>FAQ - Najczęściej Zadawane Pytania</h1>
            <section>
                <h2>Korzystanie z Aplikacji</h2>
                <p>
                    Nasza aplikacja umożliwia korzystanie w trybie gościa bez konieczności rejestracji. Wystarczy kliknąć na przycisk "Nowy Użytkownik", aby utworzyć konto. Zarejestrowani użytkownicy logują się za pomocą adresu e-mail i hasła.
                </p>
                <p>
                    Dostępne są informacje o wszystkich czujnikach, zarówno publicznych, jak i prywatnych. Zarejestrowani użytkownicy mogą przeglądać także prywatne czujniki.
                </p>
                <p>
                    W zakładce "Stwórz Czujnik" zarejestrowani użytkownicy mogą tworzyć własne czujniki. Ta opcja jest dostępna wyłącznie dla zalogowanych użytkowników.
                </p>
                <p>
                    W zakładce "Oceń Aplikację" masz możliwość wyrażenia swojej opinii na temat naszej aplikacji.
                </p>
            </section>
            <section>
                <h2>Problem z Logowaniem</h2>
                <p>
                    Jeśli masz problemy z logowaniem, sprawdź czy:
                </p>
                <ul>
                    <li>Sprawdziłeś poprawność loginu i hasła.</li>
                    <li>Sprawdziłeś połączenie z internetem.</li>
                    <li>W razie dalszych problemów skorzystaj z opcji "Przypomnij hasło".</li>
                </ul>
            </section>
            <section>
                <h2>Jak zresetować hasło?</h2>
                <p>Aby zresetować hasło, kliknij na stronie logowania opcję "Zapomniałem hasła" i postępuj zgodnie z instrukcjami.</p>
            </section>
            <section>
                <h2>Kontakt do Nas</h2>
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
