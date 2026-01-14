import { useState } from 'react';
import { X, ArrowRight, ArrowLeft, MessageCircle, Mail } from 'lucide-react';

interface MultistepFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MultistepForm({ isOpen, onClose }: MultistepFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    model: '',
    message: '',
    address: '',
    timeline: '',
  });

  const totalSteps = 4;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const generateWhatsAppMessage = () => {
    const message = `
*Neue Anfrage von ${formData.name}*

📧 Email: ${formData.email}
📞 Telefon: ${formData.phone}
📍 Adresse: ${formData.address}

*Projekt-Details:*
Kategorie: ${formData.category}
${formData.model ? `Modell: ${formData.model}` : ''}
Zeitplan: ${formData.timeline}

*Nachricht:*
${formData.message}
    `.trim();

    const phoneNumber = '4915292612720';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    handleClose();
  };

  const generateEmail = () => {
    const subject = `Anfrage von ${formData.name} - ${formData.category}`;
    const body = `
Neue Anfrage von ${formData.name}

Email: ${formData.email}
Telefon: ${formData.phone}
Adresse: ${formData.address}

Projekt-Details:
Kategorie: ${formData.category}
${formData.model ? `Modell: ${formData.model}` : ''}
Zeitplan: ${formData.timeline}

Nachricht:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:info@glaswerk-elements.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    handleClose();
  };

  const sendBoth = () => {
    generateWhatsAppMessage();
    setTimeout(() => generateEmail(), 1000);
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: '',
      model: '',
      message: '',
      address: '',
      timeline: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-anthrazit/80 p-4">
      <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-anthrazit/20 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-anthrazit">
            Anfrage stellen - Schritt {step} von {totalSteps}
          </h2>
          <button onClick={handleClose} className="text-anthrazit hover:text-stahlblau">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex gap-2">
              {[...Array(totalSteps)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 ${i + 1 <= step ? 'bg-stahlblau' : 'bg-anthrazit/20'}`}
                ></div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-anthrazit mb-4">Ihre Kontaktdaten</h3>

              <div>
                <label className="block text-anthrazit font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-anthrazit/20 text-anthrazit focus:outline-none focus:border-stahlblau"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              <div>
                <label className="block text-anthrazit font-semibold mb-2">E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-anthrazit/20 text-anthrazit focus:outline-none focus:border-stahlblau"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label className="block text-anthrazit font-semibold mb-2">Telefon *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-anthrazit/20 text-anthrazit focus:outline-none focus:border-stahlblau"
                  placeholder="0152 / 123 456 789"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-anthrazit mb-4">Ihr Projekt</h3>

              <div>
                <label className="block text-anthrazit font-semibold mb-2">Kategorie *</label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-anthrazit/20 text-anthrazit focus:outline-none focus:border-stahlblau"
                >
                  <option value="">Bitte wählen</option>
                  <option value="Fenster">Fenster</option>
                  <option value="Tür">Tür</option>
                  <option value="System">System</option>
                  <option value="Überdachung">Überdachung</option>
                  <option value="Beratung">Allgemeine Beratung</option>
                </select>
              </div>

              {formData.category === 'Tür' && (
                <div>
                  <label className="block text-anthrazit font-semibold mb-2">Gewünschtes Modell</label>
                  <select
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-anthrazit/20 text-anthrazit focus:outline-none focus:border-stahlblau"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="Torino">Torino</option>
                    <option value="Firenze">Firenze</option>
                    <option value="Verona">Verona</option>
                    <option value="Modena">Modena</option>
                    <option value="Messina">Messina</option>
                    <option value="Trieste">Trieste</option>
                    <option value="Foggia">Foggia</option>
                    <option value="Livorno">Livorno</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-anthrazit font-semibold mb-2">Adresse/Ort des Projekts *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-anthrazit/20 text-anthrazit focus:outline-none focus:border-stahlblau"
                  placeholder="Straße, PLZ, Ort"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-anthrazit mb-4">Weitere Details</h3>

              <div>
                <label className="block text-anthrazit font-semibold mb-2">Gewünschter Zeitplan *</label>
                <select
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-anthrazit/20 text-anthrazit focus:outline-none focus:border-stahlblau"
                >
                  <option value="">Bitte wählen</option>
                  <option value="So schnell wie möglich">So schnell wie möglich</option>
                  <option value="In den nächsten 4 Wochen">In den nächsten 4 Wochen</option>
                  <option value="In 2-3 Monaten">In 2-3 Monaten</option>
                  <option value="Später als 3 Monate">Später als 3 Monate</option>
                  <option value="Nur Informationen">Nur Informationen</option>
                </select>
              </div>

              <div>
                <label className="block text-anthrazit font-semibold mb-2">Ihre Nachricht *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-anthrazit/20 text-anthrazit focus:outline-none focus:border-stahlblau resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                ></textarea>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-anthrazit mb-4">Wie möchten Sie uns kontaktieren?</h3>

              <div className="bg-glaswerk-white/50 p-6 border-2 border-anthrazit/20">
                <h4 className="font-semibold text-anthrazit mb-4">Ihre Angaben im Überblick:</h4>
                <div className="space-y-2 text-sm text-anthrazit/80">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Telefon:</strong> {formData.phone}</p>
                  <p><strong>Kategorie:</strong> {formData.category}</p>
                  {formData.model && <p><strong>Modell:</strong> {formData.model}</p>}
                  <p><strong>Adresse:</strong> {formData.address}</p>
                  <p><strong>Zeitplan:</strong> {formData.timeline}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={generateWhatsAppMessage}
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 hover:bg-green-600 transition-all font-semibold"
                >
                  <MessageCircle size={20} />
                  Per WhatsApp senden
                </button>

                <button
                  onClick={generateEmail}
                  className="flex items-center justify-center gap-2 bg-stahlblau text-white px-6 py-4 hover:bg-stahlblau/90 transition-all font-semibold"
                >
                  <Mail size={20} />
                  Per E-Mail senden
                </button>
              </div>

              <button
                onClick={sendBoth}
                className="w-full border-2 border-anthrazit text-anthrazit px-6 py-4 hover:bg-anthrazit hover:text-white transition-all font-semibold"
              >
                Beide Optionen nutzen
              </button>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-anthrazit/20 p-6 flex justify-between">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="flex items-center gap-2 text-anthrazit hover:text-stahlblau transition-colors font-semibold"
            >
              <ArrowLeft size={20} />
              Zurück
            </button>
          )}

          {step < totalSteps && (
            <button
              onClick={nextStep}
              className="ml-auto flex items-center gap-2 bg-stahlblau text-white px-8 py-3 hover:bg-stahlblau/90 transition-all font-semibold"
            >
              Weiter
              <ArrowRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
