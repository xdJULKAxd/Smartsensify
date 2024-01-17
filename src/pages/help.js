import React from "react";
import './helpStyle.css';

export function Help() {
    return (
        <div className="help-container">
        <h1 className="help-header">FAQ - Najczęściej Zadawane Pytania</h1>
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
                    <p>Sprawdziłeś poprawność loginu i hasła.</p>
                    <p>Sprawdziłeś połączenie z internetem.</p>
                    <p>W razie dalszych problemów skorzystaj z opcji "Przypomnij hasło".</p>
                </ul>
            </section>
            <section>
                <h2>Jak zresetować hasło?</h2>
                <p>Aby zresetować hasło, kliknij na stronie logowania opcję "Zapomniałem hasła" i postępuj zgodnie z instrukcjami.</p>
            </section>
            <h2>Pobierz aplikację mobilną PWA</h2>
            <p>
                Nasza aplikacja jest dostępna jako Progressive Web App (PWA), co oznacza, że możesz ją zainstalować zarówno na komputerze, jak i telefonie komórkowym. Aby pobrać aplikację na swój komputer lub telefon, postępuj zgodnie z poniższymi krokami:
            </p>
            <ul>
                <li>
                    <strong>Na komputerze:</strong> Otwórz przeglądarkę internetową i odwiedź stronę aplikacji. Następnie skorzystaj z opcji "Dodaj do pulpitu" lub "Zainstaluj jako aplikację" w menu przeglądarki.
                    <p>
                        <em>Rozszerzona wersja (opcjonalnie): Jeśli korzystasz z przeglądarki Chrome, możesz także skorzystać z opcji "Dodaj do pulpitu" w menu przeglądarki Chrome. Po zainstalowaniu, aplikacja będzie dostępna w menu Start systemu operacyjnego.</em>
                    </p>
                </li>
                <li>
                    <strong>Na telefonie:</strong> Otwórz przeglądarkę internetową, odwiedź stronę aplikacji, a następnie skorzystaj z opcji "Dodaj do ekranu głównego" lub "Zainstaluj jako aplikację", dostępnych w menu przeglądarki.
                    <p>
                        <em>Rozszerzona wersja (opcjonalnie): W niektórych przeglądarkach mobilnych, takich jak Chrome na Androidzie, możesz również znaleźć opcję "Zainstaluj" w menu przeglądarki, umożliwiającą zainstalowanie aplikacji na ekranie głównym.</em>
                    </p>
                </li>
            </ul>
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