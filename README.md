
 Javascript Workshop
==================================

Dies sind die Übungen zu unserem Workshop, der Basiswissen zur Sprache Javascript vermittelt
und eine Einführung in die Bibliothek jQuery gibt.

Die Übungen sind so ausgelegt, dass sie in einer Entwicklungsumgebung,
wie z.B. IntelliJ IDEA geschrieben und anschließend mit dem Chrome-Browser
und dessen Dev-Tools ausgeführt werden.


 Setup der Übungen
----------------------------------

### Web-Project in IntelliJ IDEA anlegen

 1. Alle Dateien dieses Workshops werden entweder mit Git ge-cloned oder als ZIP in ein Projektverzeichnis installiert.
 2. In IntelliJ wählt man den Menü-Punkt "New Project" und folgt dem Wizard
    1. Der Typ des Projekts ist "Web-Module"
    2. Als "Project location" gibt man das Workshop-Verzeichnis an
    3. Alle anderen Einstellungen bleiben unangetastet
    4. Man beendet den Wizard mit "Finish"

Damit ist das grundlegende Setup bereits abgeschlossen und man kann beginnen, die Übungsaufgaben zu lösen.


### Web-Server starten (notwendig für Chapter 5, "AJAX")

 1. Installieren von Node.js (nodejs.org, Standardinstallation ohne Besonderheiten)
 2. In dem Projektverzeichnis ````npm install```` ausführen (damit werden benötigte Bibliotheken nachgeladen)
    * Unter Windows verwendet man dafür den "Node.js command prompt" und wechselt in das Workshop-Verzeichnis
 3. Starten des Servers mit ````node server.js```` (die Log-Meldung lautet: 'Started server at port 8080' )
    * Auch hierfür am besten den "Node.js command prompt" verwenden

