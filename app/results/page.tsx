'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions, sections } from '@/data/questions';
import type { Question } from '@/data/questions';

interface TestResults {
  answers: { [key: string]: number };
  correctAnswers: number;
  totalQuestions: number;
  score: number;
  questions: Question[];
}

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<TestResults | null>(null);
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    const storedResults = sessionStorage.getItem('testResults');
    if (!storedResults) {
      router.push('/');
      return;
    }

    const parsedResults = JSON.parse(storedResults) as TestResults;
    setResults(parsedResults);
    setHasPassed(parsedResults.score >= 60);
  }, [router]);

  const handleRetake = () => {
    sessionStorage.removeItem('testResults');
    router.push('/');
  };

  if (!results) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <p>Chargement...</p>
      </div>
    );
  }

  const scoreColor = results.score >= 60 ? 'var(--success-color)' : 'var(--danger-color)';
  const scoreEmoji = results.score >= 60 ? '✅' : '❌';

  // Grouper les questions par section
  const questionsBySection = sections.map((section) => ({
    section,
    questions: questions.filter((q) => q.section === section),
  }));

  // Compter le nombre total de mauvaises réponses
  const totalWrongAnswers = questions.filter((q) => {
    const userAnswer = results.answers[q.id];
    return userAnswer !== q.correctAnswer;
  }).length;

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="card" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Résultats du Test
          </h1>
          <div style={{ 
            fontSize: '3rem', 
            marginBottom: '1rem' 
          }}>
            {scoreEmoji}
          </div>
          <div style={{ 
            fontSize: '4rem', 
            fontWeight: 'bold',
            color: scoreColor,
            marginBottom: '0.5rem'
          }}>
            {results.score.toFixed(1)}%
          </div>
          <p style={{ 
            fontSize: '1.5rem', 
            color: scoreColor,
            fontWeight: '600',
            marginBottom: '2rem'
          }}>
            {hasPassed 
              ? 'Félicitations ! Vous avez réussi le test.' 
              : 'Vous n\'avez pas atteint le score minimum de 60%. Vous pouvez recommencer.'}
          </p>
          <div style={{ 
            background: '#f3f4f6', 
            padding: '1.5rem', 
            borderRadius: '0.5rem',
            display: 'inline-block',
            marginBottom: '2rem'
          }}>
            <div style={{ fontSize: '1.2rem' }}>
              <strong>Réponses correctes:</strong> {results.correctAnswers} / {results.totalQuestions}
            </div>
          </div>
        </div>

        {/* Détails par section - Seulement les mauvaises réponses */}
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
            Questions avec réponses incorrectes
          </h2>

          {totalWrongAnswers === 0 && (
            <div style={{
              background: '#f0fdf4',
              border: '2px solid var(--success-color)',
              borderRadius: '0.5rem',
              padding: '2rem',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
              <p style={{ fontSize: '1.3rem', color: '#065f46', fontWeight: '600' }}>
                Félicitations ! Vous avez répondu correctement à toutes les questions !
              </p>
            </div>
          )}

          {questionsBySection.map(({ section, questions: sectionQuestions }) => {
            // Filtrer seulement les mauvaises réponses ou non répondues
            const wrongQuestions = sectionQuestions.filter((q) => {
              const userAnswer = results.answers[q.id];
              return userAnswer !== q.correctAnswer;
            });

            // Si toutes les questions de cette section sont correctes, ne pas afficher la section
            if (wrongQuestions.length === 0) {
              return null;
            }

            const sectionCorrect = sectionQuestions.filter(
              (q) => results.answers[q.id] === q.correctAnswer
            ).length;
            const sectionTotal = sectionQuestions.length;
            const sectionScore = (sectionCorrect / sectionTotal) * 100;

            return (
              <div key={section} style={{ marginBottom: '2.5rem' }}>
                <div style={{ 
                  background: '#f3f4f6', 
                  padding: '1rem', 
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <h3 style={{ fontSize: '1.5rem' }}>{section}</h3>
                  <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                    {sectionCorrect} / {sectionTotal} ({sectionScore.toFixed(1)}%)
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {wrongQuestions.map((question) => {
                    const userAnswer = results.answers[question.id];
                    const hasAnswered = userAnswer !== undefined;

                    return (
                      <div
                        key={question.id}
                        style={{
                          border: `2px solid ${hasAnswered ? 'var(--danger-color)' : 'var(--border-color)'}`,
                          borderRadius: '0.5rem',
                          padding: '1.5rem',
                          background: hasAnswered ? '#fef2f2' : '#f9fafb'
                        }}
                      >
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          marginBottom: '1rem'
                        }}>
                          {hasAnswered ? (
                            <span style={{ fontSize: '1.5rem' }}>❌</span>
                          ) : (
                            <span style={{ fontSize: '1.5rem' }}>⏭️</span>
                          )}
                          <strong style={{ fontSize: '1.1rem' }}>
                            {question.question}
                          </strong>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {question.options.map((option, index) => {
                            const isUserAnswer = userAnswer === index;
                            const isCorrectOption = index === question.correctAnswer;

                            return (
                              <div
                                key={index}
                                style={{
                                  padding: '0.75rem',
                                  borderRadius: '0.25rem',
                                  background: isCorrectOption
                                    ? '#d1fae5'
                                    : isUserAnswer && !isCorrectOption
                                    ? '#fee2e2'
                                    : 'white',
                                  border: `1px solid ${
                                    isCorrectOption
                                      ? 'var(--success-color)'
                                      : isUserAnswer && !isCorrectOption
                                      ? 'var(--danger-color)'
                                      : 'var(--border-color)'
                                  }`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.5rem'
                                }}
                              >
                                {isCorrectOption && (
                                  <span style={{ fontWeight: 'bold', color: 'var(--success-color)' }}>
                                    ✓ Bonne réponse
                                  </span>
                                )}
                                {isUserAnswer && !isCorrectOption && (
                                  <span style={{ fontWeight: 'bold', color: 'var(--danger-color)' }}>
                                    ✗ Votre réponse
                                  </span>
                                )}
                                <span>{option}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton pour recommencer */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '2px solid var(--border-color)'
        }}>
          {!hasPassed && (
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem'
            }}>
              Vous devez obtenir au moins 60% pour passer. Vous pouvez recommencer le test.
            </p>
          )}
          <button 
            onClick={handleRetake}
            className="btn btn-primary"
            style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
          >
            {hasPassed ? 'Refaire le test' : 'Recommencer le test'}
          </button>
        </div>
      </div>
    </div>
  );
}

