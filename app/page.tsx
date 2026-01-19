'use client';

import { useRouter } from 'next/navigation';
import { questions, sections } from '@/data/questions';

export default function Home() {
  const router = useRouter();
  const totalQuestions = questions.length;
  const totalSections = sections.length;

  const handleStartTest = () => {
    router.push('/test');
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
          Test de Prérequis WordPress
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Évaluation de vos connaissances de base avant d'apprendre WordPress
        </p>

        <div style={{ 
          background: '#f3f4f6', 
          padding: '1.5rem', 
          borderRadius: '0.5rem', 
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Informations du test</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.5rem 0', fontSize: '1.1rem' }}>
              <strong>Durée :</strong> 1 heure (60 minutes)
            </li>
            <li style={{ padding: '0.5rem 0', fontSize: '1.1rem' }}>
              <strong>Nombre de sections :</strong> {totalSections}
            </li>
            <li style={{ padding: '0.5rem 0', fontSize: '1.1rem' }}>
              <strong>Nombre de questions :</strong> {totalQuestions}
            </li>
            <li style={{ padding: '0.5rem 0', fontSize: '1.1rem' }}>
              <strong>Type :</strong> Questions à choix multiple
            </li>
            <li style={{ padding: '0.5rem 0', fontSize: '1.1rem' }}>
              <strong>Score minimum requis :</strong> 50%
            </li>
          </ul>
        </div>

        <div style={{ 
          background: '#fef3c7', 
          padding: '1.5rem', 
          borderRadius: '0.5rem', 
          marginBottom: '2rem',
          border: '1px solid #fbbf24'
        }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#92400e' }}>
            ⚠️ Instructions importantes
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', color: '#78350f' }}>
            <li style={{ padding: '0.25rem 0' }}>• Le test se déroulera en mode plein écran</li>
            <li style={{ padding: '0.25rem 0' }}>• Si vous quittez le test, il sera annulé</li>
            <li style={{ padding: '0.25rem 0' }}>• Vous avez 1 heure pour terminer</li>
            <li style={{ padding: '0.25rem 0' }}>• Vous pouvez recommencer tant que vous n'avez pas obtenu 50%</li>
            <li style={{ padding: '0.25rem 0' }}>• Les résultats avec les bonnes réponses seront affichés à la fin</li>
          </ul>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button 
            onClick={handleStartTest}
            className="btn btn-primary"
            style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}
          >
            Commencer le test
          </button>
        </div>
      </div>
    </div>
  );
}

