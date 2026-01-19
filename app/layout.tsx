import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Test de Prérequis WordPress',
  description: 'Évaluation des connaissances de base pour l\'apprentissage de WordPress',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

