# Test de Prérequis WordPress

Application Next.js pour évaluer les connaissances de base des étudiants avant d'apprendre WordPress.

## Fonctionnalités

- **Test à choix multiples** avec 100 questions couvrant :
  - Ordinateur et Téléphone
  - Dossiers et Fichiers
  - Applications
  - Navigateur
  - Site Web et Application Web
  - HTML
  - CSS
  - JavaScript
  - PHP
  - Prérequis WordPress

- **Mode plein écran** pendant le test
- **Compte à rebours** de 1 heure
- **Détection de sortie** : le test est annulé si l'utilisateur quitte
- **Scoring** : minimum 60% requis pour passer
- **Résultats détaillés** avec affichage des bonnes réponses
- **Possibilité de recommencer** tant que le score n'est pas atteint

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` - Pages Next.js (App Router)
- `data/questions.ts` - Base de données des questions
- `app/page.tsx` - Page d'accueil
- `app/test/page.tsx` - Page de test
- `app/results/page.tsx` - Page de résultats

