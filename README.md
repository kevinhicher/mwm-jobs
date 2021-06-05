# Choix de conception

L'application a été développée à partir de la whiteapp de React. Comme il était demandé de fournir une unique page ou figure une liste d'objet pouvant rediriger vers des liens externes, un unique composant (Home) a été créé, faisant appel à des composants de présentation (JobList et JobCard).

Le chargement des données pouvant se faire à un unique endroit, il n'était pas nécessaire d'implémenter un système de gestion du State complexe tel que Redux. Le composant principal (Home) se chargeant de faire redescendre les données aux composants enfants.

# Pour lancer l'application

Executer `npm i` puis `npm run start`.
