# TnS : Tasks and Schedule

This soft aims at ease the way to manage tasks for manager and for user, it is inspired from different sources 
and from experiment.

## TODO

1. ajouter date de création de tache + afficher date dans le tableau dans une autre police
2. permettre :
    a) d'éditer tache existante
    b) renseigner les heures passées sur une tache
3. [gros travail] intégrer la table finale dans l'appli : prendre en compte les liens entre tables
4. permettre d'ordonner des taches par date (création, début, fin)
- filtrer
- tableau avec jointure
- bouton pour fermer l'application proprement
- intégrer une vue planing
  - afficher les taches en cascade de manière à ce que l'ordonnacement des taches de haut en bas 
      soit de la plus tot à la plus tardive en date de début, puis à la date de fin (si dates de début sont égales)
  - permettre de cliquer sur une tache du planning pour l'éditer
  - déplacer les taches dans le planning
    - garder la durée d'une tache lors de son déplacement dans le planning
5. modifier le design et mettre l'appli sur un git

## List of commmandes to be lauched in order to setup the dependencies*

cd "C:\Users\PY\Documents\2 - Synchro Perso PY\Technologies & Sciences\2 - Mes Projets\TnS"
prompt $d $g
npm init -y
npm install express express-handlebars --save
npm install body-parser --save
npm install mysql2 --save
npm install --save handlebars-dateformat
npm install -g nodemon