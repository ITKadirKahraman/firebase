# 🔥 Firebase API Playground

Ein Test- und Lernprojekt zur Arbeit mit **Firebase Realtime Database**, REST-APIs und asynchronen JavaScript-Funktionen.  
Das Projekt dient dazu, CRUD-Operationen (Create, Read, Update, Delete) über `fetch()` zu verstehen und verschiedene Datenstrukturen in Firebase zu speichern, abzurufen und zu bearbeiten.

---

## 🚀 Features

- Firebase Realtime Database Anbindung
- Daten mit `fetch()` abrufen
- Neue Datensätze erstellen
- Vorhandene Daten aktualisieren
- Daten löschen
- Arbeiten mit verschachtelten JSON-Strukturen
- Dynamische Benutzerverwaltung
- Testumgebung für verschiedene Datenbanken
- Speicherung von Arrays und Objekten in Firebase
- Asynchrone Programmierung mit `async/await`

---

## 🛠️ Verwendete Technologien

- HTML5
- JavaScript (ES6+)
- Firebase Realtime Database
- REST API
- Fetch API
- JSON

---

## 🔥 Firebase Integration

Der Schwerpunkt dieses Projekts liegt auf der Kommunikation mit einer **Firebase Realtime Database**.

Verwendete Methoden:

### Daten abrufen

```javascript
fetch(FIREBASE_URL + ".json")
```

### Daten erstellen

```javascript
fetch(FIREBASE_URL + ".json", {
    method: "POST",
    body: JSON.stringify(data)
})
```

### Daten aktualisieren

```javascript
fetch(FIREBASE_URL + ".json", {
    method: "PUT",
    body: JSON.stringify(data)
})
```

### Daten löschen

```javascript
fetch(FIREBASE_URL + ".json", {
    method: "DELETE"
})
```

---

## 📂 Projektstruktur

```text
Firebase-API-Test/
│
├── index.html
├── firebaseURL.js
├── testFirebase.js
├── arrayToFirebase.js
├── startelf.js
│
├── assets/
│   └── icons/
│       └── firebase.svg
│
└── README.md
```

---

## 🧠 Lernziele

Mit diesem Projekt wurden folgende Themen vertieft:

- REST API Kommunikation
- Firebase Realtime Database
- CRUD Operationen
- JSON Datenstrukturen
- Async / Await
- Fetch API
- Dynamische Datenverarbeitung
- Arbeiten mit Arrays und Objekten
- Fehleranalyse & Debugging
- Clean Code & Projektstrukturierung

---

## ⚙️ Installation

Repository klonen:

```bash
git clone https://github.com/DEIN-GITHUB-NAME/firebase-api-playground.git
```

Projekt öffnen:

```bash
cd firebase-api-playground
```

Danach die `index.html` mit Live Server starten.

---

## 🔐 Sicherheit

Aus Sicherheitsgründen werden die verwendeten Firebase-URLs und API-Endpunkte **nicht veröffentlicht**.

Die Datei:

```javascript
const FIREBASE_URL = '';
const REMOTESTORAGE_URL = '';
const STARTELF_URL = '';
```

enthält bewusst keine produktiven Datenbank-URLs.

Vor dem Start müssen eigene Firebase-Projekte angelegt und die entsprechenden URLs eingetragen werden.

---

## 📚 Aktuelle Lernfelder

- Frontend-Entwicklung
- Backend-Grundlagen
- Firebase Realtime Database
- REST APIs
- KI & Automatisierung
- JavaScript (ES6+)
- TypeScript
- Python
- Clean Code & Projektstrukturierung
- Moderne Entwicklungsprozesse
- Fehleranalyse & Debugging

---

## 👨‍💻 Autor

**Kadir Kahraman**

GitHub-Profil für weitere Projekte und Lernfortschritte.