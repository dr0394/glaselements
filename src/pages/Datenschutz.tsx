import { ArrowLeft } from 'lucide-react';

interface DatenschutzProps {
  onNavigate: (page: string) => void;
}

export default function Datenschutz({ onNavigate }: DatenschutzProps) {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-anthrazit">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none text-anthrazit">
          <h2 className="text-2xl font-bold mb-4 text-anthrazit">1. Datenschutz auf einen Blick</h2>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Allgemeine Hinweise</h3>
          <p className="mb-6">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
            Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Datenerfassung auf dieser Website</h3>
          <h4 className="text-lg font-semibold mb-2 mt-4 text-anthrazit">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p className="mb-6">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
            können Sie dem Impressum dieser Website entnehmen.
          </p>

          <h4 className="text-lg font-semibold mb-2 mt-4 text-anthrazit">Wie erfassen wir Ihre Daten?</h4>
          <p className="mb-6">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
            Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p className="mb-6">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
            des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <h4 className="text-lg font-semibold mb-2 mt-4 text-anthrazit">Wofür nutzen wir Ihre Daten?</h4>
          <p className="mb-6">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
            Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <h4 className="text-lg font-semibold mb-2 mt-4 text-anthrazit">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          <p className="mb-6">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
            können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
            bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-anthrazit">2. Hosting</h2>
          <p className="mb-6">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>
          <p className="mb-6">
            [Hosting-Anbieter Name]<br />
            [Adresse des Hosting-Anbieters]
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-anthrazit">3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Datenschutz</h3>
          <p className="mb-6">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
            dieser Datenschutzerklärung.
          </p>
          <p className="mb-6">
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
            Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
            und zu welchem Zweck das geschieht.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Hinweis zur verantwortlichen Stelle</h3>
          <p className="mb-6">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mb-6">
            Glaswerk Elements<br />
            Rudolf Diesel Straße 14<br />
            72250 Freudenstadt<br />
            Deutschland<br />
            <br />
            Telefon: 0152 / 926 127 20<br />
            E-Mail: info@glaswerk-elements.de
          </p>
          <p className="mb-6">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
            die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
            entscheidet.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Speicherdauer</h3>
          <p className="mb-6">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
            Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
            berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
            werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
            personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
            letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Rechtsgrundlage für die Datenverarbeitung</h3>
          <p className="mb-6">
            Wir verarbeiten personenbezogene Daten nur mit Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), zur Erfüllung
            eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO), zur Erfüllung
            einer rechtlichen Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO) oder wenn die Verarbeitung zur Wahrung unserer
            berechtigten Interessen oder der berechtigten Interessen eines Dritten erforderlich ist (Art. 6 Abs. 1 lit. f
            DSGVO).
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p className="mb-6">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
            bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-anthrazit">4. Datenerfassung auf dieser Website</h2>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Kontaktformular</h3>
          <p className="mb-6">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
            und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
            Einwilligung weiter.
          </p>
          <p className="mb-6">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
            der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
            effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p className="mb-6">
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
            hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
            bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-anthrazit">5. Ihre Rechte</h2>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Auskunftsrecht</h3>
          <p className="mb-6">
            Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
            gespeicherten personenbezogenen Daten zu erhalten.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Recht auf Berichtigung oder Löschung</h3>
          <p className="mb-6">
            Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung unvollständiger
            personenbezogener Daten zu verlangen. Sie haben zudem das Recht, unter bestimmten Umständen die
            Löschung Ihrer personenbezogenen Daten zu verlangen.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Recht auf Einschränkung der Verarbeitung</h3>
          <p className="mb-6">
            Sie haben das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-anthrazit">Beschwerderecht bei der Aufsichtsbehörde</h3>
          <p className="mb-6">
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
            oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
            verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
          </p>

          <p className="mt-8 text-sm text-anthrazit/60">
            Stand: {new Date().toLocaleDateString('de-DE')}
          </p>
        </div>
      </div>
    </div>
  );
}
