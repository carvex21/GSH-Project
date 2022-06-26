# GSH Task
## _Tasos Valeras_

https://github.com/carvex21


Το project αυτό έγινε στα πλαίσια της συνέντευξης για τη θέση του Full Stack Developer στην εταιρία GeoSystems Hellas.

## Δομή του Project

- Το project είναι χωρισμένο σε 2 φακέλους, ο ένας για το back-end και ο άλλος για το front-end
- Στο path \frontend-react\src βρίσκεται το Map.js με το αντίστοιχο css όπου έγινε η υλοποίηση του front-end κομματιού και τα API calls προς το back-end, αλλά και το App.js που καλεί το Map
- Στο φάκελο \frontend-react\src\GeoJSON βρίσκονται τα JSON αρχεία που δημιουργήθηκαν από τη σελίδα http://geojson.io/#map=2/20.0/0.0 και χρησιμοποιήθηκαν για layers
- Στο φάκελο \backend-flask βρίσκεται το requirements.txt που δημιουργήθηκε από το pip freeze
- Στον ίδιο φάκελο υπάρχει το routes.py δηλαδή το back-end της εφαρμογής, το οποίο είναι καταχωρημένα τα layers με τον αντίστοιχο αριθμό και προβάλλονται με τη μέθοδο request arguement

## Frameworks και βιβλιοθήκες

Για την υλοποίηση του project χρησιμοποιήθηκαν τα ακόλουθα:

- [NpmJS]
- [Flask]
- [axios]
- [leafletjs]
- [GeoJSON]
- [ReactJS]



## Εκκίνηση

Δεδομένου ότι έχουμε εγκαταστήσει τα απαραίτητα (βλ. requirements.txt) σε ενα CMD μέσα στο /backend-flask τρέχουμε το:

```sh
python routes.py
```

Έχοντας ξεκινήσει το back-end, προχωράμε στο front-end. Μέσα σε άλλο CMD στο φάκελο /frontend-react τρέχουμε το:

```sh
npm start
```

## Πώς λειτουργεί ο κώδικας

Στο back-end έχουμε φτιάξει ένα αντικείμενο το οποίο ανάλογα με το request arguement τυπώνει και διαφορετικό αριθμό. Υπάρχει δηλαδή μεταβλητή η οποία μας επιστρέφει την τιμή που θέλουμε ανάλογα με την είσοδο.

Στο front-end έχουμε τον χάρτη με τα ζητούμενα basemaps από τη σελίδα που μας δόθηκε. Τα zoomControl κουμπιά αφαιρέθηκαν από την κανονική τους θέση και προστέθηκαν στη ζητούμενη, όπως προστέθηκε και το layerControl. 
Προστέθηκαν επίσης κάποια layers από το GeoJSON στα οποία δόθηκε όνομα, ένα Popup, τα δεδομένα από τα αρχεία του GeoJSON και μια συνάρτηση που θα αλλάζει τη μεταβλητή layer ανάλογα με το στοιχείο που επιλέξαμε τελευταίο, η οποία συνάρτηση με τη σειρά της καλεί το back-end με request argument και παίρνει σαν απάντηση έναν αριθμό, τον οποίο εν τέλει τυπώνουμε στο popup.


## License

MIT

**Free Software**

   [Flask]: <https://flask.palletsprojects.com/en/2.1.x/>
   [NpmJS]: <https://www.npmjs.com/>
   [axios]: <https://github.com/axios/axios>
   [leafletjs]: <http://https://leafletjs.com/>
   [GeoJSON]: <http://geojson.io/#map=2/20.0/0.0>
   [ReactJS]: <https://reactjs.org/>