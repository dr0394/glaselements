# Favicon-Generierung

## Schnellanleitung

Die Favicon-Platzhalter müssen noch durch echte PNG-Dateien ersetzt werden.

### Option 1: Online-Generator (Empfohlen)

1. Besuchen Sie: https://realfavicongenerator.net/
2. Laden Sie `/public/favicon.svg` hoch
3. Passen Sie die Einstellungen an:
   - iOS: Hintergrund #3E5A80
   - Android: Hintergrund #3E5A80
   - Windows: Hintergrund #3E5A80
4. Generieren Sie die Favicons
5. Laden Sie das Paket herunter
6. Ersetzen Sie die Dateien in `/public/`:
   - favicon-32x32.png
   - favicon-16x16.png
   - apple-touch-icon.png
   - favicon-192x192.png
   - favicon-512x512.png

### Option 2: Mit Figma/Photoshop

1. Öffnen Sie `/public/favicon.svg`
2. Exportieren Sie in folgenden Größen:
   - 16x16px → `favicon-16x16.png`
   - 32x32px → `favicon-32x32.png`
   - 180x180px → `apple-touch-icon.png`
   - 192x192px → `favicon-192x192.png`
   - 512x512px → `favicon-512x512.png`
3. Format: PNG mit Transparenz
4. Ersetzen Sie die Platzhalter in `/public/`

### Option 3: Mit ImageMagick (Command Line)

```bash
# Installation (macOS)
brew install imagemagick

# 16x16
convert public/favicon.svg -resize 16x16 public/favicon-16x16.png

# 32x32
convert public/favicon.svg -resize 32x32 public/favicon-32x32.png

# 180x180
convert public/favicon.svg -resize 180x180 public/apple-touch-icon.png

# 192x192
convert public/favicon.svg -resize 192x192 public/favicon-192x192.png

# 512x512
convert public/favicon.svg -resize 512x512 public/favicon-512x512.png
```

---

## OG-Image erstellen

Für Social Media Sharing (Facebook, LinkedIn, Twitter):

### Anforderungen:
- **Größe:** 1200x630px
- **Format:** JPG oder PNG
- **Inhalt:**
  - Logo: Glaswerk Elements
  - Tagline: "Moderne Fenster, Türen & Überdachungen"
  - Hintergrund: Brand-Farben (#3E5A80, #1A1A1A)
  - Kein Text am Rand (80px Sicherheitsabstand)

### Tools:
- **Canva:** https://www.canva.com/ (Vorlage: Open Graph)
- **Figma:** Kostenloses Design-Tool
- **Photopea:** https://www.photopea.com/ (Photoshop-Alternative im Browser)

### Speicherort:
Speichern Sie das Bild als `/public/og-image.jpg`

---

## Nach der Generierung

1. Neue Favicons in `/public/` ablegen
2. Build neu erstellen: `npm run build`
3. Testen auf: https://realfavicongenerator.net/favicon_checker
4. Browser-Cache löschen und Website prüfen

---

## Testen

- **Chrome DevTools:** Rechtsklick → Untersuchen → Application → Manifest
- **Favicon Checker:** https://realfavicongenerator.net/favicon_checker
- **Social Media Debugger:**
  - Facebook: https://developers.facebook.com/tools/debug/
  - LinkedIn: https://www.linkedin.com/post-inspector/
  - Twitter: https://cards-dev.twitter.com/validator
