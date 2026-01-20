export interface Question {
  id: string;
  section: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index de la bonne réponse (0-based)
}

export const questions: Question[] = [

  // =======================
  // SECTION 1 — Ordinateur & Téléphone
  // =======================
  {
    id: '1',
    section: 'Ordinateur et Téléphone',
    question: 'Quelle est la différence fondamentale entre un ordinateur et un smartphone moderne ?',
    options: [
      'Les smartphones sont des ordinateurs miniaturisés avec des capacités similaires mais des interfaces différentes',
      'Aucune différence, ce sont des appareils identiques',
      'Les ordinateurs ne peuvent pas se connecter à Internet',
      'Les smartphones n\'ont pas de processeur'
    ],
    correctAnswer: 0
  },
  {
    id: '2',
    section: 'Ordinateur et Téléphone',
    question: 'Qu\'est-ce que la RAM dans un ordinateur ?',
    options: [
      'La mémoire de stockage permanente',
      'La mémoire vive temporaire utilisée pour exécuter les programmes en cours',
      'Le disque dur',
      'Le processeur'
    ],
    correctAnswer: 1
  },
  {
    id: '3',
    section: 'Ordinateur et Téléphone',
    question: 'Quelle est la fonction principale d\'un système d\'exploitation ?',
    options: [
      'Gérer les ressources matérielles, fournir une interface utilisateur et permettre l\'exécution des applications',
      'Exécuter uniquement les applications',
      'Protéger contre les virus',
      'Naviguer sur Internet'
    ],
    correctAnswer: 0
  },
  {
    id: '4',
    section: 'Ordinateur et Téléphone',
    question: 'iOS et Android sont des exemples de :',
    options: ['Applications mobiles', 'Navigateurs web', 'Moteurs de recherche', 'Systèmes d\'exploitation mobiles'],
    correctAnswer: 3
  },
  {
    id: '5',
    section: 'Ordinateur et Téléphone',
    question: 'Qu\'est-ce qu\'un processeur (CPU) ?',
    options: [
      'Un périphérique de stockage',
      'Le composant qui exécute les instructions et traite les données',
      'Un logiciel système',
      'Un type de mémoire'
    ],
    correctAnswer: 1
  },

  // =======================
  // SECTION 2 — Fichiers & Dossiers
  // =======================
  {
    id: '6',
    section: 'Fichiers et Dossiers',
    question: 'Quelle est la différence entre un fichier et un dossier ?',
    options: [
      'Aucune différence, ce sont des termes synonymes',
      'Un dossier est un type de fichier spécial',
      'Un fichier ne peut pas être ouvert',
      'Un fichier contient des données, un dossier organise des fichiers et d\'autres dossiers'
    ],
    correctAnswer: 3
  },
  {
    id: '7',
    section: 'Fichiers et Dossiers',
    question: 'Qu\'est-ce qu\'une extension de fichier ?',
    options: [
      'La taille du fichier',
      'Le nom du fichier',
      'Les lettres après le point qui indiquent le type de fichier (ex: .txt, .jpg)',
      'La date de création'
    ],
    correctAnswer: 2
  },
  {
    id: '8',
    section: 'Fichiers et Dossiers',
    question: 'Quelle extension correspond à un fichier compressé ?',
    options: ['.txt', '.jpg', '.html', '.zip ou .rar'],
    correctAnswer: 3
  },
  {
    id: '9',
    section: 'Fichiers et Dossiers',
    question: 'Qu\'est-ce qu\'un chemin de fichier (path) ?',
    options: [
      'La vitesse de transfert',
      'L\'adresse complète indiquant l\'emplacement d\'un fichier dans la hiérarchie des dossiers',
      'Le nom du fichier uniquement',
      'La taille du fichier'
    ],
    correctAnswer: 1
  },
  {
    id: '10',
    section: 'Fichiers et Dossiers',
    question: 'Qu\'est-ce qu\'un fichier système ?',
    options: [
      'Un fichier créé par l\'utilisateur',
      'Un fichier image',
      'Un fichier texte',
      'Un fichier essentiel au fonctionnement du système d\'exploitation'
    ],
    correctAnswer: 3
  },

  // =======================
  // SECTION 3 — Applications
  // =======================
  {
    id: '11',
    section: 'Applications',
    question: 'Quelle est la différence entre une application native et une application web ?',
    options: [
      'Aucune différence',
      'L\'application native est installée localement et optimisée pour l\'OS, l\'application web fonctionne dans un navigateur',
      'L\'application web est toujours plus rapide',
      'L\'application native ne peut pas accéder à Internet'
    ],
    correctAnswer: 1
  },
  {
    id: '12',
    section: 'Applications',
    question: 'Qu\'est-ce qu\'une application hybride ?',
    options: [
      'Une application qui ne fonctionne pas',
      'Une application uniquement web',
      'Une application qui combine des éléments natifs et web',
      'Une application uniquement native'
    ],
    correctAnswer: 2
  },
  {
    id: '13',
    section: 'Applications',
    question: 'Qu\'est-ce qu\'un framework d\'application ?',
    options: [
      'Un logiciel complet',
      'Un système d\'exploitation',
      'Un ensemble d\'outils et de bibliothèques qui facilitent le développement d\'applications',
      'Un navigateur web'
    ],
    correctAnswer: 2
  },
  {
    id: '14',
    section: 'Applications',
    question: 'Qu\'est-ce qu\'une API (Application Programming Interface) ?',
    options: [
      'Une application utilisateur',
      'Un système d\'exploitation',
      'Une interface qui permet à des applications de communiquer entre elles',
      'Un type de fichier'
    ],
    correctAnswer: 2
  },
  {
    id: '15',
    section: 'Applications',
    question: 'Qu\'est-ce qu\'un logiciel open-source ?',
    options: [
      'Un logiciel payant',
      'Un logiciel qui ne fonctionne pas',
      'Un logiciel dont le code source est accessible et modifiable librement',
      'Un logiciel uniquement pour entreprises'
    ],
    correctAnswer: 2
  },

  // =======================
  // SECTION 4 — Internet & Navigateur
  // =======================
  {
    id: '16',
    section: 'Navigateur',
    question: 'Quelle est la différence entre un navigateur et un moteur de recherche ?',
    options: [
      'Aucune différence',
      'Le moteur de recherche est un type de navigateur',
      'Le navigateur ne peut pas afficher de pages',
      'Le navigateur affiche les pages web, le moteur de recherche trouve des informations sur Internet'
    ],
    correctAnswer: 3
  },
  {
    id: '17',
    section: 'Navigateur',
    question: 'Qu\'est-ce qu\'un cookie dans un navigateur ?',
    options: [
      'Un virus',
      'Un type de malware',
      'Un petit fichier stocké par le site web pour mémoriser des informations',
      'Un plugin'
    ],
    correctAnswer: 2
  },
  {
    id: '18',
    section: 'Navigateur',
    question: 'Qu\'est-ce que le cache du navigateur ?',
    options: [
      'Un virus',
      'Un stockage temporaire de fichiers pour accélérer le chargement des pages',
      'Un type de cookie',
      'Un plugin malveillant'
    ],
    correctAnswer: 1
  },
  {
    id: '19',
    section: 'Navigateur',
    question: 'Quelle est la différence entre HTTP et HTTPS ?',
    options: [
      'Aucune différence',
      'HTTP est plus rapide',
      'HTTPS ne fonctionne pas',
      'HTTPS chiffre les données échangées, HTTP ne le fait pas'
    ],
    correctAnswer: 3
  },
  {
    id: '20',
    section: 'Navigateur',
    question: 'Qu\'est-ce qu\'un bookmark (favori) ?',
    options: [
      'Un virus',
      'Un cookie',
      'Un lien sauvegardé pour accéder rapidement à une page web',
      'Un plugin'
    ],
    correctAnswer: 2
  },

  // =======================
  // SECTION 5 — Web
  // =======================
  {
    id: '21',
    section: 'Web',
    question: 'Quelle est la différence entre un site web statique et dynamique ?',
    options: [
      'Aucune différence',
      'Un site statique est toujours plus rapide',
      'Un site dynamique ne peut pas changer',
      'Un site statique affiche le même contenu pour tous, un site dynamique génère du contenu personnalisé'
    ],
    correctAnswer: 3
  },
  {
    id: '22',
    section: 'Web',
    question: 'Qu\'est-ce qu\'un serveur web ?',
    options: [
      'Un navigateur',
      'Un moteur de recherche',
      'Un type de site web',
      'Un ordinateur qui stocke et sert les fichiers d\'un site web aux visiteurs'
    ],
    correctAnswer: 3
  },
  {
    id: '23',
    section: 'Web',
    question: 'Qu\'est-ce que le responsive design ?',
    options: [
      'Un design qui ne change jamais',
      'Un design uniquement pour mobile',
      'Un design lent',
      'Un design qui s\'adapte automatiquement à la taille de l\'écran'
    ],
    correctAnswer: 3
  },
  {
    id: '24',
    section: 'Web',
    question: 'Qu\'est-ce qu\'un CMS headless ?',
    options: [
      'Un CMS sans interface',
      'Un CMS qui ne fonctionne pas',
      'Un CMS uniquement pour mobile',
      'Un CMS où le frontend et le backend sont séparés'
    ],
    correctAnswer: 3
  },
  {
    id: '25',
    section: 'Web',
    question: 'Qu\'est-ce qu\'un framework web ?',
    options: [
      'Un site web complet',
      'Un navigateur',
      'Un ensemble d\'outils et de structures pour faciliter le développement web',
      'Un serveur'
    ],
    correctAnswer: 2
  },

  // =======================
  // SECTION 6 — HTML
  // =======================
  {
    id: '26',
    section: 'HTML',
    question: 'Quelle est la différence entre HTML et XHTML ?',
    options: [
      'Aucune différence',
      'XHTML est un langage différent',
      'HTML ne fonctionne plus',
      'XHTML est une version plus stricte de HTML basée sur XML'
    ],
    correctAnswer: 3
  },
  {
    id: '27',
    section: 'HTML',
    question: 'Qu\'est-ce qu\'un élément sémantique en HTML5 ?',
    options: [
      'Un élément qui décrit sa signification plutôt que son apparence (ex: <article>, <nav>)',
      'Un élément décoratif',
      'Un élément invisible',
      'Un élément obsolète'
    ],
    correctAnswer: 0
  },
  {
    id: '28',
    section: 'HTML',
    question: 'Quelle est la différence entre <div> et <span> ?',
    options: [
      'Aucune différence',
      '<span> est un élément de bloc',
      '<div> ne peut pas contenir de texte',
      '<div> est un élément de bloc, <span> est un élément inline'
    ],
    correctAnswer: 3
  },
  {
    id: '29',
    section: 'HTML',
    question: 'Qu\'est-ce qu\'un attribut HTML ?',
    options: [
      'Une propriété qui fournit des informations supplémentaires sur un élément',
      'Un élément',
      'Un style CSS',
      'Un script JavaScript'
    ],
    correctAnswer: 0
  },
  {
    id: '30',
    section: 'HTML',
    question: 'Quelle balise HTML5 est utilisée pour du contenu audio ?',
    options: ['<sound>', '<music>', '<mp3>', '<audio>'],
    correctAnswer: 3
  },

  // =======================
  // SECTION 7 — CSS
  // =======================
  {
    id: '31',
    section: 'CSS',
    question: 'Qu\'est-ce que la spécificité en CSS ?',
    options: [
      'La règle qui détermine quelle déclaration CSS est appliquée quand plusieurs règles entrent en conflit',
      'La vitesse de chargement',
      'Le type de sélecteur',
      'La taille du fichier'
    ],
    correctAnswer: 0
  },
  {
    id: '32',
    section: 'CSS',
    question: 'Quelle est la différence entre margin et padding ?',
    options: [
      'Aucune différence',
      'Padding est à l\'extérieur',
      'Margin est à l\'intérieur',
      'Margin est l\'espace à l\'extérieur d\'un élément, padding est l\'espace à l\'intérieur'
    ],
    correctAnswer: 3
  },
  {
    id: '33',
    section: 'CSS',
    question: 'Qu\'est-ce que CSS Grid ?',
    options: [
      'Un type de fichier',
      'Un framework JavaScript',
      'Un type de sélecteur',
      'Un système de mise en page bidimensionnel pour créer des grilles'
    ],
    correctAnswer: 3
  },
  {
    id: '34',
    section: 'CSS',
    question: 'Qu\'est-ce qu\'une media query en CSS ?',
    options: [
      'Une règle qui applique des styles selon les caractéristiques de l\'appareil',
      'Une requête de base de données',
      'Un type de sélecteur',
      'Une propriété de couleur'
    ],
    correctAnswer: 0
  },
  {
    id: '35',
    section: 'CSS',
    question: 'Quelle est la différence entre position: relative et position: absolute ?',
    options: [
      'Aucune différence',
      'Absolute est toujours relatif',
      'Relative ne fonctionne pas',
      'Relative se positionne par rapport à sa position normale, absolute par rapport au parent positionné'
    ],
    correctAnswer: 3
  },

  // =======================
  // SECTION 8 — JavaScript
  // =======================
  {
    id: '36',
    section: 'JavaScript',
    question: 'Quelle est la différence entre let, const et var en JavaScript ?',
    options: [
      'let et const ont une portée de bloc, var a une portée de fonction. const ne peut pas être réassigné',
      'Aucune différence',
      'var est plus moderne',
      'const peut être réassigné'
    ],
    correctAnswer: 0
  },
  {
    id: '37',
    section: 'JavaScript',
    question: 'Qu\'est-ce qu\'une fonction asynchrone en JavaScript ?',
    options: [
      'Une fonction qui peut s\'exécuter sans bloquer le reste du code',
      'Une fonction qui ne fonctionne pas',
      'Une fonction synchrone',
      'Une fonction obsolète'
    ],
    correctAnswer: 0
  },
  {
    id: '38',
    section: 'JavaScript',
    question: 'Qu\'est-ce qu\'une closure (fermeture) en JavaScript ?',
    options: [
      'Une fonction qui a accès aux variables de sa portée externe même après l\'exécution',
      'Une fonction qui se ferme',
      'Une variable globale',
      'Un type de boucle'
    ],
    correctAnswer: 0
  },
  {
    id: '39',
    section: 'JavaScript',
    question: 'Qu\'est-ce que le hoisting en JavaScript ?',
    options: [
      'Un type de fonction',
      'Le comportement où les déclarations sont déplacées en haut de leur portée',
      'Un type de variable',
      'Une erreur'
    ],
    correctAnswer: 1
  },
  {
    id: '40',
    section: 'JavaScript',
    question: 'Qu\'est-ce qu\'une Promise en JavaScript ?',
    options: [
      'Un objet représentant une opération asynchrone qui peut réussir ou échouer',
      'Une fonction',
      'Une variable',
      'Un type de boucle'
    ],
    correctAnswer: 0
  },

  // =======================
  // SECTION 9 — PHP
  // =======================
  {
    id: '41',
    section: 'PHP',
    question: 'Quelle est la différence entre == et === en PHP ?',
    options: [
      '== compare les valeurs, === compare les valeurs et les types',
      'Aucune différence',
      '=== compare seulement les types',
      '== compare les types'
    ],
    correctAnswer: 0
  },
  {
    id: '42',
    section: 'PHP',
    question: 'Qu\'est-ce qu\'une session PHP ?',
    options: [
      'Une variable',
      'Un mécanisme pour stocker des données utilisateur entre plusieurs pages',
      'Une fonction',
      'Un type de fichier'
    ],
    correctAnswer: 1
  },
  {
    id: '43',
    section: 'PHP',
    question: 'Qu\'est-ce que PDO en PHP ?',
    options: [
      'Une interface pour accéder aux bases de données de manière sécurisée',
      'Une fonction',
      'Un type de variable',
      'Un framework'
    ],
    correctAnswer: 0
  },
  {
    id: '44',
    section: 'PHP',
    question: 'Quelle est la différence entre include et require en PHP ?',
    options: [
      'require génère une erreur fatale si le fichier n\'existe pas, include génère un avertissement',
      'Aucune différence',
      'include génère une erreur fatale',
      'require ne génère pas d\'erreur'
    ],
    correctAnswer: 0
  },
  {
    id: '45',
    section: 'PHP',
    question: 'Qu\'est-ce qu\'un namespace en PHP ?',
    options: [
      'Un moyen d\'organiser le code et d\'éviter les conflits de noms',
      'Une fonction',
      'Une variable',
      'Un type de fichier'
    ],
    correctAnswer: 0
  },

  // =======================
  // SECTION 10 — WordPress
  // =======================
  {
    id: '46',
    section: 'WordPress',
    question: 'Quelle est la différence entre WordPress.com et WordPress.org ?',
    options: [
      'WordPress.com est hébergé et limité, WordPress.org est auto-hébergé et open-source',
      'Aucune différence',
      'WordPress.org est payant',
      'WordPress.com est open-source'
    ],
    correctAnswer: 0
  },
  {
    id: '47',
    section: 'WordPress',
    question: 'Qu\'est-ce qu\'un hook dans WordPress ?',
    options: [
      'Un plugin',
      'Un point d\'interception qui permet d\'exécuter du code personnalisé à des moments précis',
      'Un thème',
      'Un fichier système'
    ],
    correctAnswer: 1
  },
  {
    id: '48',
    section: 'WordPress',
    question: 'Quelle est la différence entre un action hook et un filter hook ?',
    options: [
      'Les actions exécutent du code, les filtres modifient des données',
      'Aucune différence',
      'Les filtres exécutent du code',
      'Les actions modifient des données uniquement'
    ],
    correctAnswer: 0
  },
  {
    id: '49',
    section: 'WordPress',
    question: 'Qu\'est-ce qu\'un custom post type dans WordPress ?',
    options: [
      'Un type de plugin',
      'Un type de contenu personnalisé créé pour des besoins spécifiques',
      'Un thème',
      'Un fichier système'
    ],
    correctAnswer: 1
  },
  {
    id: '50',
    section: 'WordPress',
    question: 'Qu\'est-ce que la taxonomie dans WordPress ?',
    options: [
      'Un système de classification pour organiser le contenu (catégories, étiquettes, etc.)',
      'Un plugin',
      'Un thème',
      'Un type de fichier'
    ],
    correctAnswer: 0
  },

  // =======================
  // SECTION 11 — Avancé / Révision
  // =======================
  {
    id: '51',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un CDN (Content Delivery Network) ?',
    options: [
      'Un réseau de serveurs qui distribue le contenu depuis des emplacements géographiques proches',
      'Un type de base de données',
      'Un protocole de communication',
      'Un type de navigateur'
    ],
    correctAnswer: 0
  },
  {
    id: '52',
    section: 'Révision',
    question: 'Qu\'est-ce que le minification en développement web ?',
    options: [
      'Agrandir les fichiers',
      'Réduire la taille des fichiers en supprimant les espaces et commentaires inutiles',
      'Ajouter du code',
      'Changer les couleurs'
    ],
    correctAnswer: 1
  },
  {
    id: '53',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un certificat SSL/TLS ?',
    options: [
      'Un fichier numérique qui authentifie l\'identité d\'un site et chiffre les données',
      'Un protocole de transfert',
      'Un type de serveur',
      'Un type de base de données'
    ],
    correctAnswer: 0
  },
  {
    id: '54',
    section: 'Révision',
    question: 'Qu\'est-ce que le lazy loading ?',
    options: [
      'Charger tout immédiatement',
      'Supprimer des images',
      'Une technique qui charge les ressources seulement quand elles sont nécessaires',
      'Désactiver le cache'
    ],
    correctAnswer: 2
  },
  {
    id: '55',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un SPA (Single Page Application) ?',
    options: [
      'Une application web qui charge une seule page HTML et met à jour le contenu dynamiquement',
      'Un site avec plusieurs pages',
      'Un framework JavaScript',
      'Un type de serveur'
    ],
    correctAnswer: 0
  },

  // =======================
  // QUESTIONS 56 → 100
  // =======================
  {
    id: '56',
    section: 'Révision',
    question: 'Qu\'est-ce que le versioning (ex: Git) ?',
    options: [
      'Un type de base de données',
      'Un système de gestion de versions pour suivre les modifications du code',
      'Un outil de déploiement',
      'Un type de serveur'
    ],
    correctAnswer: 1
  },
  {
    id: '57',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un environnement de développement local ?',
    options: [
      'Un environnement de test installé sur votre ordinateur pour développer sans affecter le site en production',
      'Un serveur en ligne',
      'Un outil de versioning',
      'Un type de base de données'
    ],
    correctAnswer: 0
  },
  {
    id: '58',
    section: 'Révision',
    question: 'Qu\'est-ce que le responsive breakpoint ?',
    options: [
      'Un point de rupture dans le code',
      'Un bug',
      'Un point où le design change pour s\'adapter à une taille d\'écran spécifique',
      'Un type de média query'
    ],
    correctAnswer: 2
  },
  {
    id: '59',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un thème enfant WordPress ?',
    options: [
      'Un thème qui hérite des fonctionnalités d\'un thème parent et permet des modifications sans perdre les mises à jour',
      'Un thème pour enfants',
      'Un thème obsolète',
      'Un type de template'
    ],
    correctAnswer: 0
  },
  {
    id: '60',
    section: 'Révision',
    question: 'Qu\'est-ce que le white screen of death (écran blanc) dans WordPress ?',
    options: [
      'Un thème blanc',
      'Une fonction PHP',
      'Une erreur fatale qui affiche un écran blanc au lieu du site',
      'Une fonctionnalité normale'
    ],
    correctAnswer: 2
  },
  {
    id: '61',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un transients dans WordPress ?',
    options: [
      'Un type de post',
      'Une fonction PHP',
      'Un type de fichier',
      'Un mécanisme de cache temporaire pour stocker des données avec expiration'
    ],
    correctAnswer: 3
  },
  {
    id: '62',
    section: 'Révision',
    question: 'Qu\'est-ce que le permalink dans WordPress ?',
    options: [
      'Un lien temporaire',
      'Un type de post',
      'Une fonction PHP',
      'L\'URL permanente et lisible d\'une page ou d\'un article'
    ],
    correctAnswer: 3
  },
  {
    id: '63',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un custom field (champ personnalisé) dans WordPress ?',
    options: [
      'Un champ système',
      'Un type de post',
      'Une taxonomie',
      'Un champ de métadonnées personnalisé pour ajouter des informations supplémentaires au contenu'
    ],
    correctAnswer: 3
  },
  {
    id: '64',
    section: 'Révision',
    question: 'Qu\'est-ce que le loop WordPress ?',
    options: [
      'Une boucle infinie',
      'Un type de post',
      'Une fonction PHP',
      'Le code PHP qui affiche les articles WordPress'
    ],
    correctAnswer: 3
  },
  {
    id: '65',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un widget area dans WordPress ?',
    options: [
      'Un type de post',
      'Une fonction PHP',
      'Un type de fichier',
      'Une zone prédéfinie où on peut ajouter des widgets'
    ],
    correctAnswer: 3
  },
  {
    id: '66',
    section: 'Révision',
    question: 'Qu\'est-ce que le REST API de WordPress ?',
    options: [
      'Un type de post',
      'Une fonction PHP',
      'Un type de base de données',
      'Une interface qui permet d\'accéder aux données WordPress via HTTP'
    ],
    correctAnswer: 3
  },
  {
    id: '67',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un nonce dans WordPress ?',
    options: [
      'Un type de post',
      'Une fonction PHP',
      'Un type de fichier',
      'Un token de sécurité pour protéger les formulaires contre les attaques CSRF'
    ],
    correctAnswer: 3
  },
  {
    id: '68',
    section: 'Révision',
    question: 'Qu\'est-ce que le multisite WordPress ?',
    options: [
      'Un type de post',
      'Une fonction PHP',
      'Un type de serveur',
      'Une fonctionnalité qui permet de gérer plusieurs sites depuis une seule installation'
    ],
    correctAnswer: 3
  },
  {
    id: '69',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un cron job dans WordPress ?',
    options: [
      'Un type de post',
      'Une fonction PHP',
      'Un type de fichier',
      'Une tâche planifiée qui s\'exécute automatiquement à intervalles réguliers'
    ],
    correctAnswer: 3
  },
  {
    id: '70',
    section: 'Révision',
    question: 'Qu\'est-ce que le object caching dans WordPress ?',
    options: [
      'Un plugin de cache',
      'Une fonction PHP',
      'Un type de base de données',
      'Un système qui stocke les objets PHP en mémoire pour accélérer les requêtes'
    ],
    correctAnswer: 3
  },
  {
    id: '71',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un customizer dans WordPress ?',
    options: [
      'Un type de post',
      'Une fonction PHP',
      'Un type de fichier',
      'L\'interface qui permet de personnaliser le thème en temps réel'
    ],
    correctAnswer: 3
  },
  {
    id: '72',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un template hierarchy dans WordPress ?',
    options: [
      'Un type de post',
      'Une fonction PHP',
      'Un type de base de données',
      'Le système qui détermine quel fichier de template utiliser pour afficher le contenu'
    ],
    correctAnswer: 3
  },
  {
    id: '73',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un meta box dans WordPress ?',
    options: [
      'Un type de post',
      'Une fonction PHP',
      'Un type de fichier',
      'Une boîte personnalisée dans l\'éditeur pour ajouter des champs supplémentaires'
    ],
    correctAnswer: 3
  },
  {
    id: '74',
    section: 'Révision',
    question: 'Qu\'est-ce que le query string dans une URL ?',
    options: [
      'Une partie du nom de domaine',
      'Un protocole HTTP',
      'Un type de serveur',
      'La partie après le ? qui contient des paramètres (ex: ?page=2)'
    ],
    correctAnswer: 3
  },
  {
    id: '75',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un Sitemap XML ?',
    options: [
      'Un plan du site visuel',
      'Un protocole de communication',
      'Un type de serveur',
      'Un fichier XML qui liste les pages d\'un site pour les moteurs de recherche'
    ],
    correctAnswer: 3
  },
  {
    id: '76',
    section: 'Révision',
    question: 'Qu\'est-ce que le CORS (Cross-Origin Resource Sharing) ?',
    options: [
      'Un type de base de données',
      'Un protocole de sécurité',
      'Un type de serveur',
      'Un mécanisme qui permet à un site d\'accéder à des ressources d\'un autre domaine'
    ],
    correctAnswer: 3
  },
  {
    id: '77',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un webhook ?',
    options: [
      'Un protocole HTTP',
      'Un type de serveur',
      'Un type de fichier',
      'Un mécanisme qui envoie des données à une URL quand un événement se produit'
    ],
    correctAnswer: 3
  },
  {
    id: '78',
    section: 'Révision',
    question: 'Qu\'est-ce que le progressive enhancement ?',
    options: [
      'Une technique qui améliore progressivement',
      'Un framework CSS',
      'Un type de serveur',
      'Une approche qui commence par une base fonctionnelle et ajoute des améliorations progressives'
    ],
    correctAnswer: 3
  },
  {
    id: '79',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un polyfill en JavaScript ?',
    options: [
      'Un type de variable',
      'Un framework',
      'Un type de serveur',
      'Un code qui fournit une fonctionnalité manquante dans les anciens navigateurs'
    ],
    correctAnswer: 3
  },
  {
    id: '80',
    section: 'Révision',
    question: 'Qu\'est-ce que le tree shaking en JavaScript ?',
    options: [
      'Un type de boucle',
      'Un framework',
      'Un type de variable',
      'Une technique qui supprime le code inutilisé lors de la compilation'
    ],
    correctAnswer: 3
  },
  {
    id: '81',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un service worker ?',
    options: [
      'Un framework JavaScript',
      'Un type de variable',
      'Un type de serveur',
      'Un script qui fonctionne en arrière-plan et permet des fonctionnalités hors ligne'
    ],
    correctAnswer: 3
  },
  {
    id: '82',
    section: 'Révision',
    question: 'Qu\'est-ce que le JAMstack ?',
    options: [
      'Un framework JavaScript',
      'Un protocole de communication',
      'Un type de base de données',
      'Une architecture web basée sur JavaScript, APIs et Markup'
    ],
    correctAnswer: 3
  },
  {
    id: '83',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un microservice ?',
    options: [
      'Un petit framework',
      'Un type de base de données',
      'Un type de serveur',
      'Une architecture où une application est composée de petits services indépendants'
    ],
    correctAnswer: 3
  },
  {
    id: '84',
    section: 'Révision',
    question: 'Qu\'est-ce que le CI/CD (Continuous Integration/Continuous Deployment) ?',
    options: [
      'Un type de base de données',
      'Un outil de versioning',
      'Un type de serveur',
      'Des pratiques qui automatisent le test et le déploiement du code'
    ],
    correctAnswer: 3
  },
  {
    id: '85',
    section: 'Révision',
    question: 'Qu\'est-ce qu\'un container (Docker) ?',
    options: [
      'Un type de fichier',
      'Un framework',
      'Un type de serveur',
      'Une unité logicielle qui encapsule une application et ses dépendances'
    ],
    correctAnswer: 3
  },
  {
    id: '86',
    section: 'Révision',
    question: 'Qu\'est-ce que le serverless ?',
    options: [
      'Sans serveur',
      'Un framework',
      'Un type de base de données',
      'Une architecture où le code s\'exécute sans gérer de serveur (ex: AWS Lambda)'
    ],
    correctAnswer: 3
  },
  {
    id: '87',
    section: 'Révision',
    question: 'Qu\'est-ce que le GraphQL ?',
    options: [
      'Un type de base de données',
      'Un protocole de communication',
      'Un framework CSS',
      'Un langage de requête pour APIs qui permet de demander exactement les données nécessaires'
    ],
    correctAnswer: 3
  },
  {
    id: '88',
    section: 'Révision',
    question: 'Qu\'est-ce que le WebAssembly (WASM) ?',
    options: [
      'Un langage de programmation',
      'Un framework JavaScript',
      'Un type de serveur',
      'Un format binaire qui permet d\'exécuter du code à haute performance dans le navigateur'
    ],
    correctAnswer: 3
  },
  {
    id: '89',
    section: 'Révision',
    question: 'Qu\'est-ce que le OAuth ?',
    options: [
      'Un type de base de données',
      'Un protocole de sécurité',
      'Un type de serveur',
      'Un protocole d\'autorisation qui permet d\'accéder à des ressources sans partager le mot de passe'
    ],
    correctAnswer: 3
  },
  {
    id: '90',
    section: 'Révision',
    question: 'Qu\'est-ce que le JWT (JSON Web Token) ?',
    options: [
      'Un type de fichier',
      'Un protocole HTTP',
      'Un type de serveur',
      'Un format compact pour transmettre des informations de manière sécurisée'
    ],
    correctAnswer: 3
  },
  {
    id: '91',
    section: 'Révision',
    question: 'Qu\'est-ce que le rate limiting ?',
    options: [
      'Un type de cache',
      'Un protocole HTTP',
      'Un type de serveur',
      'Une technique qui limite le nombre de requêtes qu\'un utilisateur peut faire'
    ],
    correctAnswer: 3
  },
  {
    id: '92',
    section: 'Révision',
    question: 'Qu\'est-ce que le load balancing ?',
    options: [
      'Un type de base de données',
      'Un protocole de communication',
      'Un type de cache',
      'La distribution du trafic entre plusieurs serveurs pour améliorer les performances'
    ],
    correctAnswer: 3
  },
  {
    id: '93',
    section: 'Révision',
    question: 'Qu\'est-ce que le database indexing ?',
    options: [
      'Un type de plugin',
      'Un thème',
      'Un type de serveur',
      'Une structure qui accélère les recherches dans une base de données'
    ],
    correctAnswer: 3
  },
  {
    id: '94',
    section: 'Révision',
    question: 'Qu\'est-ce que le ACID dans les bases de données ?',
    options: [
      'Un type de base de données',
      'Un plugin',
      'Un thème',
      'Un ensemble de propriétés (Atomicity, Consistency, Isolation, Durability) garantissant la fiabilité'
    ],
    correctAnswer: 3
  },
  {
    id: '95',
    section: 'Révision',
    question: 'Qu\'est-ce que le SQL injection ?',
    options: [
      'Un type de requête',
      'Un plugin de sécurité',
      'Un type de base de données',
      'Une attaque qui insère du code SQL malveillant dans une requête'
    ],
    correctAnswer: 3
  },
  {
    id: '96',
    section: 'Révision',
    question: 'Qu\'est-ce que le XSS (Cross-Site Scripting) ?',
    options: [
      'Un type de CSS',
      'Un plugin WordPress',
      'Un type de serveur',
      'Une attaque qui injecte du code JavaScript malveillant dans une page web'
    ],
    correctAnswer: 3
  },
  {
    id: '97',
    section: 'Révision',
    question: 'Qu\'est-ce que le CSRF (Cross-Site Request Forgery) ?',
    options: [
      'Un type de cache',
      'Un plugin de sécurité',
      'Un type de serveur',
      'Une attaque qui force un utilisateur à exécuter des actions non désirées'
    ],
    correctAnswer: 3
  },
  {
    id: '98',
    section: 'Révision',
    question: 'Qu\'est-ce que le hashing de mot de passe ?',
    options: [
      'Stocker le mot de passe en clair',
      'Un plugin',
      'Un thème',
      'Transformer un mot de passe en une chaîne irréversible pour la sécurité'
    ],
    correctAnswer: 3
  },
  {
    id: '99',
    section: 'Révision',
    question: 'Qu\'est-ce que le progressive web app (PWA) ?',
    options: [
      'Un type de plugin',
      'Un thème WordPress',
      'Un type de serveur',
      'Une application web qui fonctionne comme une application native'
    ],
    correctAnswer: 3
  },
  {
    id: '100',
    section: 'Révision',
    question: 'Qu\'est-ce que le headless CMS ?',
    options: [
      'Un CMS sans interface',
      'Un CMS qui ne fonctionne pas',
      'Un CMS uniquement pour mobile',
      'Un CMS où le backend de gestion de contenu est séparé du frontend de présentation'
    ],
    correctAnswer: 3
  }


  // =======================
  // FIN — 100 QUESTIONS
  // =======================
];


export const sections = Array.from(new Set(questions.map(q => q.section)));

