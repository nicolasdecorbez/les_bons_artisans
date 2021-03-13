# Les Bons Artisans - Test technique

Dans le cadre d'un recrutement pour un poste de développeur Web en Alternance, l'entreprise [Les Bons Artisans]() m'ont soumis le projet suivant afin d'évaluer mes compétences.

## Sommaire

- [Sujet](#sujet)
- [Modification du sujet](#modification-du-sujet)
- [API](#api)
- [Application Web](#application-web)
- [Lancement](#lancement)
- [Problèmes rencontrés](#problèmes-rencontrés)

## Sujet

Ce test technique vise à la création d'une `API REST` en `Node.js`/`Express` (lié à une base de données `MongoDB`) et d'une **application web** en `ReactJS`.

## Modification du sujet

Afin d'adapter correctement mon API à la base de données MongoDB, j'ai choisi de modifier le fichier [`product.json`](/product_modified.json) fourni, en modifiant le champ `_id` par `product_id`.

## API

Pour la création de mon API, j'ai choisi d'initialiser manuellement mon dossier en suivant la documentation officielle disponible à [cette adresse](https://expressjs.com/en/starter/installing.html)

J'ai donc mis en place 3 fichiers pour la configuration de cette API :
- `index.js` : fichier d'initialisation du serveur et de la connexion à la base de données. On définit notamment le port d'écoute, ici **8080**.
- `routes.js` : nous définissons ici nos routes **GET** pour lister un ou plusieurs produits, **POST** pour en créer, **PATCH** pour en modifier et **DELETE** pour en supprimer
- `models/Product.js` : mise en place de notre schéma de base de données, et création de notre Model afin de faciliter l'accès à la base de données (grâce au wrapper `mongoose`, initialisé dans `index.js`)

Vous pouvez accéder à l'API à [cette adresse](/api).

> L'utilisation de la méthode PATCH plutôt que PUT se justifie par le mode de fonctionnement de MongoDB. En effet, PUT est une modification globale de notre collection, incluant donc la colonne `_id` qui est protégée, et nous renvoie donc une erreur. La méthode PATCH permet de ne modifier que les champs désirés.

## Application Web

Pour la création de mon application Web, la création s'est faite grâce à  la commande `npx create-react-app <name>`. Le dossier `web-app` est donc créé, nous pouvons commencer à la modifier.

Nous commençons par créer ces *components* dans [`/components`](/web-app/components) :
- `Home.js` : Page d’accueil de notre application. On y trouve un menu afin d'accéder à chaque option possible.
- `Titre.js` : Affichage du titre sur la page d'accueil.
- `Navigation.js` : Gestion du menu de redirection, sur la page d'accueil.
- `DevrInformations.js` : Informations sur le développeur de cette application. Placé en tant qu'Header fixe sur toutes les pages, il contient 3 boutons (GitHub, Mail, LinkedIn)
- `ListProducts.js` : Page associé à la méthode **GET**, où nous trouvons un tableau avec tous nos produits.
- `CreateProduct.js` : Page associé à la méthode **POST**, où nous trouvons un formulaire de création.
- `ModifyProduct.js` : Page associé à la méthode **PATCH**, où nous trouvons un formulaire de modification, ainsi qu'un boutons pour récupérer les informations d'un produit par son `product_id`.
- `DeleteProduct.js` : Page associé à la méthode **DELETE**, où nous trouvons un tableau qui se remplit en choisissant un `product_id`, puis nous pouvons le supprimer.
- `HomeButton.js` : Bouton de redirection vers la page d'accueil, présent sur les *components* `CreateProduct`, `ModifyProduct` et `DeleteProduct`.

Nous modifions également le *component* de base `App.js` afin de mettre en place notre `router` pour la redirection des boutons.

Enfin, nous créons quelques fichiers CSS dans le dossier [`/assets/css`](/web-app/assets/css) pour ajuster nos *components*.

## Lancement

Pour le lancement de cette application, nous nous rendons d'abord dans le dossier `/api` puis lançons la commande `node index.js`.

> NodeJS doit être installé sur la machine pour pouvoir lancer ce serveur.

Nous obtenons cette sortie :
```console
$ node index.js
Server ok!
```

Notre API tourne maintenant à l'adresse `localhost:8080`. Nous ouvrons maintenant un nouveau terminal afin de lancer notre application Web.

Nous nous rendons dans le dossier `/web-app` et lançons la commande `yarn start`. La page d'accueil devrait se lancer automatiquement, arrivant donc sur cette page:

![](/img/main_page.png)

L'ensemble du projet est conforme à la norme du linter [ESLint](https://eslint.org/), implémenté de base dans ce projet.

## Problèmes rencontrés

Malgré l'intégration des headers CORS à l'ensemble de mes requêtes HTTP, seulement les méthodes **GET** sont compatible avec notre `web-app`. En revanche, l'intégralité des routes est compatibles avec [Postman](https://www.postman.com/)
