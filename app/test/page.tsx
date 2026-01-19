'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { questions, sections } from '@/data/questions';
import type { Question } from '@/data/questions';

const TEST_DURATION = 60 * 60 * 1000; // 1 heure en millisecondes
const QUESTION_TIMEOUT = 30 * 1000; // 30 secondes par question

export default function TestPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [timeRemaining, setTimeRemaining] = useState(TEST_DURATION);
  const [questionTimeRemaining, setQuestionTimeRemaining] = useState(QUESTION_TIMEOUT);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [visibilityWarning, setVisibilityWarning] = useState(false);
  const [timeoutWarning, setTimeoutWarning] = useState(false);

  const handleFinishTest = useCallback(() => {
    const correctAnswers = questions.filter(
      (q) => answers[q.id] === q.correctAnswer
    ).length;
    const score = (correctAnswers / questions.length) * 100;

    // Sauvegarder les résultats dans sessionStorage
    sessionStorage.setItem(
      'testResults',
      JSON.stringify({
        answers,
        correctAnswers,
        totalQuestions: questions.length,
        score,
        questions,
      })
    );

    router.push('/results');
  }, [answers, router]);

  // Démarrer le test et entrer en plein écran
  const startTest = useCallback(async () => {
    try {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if ((element as any).webkitRequestFullscreen) {
        await (element as any).webkitRequestFullscreen();
      } else if ((element as any).mozRequestFullScreen) {
        await (element as any).mozRequestFullScreen();
      } else if ((element as any).msRequestFullscreen) {
        await (element as any).msRequestFullscreen();
      }
      setIsFullscreen(true);
      setTestStarted(true);
    } catch (error) {
      console.error('Erreur lors de l\'entrée en plein écran:', error);
      setTestStarted(true);
    }
  }, []);

  // Gérer le compte à rebours
  useEffect(() => {
    if (!testStarted) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1000) {
          handleFinishTest();
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [testStarted, handleFinishTest]);

  // Détecter la sortie du plein écran
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );

      if (!isCurrentlyFullscreen && testStarted && isFullscreen) {
        setVisibilityWarning(true);
        setTimeout(() => {
          handleCancelTest();
        }, 2000);
      } else {
        setIsFullscreen(isCurrentlyFullscreen);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, [testStarted, isFullscreen]);

  // Détecter le changement d'onglet
  useEffect(() => {
    if (!testStarted) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setVisibilityWarning(true);
        setTimeout(() => {
          handleCancelTest();
        }, 2000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [testStarted]);

  // Empêcher la sortie avec F11, etc.
  useEffect(() => {
    if (!testStarted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F11') {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [testStarted]);

  // Timer pour chaque question (30 secondes)
  useEffect(() => {
    if (!testStarted) return;

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    // Réinitialiser le timer quand on change de question
    setQuestionTimeRemaining(QUESTION_TIMEOUT);
    setTimeoutWarning(false);

    // Vérifier si la question actuelle a déjà une réponse
    const hasAnswer = answers[currentQuestion.id] !== undefined;

    // Si la question a déjà une réponse, ne pas démarrer le timer
    if (hasAnswer) {
      return;
    }

    const interval = setInterval(() => {
      setQuestionTimeRemaining((prev) => {
        if (prev <= 1000) {
          // Timeout atteint - annuler le test
          setTimeoutWarning(true);
          setTimeout(() => {
            router.push('/');
          }, 2000);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [testStarted, currentQuestionIndex, answers, router]);

  // Réinitialiser le timer de la question quand l'utilisateur répond
  useEffect(() => {
    if (!testStarted) return;

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const hasAnswer = answers[currentQuestion.id] !== undefined;
    if (hasAnswer) {
      setQuestionTimeRemaining(QUESTION_TIMEOUT);
      setTimeoutWarning(false);
    }
  }, [answers, currentQuestionIndex, testStarted]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
    // Réinitialiser le timer quand l'utilisateur répond
    setQuestionTimeRemaining(QUESTION_TIMEOUT);
    setTimeoutWarning(false);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Si on est à la dernière question, terminer automatiquement le test
      handleFinishTest();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleCancelTest = useCallback(() => {
    if (confirm('Vous avez quitté le test. Le test sera annulé. Continuer ?')) {
      router.push('/');
    }
  }, [router]);


  const currentQuestion = questions[currentQuestionIndex];
  const currentSection = currentQuestion?.section;
  const questionsInSection = questions.filter((q) => q.section === currentSection).length;
  const currentSectionIndex = sections.indexOf(currentSection);
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (!testStarted) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'var(--bg-color)'
      }}>
        <div className="card" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
            Prêt à commencer ?
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Le test va commencer en mode plein écran. Assurez-vous d'être prêt.
          </p>
          <button onClick={startTest} className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
            Démarrer le test
          </button>
        </div>
      </div>
    );
  }

  if (visibilityWarning) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'var(--danger-color)',
        color: 'white'
      }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚠️ Attention</h1>
          <p style={{ fontSize: '1.5rem' }}>Vous avez quitté le test. Le test est annulé.</p>
        </div>
      </div>
    );
  }

  if (timeoutWarning) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'var(--danger-color)',
        color: 'white'
      }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⏱️ Timeout</h1>
          <p style={{ fontSize: '1.5rem' }}>Vous avez dépassé 30 secondes sans répondre. Le test est annulé.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-color)',
      padding: '1rem'
    }}>
      {/* En-tête avec timer et infos */}
      <div style={{ 
        background: 'var(--card-bg)', 
        padding: '1rem', 
        borderRadius: '0.5rem',
        marginBottom: '1.5rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <strong style={{ color: 'var(--text-secondary)' }}>Temps restant:</strong>
            <span style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold',
              color: timeRemaining < 5 * 60 * 1000 ? 'var(--danger-color)' : 'var(--primary-color)',
              marginLeft: '0.5rem'
            }}>
              {formatTime(timeRemaining)}
            </span>
          </div>
          <div>
            <strong style={{ color: 'var(--text-secondary)' }}>Section:</strong>
            <span style={{ marginLeft: '0.5rem' }}>
              {currentSectionIndex + 1} / {sections.length}
            </span>
          </div>
          <div>
            <strong style={{ color: 'var(--text-secondary)' }}>Question:</strong>
            <span style={{ marginLeft: '0.5rem' }}>
              {currentQuestionIndex + 1} / {questions.length}
            </span>
          </div>
          {answers[currentQuestion?.id] === undefined && (
            <div>
              <strong style={{ color: 'var(--text-secondary)' }}>Temps question:</strong>
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                color: questionTimeRemaining < 5000 ? 'var(--danger-color)' : 'var(--warning-color)',
                marginLeft: '0.5rem'
              }}>
                {Math.ceil(questionTimeRemaining / 1000)}s
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Barre de progression */}
      <div style={{ 
        background: 'var(--border-color)', 
        height: '8px', 
        borderRadius: '4px',
        marginBottom: '1.5rem',
        overflow: 'hidden'
      }}>
        <div style={{ 
          background: 'var(--primary-color)', 
          height: '100%', 
          width: `${progress}%`,
          transition: 'width 0.3s'
        }} />
      </div>

      {/* Question actuelle */}
      <div className="card">
        <div style={{ 
          background: '#f3f4f6', 
          padding: '0.75rem 1rem', 
          borderRadius: '0.5rem',
          marginBottom: '1.5rem',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)'
        }}>
          Section: {currentSection}
        </div>

        <h2 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '1.5rem',
          lineHeight: '1.4'
        }}>
          {currentQuestion.question}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {currentQuestion.options.map((option, index) => (
            <label
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem',
                border: `2px solid ${
                  answers[currentQuestion.id] === index
                    ? 'var(--primary-color)'
                    : 'var(--border-color)'
                }`,
                borderRadius: '0.5rem',
                cursor: 'pointer',
                background: answers[currentQuestion.id] === index ? '#eff6ff' : 'white',
                transition: 'all 0.2s'
              }}
              onClick={() => handleAnswerSelect(currentQuestion.id, index)}
            >
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                checked={answers[currentQuestion.id] === index}
                onChange={() => handleAnswerSelect(currentQuestion.id, index)}
                style={{ marginRight: '1rem', width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '1.1rem' }}>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        gap: '1rem',
        marginTop: '1.5rem'
      }}>
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="btn btn-primary"
          style={{ 
            minWidth: '140px',
            opacity: currentQuestionIndex === 0 ? 0.5 : 1
          }}
        >
          ← Précédent
        </button>
        <button
          onClick={handleNext}
          className={currentQuestionIndex === questions.length - 1 ? "btn btn-success" : "btn btn-primary"}
          style={{ 
            minWidth: '140px',
            fontSize: currentQuestionIndex === questions.length - 1 ? '1.1rem' : '1rem',
            fontWeight: currentQuestionIndex === questions.length - 1 ? '700' : '600',
            boxShadow: currentQuestionIndex === questions.length - 1 ? '0 4px 12px rgba(16, 185, 129, 0.3)' : 'none'
          }}
        >
          {currentQuestionIndex === questions.length - 1 ? '✓ Terminer le test' : 'Suivant →'}
        </button>
      </div>
    </div>
  );
}

