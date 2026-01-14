import { ArrowLeft } from 'lucide-react';

interface ImpressumProps {
  onNavigate: (page: string) => void;
}

export default function Impressum({ onNavigate }: ImpressumProps) {
  return (
    <div className="min-h-screen bg-glaswerk-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-anthrazit hover:text-stahlblau transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Zurück zur Startseite
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-anthrazit">Impressum</h1>

        <div className="prose prose-lg max-w-none text-anthrazit">
          <h2 className="text-2xl font-bold mb-4 text-anthrazit">Angaben gemäß § 5 TMG</h2>
          <p className="mb-6">
            Glaswerk Elements<br />
            Rudolf Diesel Straße 14<br />
            72250 Freudenstadt<br />
            Deutschland
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-anthrazit">Kontakt</h2>
          <p className="mb-6">
            Telefon: 0152 / 926 127 20<br />
            E-Mail: info@glaswerk-elements.de<br />
            Website: www.glaswerkelements.de
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-anthrazit">Vertretungsberechtigter Geschäftsführer</h2>
          <p className="mb-6">
            Marco Störzer
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-anthrazit">Registereintrag</h2>
          <p className="mb-6">
            Eintragung im Handelsregister<br />
            Registergericht: Amtsgericht Stuttgart<br />
            Registernummer: HRB 802533
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-anthrazit">Umsatzsteuer-ID</h2>
          <p className="mb-6">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE458299173
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-anthrazit">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="mb-6">
            Berufsbezeichnung: Handwerksbetrieb<br />
            Zuständige Kammer: Handwerkskammer [Region]<br />
            Verliehen in: Deutschland
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-anthrazit">Haftungsausschluss</h2>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Haftung für Inhalte</h3>
          <p className="mb-6">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mb-6">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Haftung für Links</h3>
          <p className="mb-6">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
            verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Urheberrecht</h3>
          <p className="mb-6">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="mb-6">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-anthrazit">EU-Streitschlichtung</h2>
          <p className="mb-6">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr/<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-anthrazit">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
          <p className="mb-6">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
}
