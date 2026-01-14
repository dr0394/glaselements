import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setShowBanner(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setShowBanner(false);
  };

  const saveSettings = () => {
    localStorage.setItem('cookie-consent', 'custom');
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {!showSettings ? (
        <div className="fixed bottom-6 left-6 z-50 bg-white shadow-2xl max-w-md border-2 border-anthrazit">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-anthrazit">Cookie-Einstellungen</h3>
              <button
                onClick={rejectAll}
                className="text-anthrazit hover:text-stahlblau transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <p className="text-anthrazit/80 mb-6 text-sm leading-relaxed">
              Wir verwenden Cookies, um Ihnen ein optimales Website-Erlebnis zu bieten. Dazu gehören Cookies,
              die für den Betrieb der Website notwendig sind, sowie optionale Cookies für anonyme Statistiken
              und Komfortfunktionen.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={acceptAll}
                className="w-full bg-stahlblau text-white px-6 py-3 hover:bg-stahlblau/90 transition-all font-semibold"
              >
                Alle akzeptieren
              </button>

              <button
                onClick={rejectAll}
                className="w-full border-2 border-anthrazit text-anthrazit px-6 py-3 hover:bg-anthrazit hover:text-white transition-all font-semibold"
              >
                Alle ablehnen
              </button>

              <button
                onClick={() => setShowSettings(true)}
                className="w-full text-anthrazit underline hover:text-stahlblau transition-colors text-sm"
              >
                Einstellungen anpassen
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed bottom-6 left-6 z-50 bg-white shadow-2xl max-w-md border-2 border-anthrazit max-h-[80vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-anthrazit">Cookie-Einstellungen</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-anthrazit hover:text-stahlblau transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="border border-anthrazit/20 p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-anthrazit">Notwendige Cookies</h4>
                  <span className="text-sm text-anthrazit/60">Immer aktiv</span>
                </div>
                <p className="text-sm text-anthrazit/80">
                  Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                </p>
              </div>

              <div className="border border-anthrazit/20 p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-anthrazit">Analyse Cookies</h4>
                  <label className="relative inline-block w-12 h-6">
                    <input type="checkbox" className="sr-only peer" />
                    <span className="absolute cursor-pointer inset-0 bg-anthrazit/20 peer-checked:bg-stahlblau transition-all"></span>
                    <span className="absolute left-1 top-1 bg-white w-4 h-4 transition-transform peer-checked:translate-x-6"></span>
                  </label>
                </div>
                <p className="text-sm text-anthrazit/80">
                  Helfen uns, die Nutzung der Website zu analysieren und zu verbessern.
                </p>
              </div>

              <div className="border border-anthrazit/20 p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-anthrazit">Marketing Cookies</h4>
                  <label className="relative inline-block w-12 h-6">
                    <input type="checkbox" className="sr-only peer" />
                    <span className="absolute cursor-pointer inset-0 bg-anthrazit/20 peer-checked:bg-stahlblau transition-all"></span>
                    <span className="absolute left-1 top-1 bg-white w-4 h-4 transition-transform peer-checked:translate-x-6"></span>
                  </label>
                </div>
                <p className="text-sm text-anthrazit/80">
                  Werden verwendet, um relevante Werbung anzuzeigen.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={saveSettings}
                className="w-full bg-stahlblau text-white px-6 py-3 hover:bg-stahlblau/90 transition-all font-semibold"
              >
                Auswahl speichern
              </button>

              <button
                onClick={rejectAll}
                className="w-full border-2 border-anthrazit text-anthrazit px-6 py-3 hover:bg-anthrazit hover:text-white transition-all font-semibold"
              >
                Alle ablehnen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
