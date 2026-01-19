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
    question: "Qu'est-ce qu'un ordinateur ?",
    options: [
      'Un appareil électronique capable de traiter des données',
      'Un simple écran',
      'Un clavier',
      'Un logiciel'
    ],
    correctAnswer: 0
  },
  {
    id: '2',
    section: 'Ordinateur et Téléphone',
    question: 'Quel est le rôle principal d’un ordinateur ?',
    options: [
      'Téléphoner',
      'Traiter, stocker et afficher des informations',
      'Se connecter uniquement à Internet',
      'Imprimer'
    ],
    correctAnswer: 1
  },
  {
    id: '3',
    section: 'Ordinateur et Téléphone',
    question: "Qu'est-ce qu'un système d'exploitation ?",
    options: [
      'Un logiciel qui gère l’ordinateur',
      'Un navigateur',
      'Un fichier',
      'Un antivirus'
    ],
    correctAnswer: 0
  },
  {
    id: '4',
    section: 'Ordinateur et Téléphone',
    question: 'Quel est un système d’exploitation ?',
    options: ['Windows', 'Google', 'Chrome', 'Facebook'],
    correctAnswer: 0
  },
  {
    id: '5',
    section: 'Ordinateur et Téléphone',
    question: 'Android est :',
    options: [
      'Un téléphone',
      'Un système d’exploitation mobile',
      'Une application',
      'Un navigateur'
    ],
    correctAnswer: 1
  },

  // =======================
  // SECTION 2 — Fichiers & Dossiers
  // =======================
  {
    id: '6',
    section: 'Fichiers et Dossiers',
    question: "Qu'est-ce qu'un dossier ?",
    options: [
      'Un fichier',
      'Un conteneur pour organiser les fichiers',
      'Une application',
      'Un disque dur'
    ],
    correctAnswer: 1
  },
  {
    id: '7',
    section: 'Fichiers et Dossiers',
    question: "Qu'est-ce qu'un fichier ?",
    options: [
      'Un programme',
      'Un ensemble de données enregistrées',
      'Un dossier',
      'Un système'
    ],
    correctAnswer: 1
  },
  {
    id: '8',
    section: 'Fichiers et Dossiers',
    question: 'Quelle extension correspond à une image ?',
    options: ['.txt', '.jpg', '.exe', '.php'],
    correctAnswer: 1
  },
  {
    id: '9',
    section: 'Fichiers et Dossiers',
    question: 'Quel fichier est une vidéo ?',
    options: ['film.mp4', 'image.png', 'doc.txt', 'index.html'],
    correctAnswer: 0
  },
  {
    id: '10',
    section: 'Fichiers et Dossiers',
    question: 'Pour naviguer entre dossiers on utilise :',
    options: [
      'Le navigateur web',
      'L’explorateur de fichiers',
      'WordPress',
      'Le BIOS'
    ],
    correctAnswer: 1
  },

  // =======================
  // SECTION 3 — Applications
  // =======================
  {
    id: '11',
    section: 'Applications',
    question: "Qu'est-ce qu'une application ?",
    options: [
      'Un dossier',
      'Un programme réalisant des tâches',
      'Un site web',
      'Un fichier image'
    ],
    correctAnswer: 1
  },
  {
    id: '12',
    section: 'Applications',
    question: 'Word est :',
    options: ['Un navigateur', 'Un logiciel', 'Un site', 'Un système'],
    correctAnswer: 1
  },
  {
    id: '13',
    section: 'Applications',
    question: 'Une application web fonctionne :',
    options: [
      'Sans Internet',
      'Dans un navigateur',
      'Sur clé USB',
      'Uniquement sur téléphone'
    ],
    correctAnswer: 1
  },
  {
    id: '14',
    section: 'Applications',
    question: 'WhatsApp Web est :',
    options: [
      'Une application installée',
      'Une application web',
      'Un logiciel PC',
      'Un plugin'
    ],
    correctAnswer: 1
  },
  {
    id: '15',
    section: 'Applications',
    question: 'Play Store sert à :',
    options: [
      'Télécharger des applications',
      'Naviguer sur Internet',
      'Créer des fichiers',
      'Installer Windows'
    ],
    correctAnswer: 0
  },

  // =======================
  // SECTION 4 — Internet & Navigateur
  // =======================
  {
    id: '16',
    section: 'Navigateur',
    question: "Qu'est-ce qu'un navigateur ?",
    options: [
      'Un moteur de recherche',
      'Un logiciel pour afficher des sites web',
      'Un serveur',
      'Un site web'
    ],
    correctAnswer: 1
  },
  {
    id: '17',
    section: 'Navigateur',
    question: 'Quel est un navigateur ?',
    options: ['Chrome', 'Google', 'Internet', 'WordPress'],
    correctAnswer: 0
  },
  {
    id: '18',
    section: 'Navigateur',
    question: 'Une URL est :',
    options: [
      'Une application',
      'Une adresse web',
      'Un fichier',
      'Un dossier'
    ],
    correctAnswer: 1
  },
  {
    id: '19',
    section: 'Navigateur',
    question: 'HTTPS signifie :',
    options: [
      'Site sécurisé',
      'Site lent',
      'Site gratuit',
      'Site hors ligne'
    ],
    correctAnswer: 0
  },
  {
    id: '20',
    section: 'Navigateur',
    question: 'Google est :',
    options: [
      'Internet',
      'Un navigateur',
      'Un moteur de recherche',
      'Un site hébergé'
    ],
    correctAnswer: 2
  },

  // =======================
  // SECTION 5 — Web
  // =======================
  {
    id: '21',
    section: 'Web',
    question: "Qu'est-ce qu'un site web ?",
    options: [
      'Une application PC',
      'Un ensemble de pages accessibles sur Internet',
      'Un logiciel',
      'Un dossier'
    ],
    correctAnswer: 1
  },
  {
    id: '22',
    section: 'Web',
    question: 'Facebook est :',
    options: [
      'Un site statique',
      'Une application web',
      'Un langage',
      'Un serveur'
    ],
    correctAnswer: 1
  },
  {
    id: '23',
    section: 'Web',
    question: 'Un site responsive :',
    options: [
      'Fonctionne sur tous les écrans',
      'Fonctionne seulement sur PC',
      'Est payant',
      'Est lent'
    ],
    correctAnswer: 0
  },
  {
    id: '24',
    section: 'Web',
    question: 'Un CMS sert à :',
    options: [
      'Coder sans Internet',
      'Gérer un site sans coder',
      'Créer un langage',
      'Installer Windows'
    ],
    correctAnswer: 1
  },
  {
    id: '25',
    section: 'Web',
    question: 'WordPress est un :',
    options: ['Framework', 'CMS', 'Langage', 'Serveur'],
    correctAnswer: 1
  },

  // =======================
  // SECTION 6 — HTML
  // =======================
  {
    id: '26',
    section: 'HTML',
    question: 'HTML signifie :',
    options: [
      'HyperText Markup Language',
      'High Text Modern Language',
      'Home Tool Markup Language',
      'Hyper Tool Language'
    ],
    correctAnswer: 0
  },
  {
    id: '27',
    section: 'HTML',
    question: 'HTML sert à :',
    options: [
      'Styliser',
      'Structurer une page',
      'Animer',
      'Stocker des données'
    ],
    correctAnswer: 1
  },
  {
    id: '28',
    section: 'HTML',
    question: 'Balise titre principale :',
    options: ['<h1>', '<p>', '<div>', '<span>'],
    correctAnswer: 0
  },
  {
    id: '29',
    section: 'HTML',
    question: 'Créer un lien :',
    options: ['<a>', '<link>', '<url>', '<href>'],
    correctAnswer: 0
  },
  {
    id: '30',
    section: 'HTML',
    question: 'Afficher une image :',
    options: ['<img>', '<photo>', '<image>', '<pic>'],
    correctAnswer: 0
  },

  // =======================
  // SECTION 7 — CSS
  // =======================
  {
    id: '31',
    section: 'CSS',
    question: 'CSS signifie :',
    options: [
      'Creative Style Sheet',
      'Cascading Style Sheets',
      'Computer Style Sheets',
      'Color Style System'
    ],
    correctAnswer: 1
  },
  {
    id: '32',
    section: 'CSS',
    question: 'CSS sert à :',
    options: [
      'Structurer',
      'Styliser',
      'Programmer',
      'Sécuriser'
    ],
    correctAnswer: 1
  },
  {
    id: '33',
    section: 'CSS',
    question: 'Changer la couleur du texte :',
    options: ['color', 'background', 'font', 'text'],
    correctAnswer: 0
  },
  {
    id: '34',
    section: 'CSS',
    question: 'Responsive design signifie :',
    options: [
      'Design fixe',
      'Adapté à tous écrans',
      'Design lent',
      'Design mobile seulement'
    ],
    correctAnswer: 1
  },
  {
    id: '35',
    section: 'CSS',
    question: 'Flexbox sert à :',
    options: [
      'Positionner les éléments',
      'Créer des images',
      'Créer des liens',
      'Écrire du texte'
    ],
    correctAnswer: 0
  },

  // =======================
  // SECTION 8 — JavaScript
  // =======================
  {
    id: '36',
    section: 'JavaScript',
    question: 'JavaScript est :',
    options: [
      'Un langage frontend',
      'Un langage backend uniquement',
      'Un CMS',
      'Un serveur'
    ],
    correctAnswer: 0
  },
  {
    id: '37',
    section: 'JavaScript',
    question: 'JavaScript sert à :',
    options: [
      'Ajouter de l’interactivité',
      'Styliser',
      'Créer base de données',
      'Héberger un site'
    ],
    correctAnswer: 0
  },
  {
    id: '38',
    section: 'JavaScript',
    question: 'JavaScript s’exécute :',
    options: [
      'Sur le serveur seulement',
      'Dans le navigateur',
      'Dans le CSS',
      'Dans WordPress uniquement'
    ],
    correctAnswer: 1
  },
  {
    id: '39',
    section: 'JavaScript',
    question: 'Déclarer une variable :',
    options: [
      'let x = 5;',
      'var = 5;',
      'int x;',
      'x := 5'
    ],
    correctAnswer: 0
  },
  {
    id: '40',
    section: 'JavaScript',
    question: 'JavaScript peut manipuler :',
    options: [
      'Le DOM',
      'Le serveur',
      'La base MySQL',
      'PHP'
    ],
    correctAnswer: 0
  },

  // =======================
  // SECTION 9 — PHP
  // =======================
  {
    id: '41',
    section: 'PHP',
    question: 'PHP est un langage :',
    options: [
      'Frontend',
      'Backend',
      'Design',
      'Mobile'
    ],
    correctAnswer: 1
  },
  {
    id: '42',
    section: 'PHP',
    question: 'PHP s’exécute :',
    options: [
      'Dans le navigateur',
      'Sur le serveur',
      'Dans le HTML',
      'Dans le CSS'
    ],
    correctAnswer: 1
  },
  {
    id: '43',
    section: 'PHP',
    question: 'WordPress est écrit en :',
    options: ['Java', 'PHP', 'Python', 'C++'],
    correctAnswer: 1
  },
  {
    id: '44',
    section: 'PHP',
    question: 'Afficher du texte :',
    options: ['echo', 'print()', 'console.log', 'alert'],
    correctAnswer: 0
  },
  {
    id: '45',
    section: 'PHP',
    question: 'PHP communique avec :',
    options: [
      'La base de données',
      'Le CSS',
      'Le navigateur directement',
      'HTML seulement'
    ],
    correctAnswer: 0
  },

  // =======================
  // SECTION 10 — WordPress
  // =======================
  {
    id: '46',
    section: 'WordPress',
    question: 'WordPress est :',
    options: [
      'Payant',
      'Open-source',
      'Privé',
      'Un langage'
    ],
    correctAnswer: 1
  },
  {
    id: '47',
    section: 'WordPress',
    question: 'Extension WordPress =',
    options: ['Thème', 'Plugin', 'Fichier', 'Script'],
    correctAnswer: 1
  },
  {
    id: '48',
    section: 'WordPress',
    question: 'Le thème gère :',
    options: [
      'Le design',
      'La base',
      'Le serveur',
      'La sécurité'
    ],
    correctAnswer: 0
  },
  {
    id: '49',
    section: 'WordPress',
    question: 'wp-config.php contient :',
    options: [
      'Le design',
      'Les infos de base de données',
      'Les images',
      'Les plugins'
    ],
    correctAnswer: 1
  },
  {
    id: '50',
    section: 'WordPress',
    question: 'wp-admin permet :',
    options: [
      'Voir le site',
      'Administrer le site',
      'Changer navigateur',
      'Installer Windows'
    ],
    correctAnswer: 1
  },

  // =======================
  // SECTION 11 — Avancé / Révision
  // =======================
  {
    id: '51',
    section: 'Révision',
    question: 'WooCommerce sert à :',
    options: [
      'Créer un blog',
      'Créer une boutique en ligne',
      'Créer un forum',
      'Créer un portfolio'
    ],
    correctAnswer: 1
  },
  {
    id: '52',
    section: 'Révision',
    question: 'Un hébergement web est :',
    options: [
      'Un serveur en ligne',
      'Un logiciel',
      'Un navigateur',
      'Un plugin'
    ],
    correctAnswer: 0
  },
  {
    id: '53',
    section: 'Révision',
    question: 'Un nom de domaine est :',
    options: [
      'Une IP',
      'Une adresse web',
      'Un fichier',
      'Un serveur'
    ],
    correctAnswer: 1
  },
  {
    id: '54',
    section: 'Révision',
    question: 'HTTPS améliore :',
    options: ['Sécurité', 'Design', 'Vitesse', 'Images'],
    correctAnswer: 0
  },
  {
    id: '55',
    section: 'Révision',
    question: 'SEO signifie :',
    options: [
      'Search Engine Optimization',
      'Secure Email Option',
      'Site Easy Online',
      'Search Engine Office'
    ],
    correctAnswer: 0
  },

  // =======================
  // QUESTIONS 56 → 100
  // =======================
  {
    id: '56',
    section: 'Révision',
    question: 'Un site lent :',
    options: [
      'Attire les visiteurs',
      'Fait fuir les visiteurs',
      'Améliore Google',
      'Est normal'
    ],
    correctAnswer: 1
  },
  {
    id: '57',
    section: 'Révision',
    question: 'Une sauvegarde sert à :',
    options: [
      'Décorer',
      'Restaurer le site',
      'Coder',
      'Publier'
    ],
    correctAnswer: 1
  },
  {
    id: '58',
    section: 'Révision',
    question: 'Un plugin inutile :',
    options: [
      'Accélère le site',
      'Ralentit le site',
      'Sécurise',
      'Optimise'
    ],
    correctAnswer: 1
  },
  {
    id: '59',
    section: 'Révision',
    question: 'Un thème premium est :',
    options: [
      'Toujours gratuit',
      'Souvent payant',
      'Illégal',
      'Inutile'
    ],
    correctAnswer: 1
  },
  {
    id: '60',
    section: 'Révision',
    question: 'Un site professionnel doit être :',
    options: [
      'Rapide et sécurisé',
      'Lent',
      'Sans mobile',
      'Sans contenu'
    ],
    correctAnswer: 0
  },
  {
    id: '61',
    section: 'Révision',
    question: 'Le cache d’un site sert à :',
    options: [
      'Ralentir le site',
      'Accélérer le chargement',
      'Supprimer le site',
      'Créer des pages'
    ],
    correctAnswer: 1
  },
  {
    id: '62',
    section: 'Révision',
    question: 'Un CDN permet :',
    options: [
      'D’héberger des emails',
      'D’accélérer un site mondialement',
      'De coder',
      'De créer un thème'
    ],
    correctAnswer: 1
  },
  {
    id: '63',
    section: 'Révision',
    question: 'Un site WordPress peut fonctionner sans thème ?',
    options: ['Oui', 'Non', 'Seulement en local', 'Uniquement avec PHP'],
    correctAnswer: 1
  },
  {
    id: '64',
    section: 'Révision',
    question: 'Un plugin de sécurité sert à :',
    options: [
      'Ajouter des images',
      'Protéger le site',
      'Changer le design',
      'Créer des pages'
    ],
    correctAnswer: 1
  },
  {
    id: '65',
    section: 'Révision',
    question: 'Une mise à jour WordPress sert à :',
    options: [
      'Ajouter des bugs',
      'Améliorer sécurité et performances',
      'Supprimer le site',
      'Changer le logo'
    ],
    correctAnswer: 1
  },
  {
    id: '66',
    section: 'Révision',
    question: 'Le fichier .htaccess sert à :',
    options: [
      'Gérer les règles serveur',
      'Créer du design',
      'Stocker images',
      'Écrire HTML'
    ],
    correctAnswer: 0
  },
  {
    id: '67',
    section: 'Révision',
    question: 'Un constructeur de pages est :',
    options: ['Elementor', 'PHP', 'MySQL', 'Apache'],
    correctAnswer: 0
  },
  {
    id: '68',
    section: 'Révision',
    question: 'Elementor est :',
    options: [
      'Un thème',
      'Un plugin',
      'Un langage',
      'Un serveur'
    ],
    correctAnswer: 1
  },
  {
    id: '69',
    section: 'Révision',
    question: 'La base de données WordPress est :',
    options: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite'],
    correctAnswer: 2
  },
  {
    id: '70',
    section: 'Révision',
    question: 'phpMyAdmin sert à :',
    options: [
      'Gérer la base de données',
      'Créer des pages',
      'Installer WordPress',
      'Modifier le thème'
    ],
    correctAnswer: 0
  },

  {
    id: '71',
    section: 'Révision',
    question: 'Un shortcode WordPress est :',
    options: [
      'Un petit code entre crochets',
      'Un plugin',
      'Un thème',
      'Une page'
    ],
    correctAnswer: 0
  },
  {
    id: '72',
    section: 'Révision',
    question: 'Gutenberg est :',
    options: [
      'L’éditeur WordPress',
      'Un thème',
      'Un plugin',
      'Un serveur'
    ],
    correctAnswer: 0
  },
  {
    id: '73',
    section: 'Révision',
    question: 'Un widget sert à :',
    options: [
      'Ajouter du contenu',
      'Gérer la base',
      'Créer un thème',
      'Coder PHP'
    ],
    correctAnswer: 0
  },
  {
    id: '74',
    section: 'Révision',
    question: 'Le menu WordPress permet :',
    options: [
      'Créer la navigation',
      'Supprimer WordPress',
      'Gérer le serveur',
      'Créer la base'
    ],
    correctAnswer: 0
  },
  {
    id: '75',
    section: 'Révision',
    question: 'Un article WordPress est :',
    options: [
      'Contenu dynamique',
      'Page système',
      'Plugin',
      'Thème'
    ],
    correctAnswer: 0
  },

  {
    id: '76',
    section: 'Révision',
    question: 'Une page WordPress est :',
    options: [
      'Contenu statique',
      'Toujours dynamique',
      'Un plugin',
      'Un thème'
    ],
    correctAnswer: 0
  },
  {
    id: '77',
    section: 'Révision',
    question: 'Les catégories servent à :',
    options: [
      'Classer les articles',
      'Créer le design',
      'Sécuriser',
      'Optimiser serveur'
    ],
    correctAnswer: 0
  },
  {
    id: '78',
    section: 'Révision',
    question: 'Les étiquettes servent à :',
    options: [
      'Décrire le contenu',
      'Changer thème',
      'Créer pages',
      'Bloquer utilisateurs'
    ],
    correctAnswer: 0
  },
  {
    id: '79',
    section: 'Révision',
    question: 'Un utilisateur WordPress peut avoir :',
    options: [
      'Un rôle',
      'Une IP',
      'Un plugin',
      'Un thème'
    ],
    correctAnswer: 0
  },
  {
    id: '80',
    section: 'Révision',
    question: 'Administrateur WordPress peut :',
    options: [
      'Tout gérer',
      'Publier seulement',
      'Lire uniquement',
      'Modifier profil'
    ],
    correctAnswer: 0
  },

  {
    id: '81',
    section: 'Révision',
    question: 'Un éditeur peut :',
    options: [
      'Gérer le site entier',
      'Publier et modifier contenus',
      'Installer plugins',
      'Supprimer WordPress'
    ],
    correctAnswer: 1
  },
  {
    id: '82',
    section: 'Révision',
    question: 'Un auteur peut :',
    options: [
      'Créer et publier ses articles',
      'Installer thèmes',
      'Gérer utilisateurs',
      'Accéder serveur'
    ],
    correctAnswer: 0
  },
  {
    id: '83',
    section: 'Révision',
    question: 'Un contributeur peut :',
    options: [
      'Soumettre sans publier',
      'Publier directement',
      'Supprimer plugins',
      'Modifier thème'
    ],
    correctAnswer: 0
  },
  {
    id: '84',
    section: 'Révision',
    question: 'Un abonné peut :',
    options: [
      'Lire et commenter',
      'Publier',
      'Administrer',
      'Coder'
    ],
    correctAnswer: 0
  },
  {
    id: '85',
    section: 'Révision',
    question: 'Un backup automatique est :',
    options: [
      'Recommandé',
      'Inutile',
      'Dangereux',
      'Interdit'
    ],
    correctAnswer: 0
  },

  {
    id: '86',
    section: 'Révision',
    question: 'Un staging est :',
    options: [
      'Copie de test du site',
      'Un plugin',
      'Un thème',
      'Un hébergement'
    ],
    correctAnswer: 0
  },
  {
    id: '87',
    section: 'Révision',
    question: 'Le mode maintenance sert à :',
    options: [
      'Bloquer temporairement le site',
      'Supprimer données',
      'Changer hébergeur',
      'Optimiser SEO'
    ],
    correctAnswer: 0
  },
  {
    id: '88',
    section: 'Révision',
    question: 'Un child theme sert à :',
    options: [
      'Modifier sans perdre mises à jour',
      'Accélérer site',
      'Sécuriser',
      'Changer base'
    ],
    correctAnswer: 0
  },
  {
    id: '89',
    section: 'Révision',
    question: 'FTP sert à :',
    options: [
      'Transférer fichiers',
      'Créer pages',
      'Naviguer web',
      'Gérer emails'
    ],
    correctAnswer: 0
  },
  {
    id: '90',
    section: 'Révision',
    question: 'FileZilla est :',
    options: [
      'Client FTP',
      'Serveur',
      'Plugin',
      'CMS'
    ],
    correctAnswer: 0
  },

  {
    id: '91',
    section: 'Révision',
    question: 'Un hébergement mutualisé est :',
    options: [
      'Partagé entre plusieurs sites',
      'Dédié',
      'Local',
      'Hors ligne'
    ],
    correctAnswer: 0
  },
  {
    id: '92',
    section: 'Révision',
    question: 'Un VPS est :',
    options: [
      'Serveur virtuel',
      'Un thème',
      'Un plugin',
      'Un navigateur'
    ],
    correctAnswer: 0
  },
  {
    id: '93',
    section: 'Révision',
    question: 'Une IP est :',
    options: [
      'Adresse serveur',
      'Plugin',
      'Thème',
      'Langage'
    ],
    correctAnswer: 0
  },
  {
    id: '94',
    section: 'Révision',
    question: 'DNS sert à :',
    options: [
      'Relier domaine et serveur',
      'Créer pages',
      'Sécuriser WordPress',
      'Créer emails'
    ],
    correctAnswer: 0
  },
  {
    id: '95',
    section: 'Révision',
    question: 'Une base de données stocke :',
    options: [
      'Les informations du site',
      'Les images seulement',
      'Le thème',
      'Le CSS'
    ],
    correctAnswer: 0
  },

  {
    id: '96',
    section: 'Révision',
    question: 'MySQL est :',
    options: [
      'Une base de données',
      'Un langage design',
      'Un CMS',
      'Un serveur'
    ],
    correctAnswer: 0
  },
  {
    id: '97',
    section: 'Révision',
    question: 'Un mot de passe fort contient :',
    options: [
      'Lettres, chiffres et symboles',
      'Seulement chiffres',
      'Seulement lettres',
      'Prénom'
    ],
    correctAnswer: 0
  },
  {
    id: '98',
    section: 'Révision',
    question: 'Le HTTPS nécessite :',
    options: [
      'Certificat SSL',
      'Plugin',
      'Thème',
      'PHP'
    ],
    correctAnswer: 0
  },
  {
    id: '99',
    section: 'Révision',
    question: 'Un site doit être sauvegardé :',
    options: [
      'Régulièrement',
      'Une seule fois',
      'Jamais',
      'Après bug'
    ],
    correctAnswer: 0
  },
  {
    id: '100',
    section: 'Révision',
    question: 'WordPress est adapté pour :',
    options: [
      'Blog',
      'Site vitrine',
      'E-commerce',
      'Toutes ces réponses'
    ],
    correctAnswer: 3
  }


  // =======================
  // FIN — 100 QUESTIONS
  // =======================
];


export const sections = Array.from(new Set(questions.map(q => q.section)));

