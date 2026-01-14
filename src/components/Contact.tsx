import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    model: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        model: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-anthrazit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glaswerk-white">
            Kontakt & Anfrage
          </h2>
          <p className="text-xl text-glaswerk-white/80 max-w-3xl mx-auto">
            Bereit für Ihr Projekt? Kontaktieren Sie uns für eine kostenlose Beratung
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-glaswerk-white">
              Nehmen Sie Kontakt auf
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-stahlblau flex-shrink-0 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-glaswerk-white mb-1">Telefon</p>
                  <a href="tel:+4915292612720" className="text-glaswerk-white/80 hover:text-stahlblau transition-colors">
                    0152 / 926 127 20
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-stahlblau flex-shrink-0 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-glaswerk-white mb-1">E-Mail</p>
                  <a href="mailto:info@glaswerk-elements.de" className="text-glaswerk-white/80 hover:text-stahlblau transition-colors">
                    info@glaswerk-elements.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-stahlblau flex-shrink-0 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-glaswerk-white mb-1">Adresse</p>
                  <p className="text-glaswerk-white/80">
                    Rudolf Diesel Straße 14<br />
                    72250 Freudenstadt<br />
                    Deutschland
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stahlblau/20 border border-stahlblau/30 p-6 rounded-lg">
              <h4 className="font-semibold text-glaswerk-white mb-3">Öffnungszeiten:</h4>
              <div className="space-y-2 text-glaswerk-white/80">
                <div className="flex justify-between">
                  <span>Montag - Freitag:</span>
                  <span>08:00 - 17:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag:</span>
                  <span>Nach Vereinbarung</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag:</span>
                  <span>Geschlossen</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-glaswerk-white font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-glaswerk-white/10 border border-silbergrau/30 rounded-md text-glaswerk-white placeholder-glaswerk-white/50 focus:outline-none focus:ring-2 focus:ring-stahlblau"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-glaswerk-white font-semibold mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-glaswerk-white/10 border border-silbergrau/30 rounded-md text-glaswerk-white placeholder-glaswerk-white/50 focus:outline-none focus:ring-2 focus:ring-stahlblau"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-glaswerk-white font-semibold mb-2">
                  Telefonnummer (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-glaswerk-white/10 border border-silbergrau/30 rounded-md text-glaswerk-white placeholder-glaswerk-white/50 focus:outline-none focus:ring-2 focus:ring-stahlblau"
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-glaswerk-white font-semibold mb-2">
                  Anfrageart *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-glaswerk-white/10 border border-silbergrau/30 rounded-md text-glaswerk-white focus:outline-none focus:ring-2 focus:ring-stahlblau"
                >
                  <option value="">Bitte wählen</option>
                  <option value="fenster">Fenster</option>
                  <option value="tuer">Tür</option>
                  <option value="system">System</option>
                  <option value="ueberdachung">Überdachung</option>
                  <option value="beratung">Allgemeine Beratung</option>
                </select>
              </div>

              {formData.category === 'tuer' && (
                <div>
                  <label htmlFor="model" className="block text-glaswerk-white font-semibold mb-2">
                    Gewünschtes Modell
                  </label>
                  <select
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-glaswerk-white/10 border border-silbergrau/30 rounded-md text-glaswerk-white focus:outline-none focus:ring-2 focus:ring-stahlblau"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="torino">Torino</option>
                    <option value="firenze">Firenze</option>
                    <option value="verona">Verona</option>
                    <option value="modena">Modena</option>
                    <option value="messina">Messina</option>
                    <option value="trieste">Trieste</option>
                    <option value="foggia">Foggia</option>
                    <option value="livorno">Livorno</option>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-glaswerk-white font-semibold mb-2">
                  Ihre Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-glaswerk-white/10 border border-silbergrau/30 rounded-md text-glaswerk-white placeholder-glaswerk-white/50 focus:outline-none focus:ring-2 focus:ring-stahlblau resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                ></textarea>
              </div>

              <div className="text-sm text-glaswerk-white/60">
                * Pflichtfelder. Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                Weitere Informationen finden Sie in unserer Datenschutzerklärung.
              </div>

              {submitted ? (
                <div className="bg-green-500/20 border border-green-500 text-glaswerk-white px-6 py-4 rounded-md text-center">
                  Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-stahlblau text-white px-8 py-4 rounded-md hover:bg-stahlblau/90 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  Unverbindlich anfragen
                  <Send size={20} />
                </button>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-glaswerk-white text-center">
            So finden Sie uns
          </h3>
          <div className="w-full h-96 bg-anthrazit/20 border border-silbergrau/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.8735812394875!2d8.408237!3d48.466667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47970a5c0e2d9f0d%3A0x0!2sRudolf-Diesel-Stra%C3%9Fe%2014%2C%2072250%20Freudenstadt!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Glaswerk Elements Standort"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
