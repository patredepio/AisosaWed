import { useState } from 'react';

function TriviaGame() {
  const questions = [
    {
      id: 1,
      question: "What is Aisosa and Kunle's wedding hashtag?",
      options: ["#AisosaAndKunle", "#ForeverTogether", "#AKindOfLove", "#WeddingBliss"],
      correct: 2,
      explanation: "Their beautiful wedding hashtag is #AKindOfLove - representing the special connection they share!"
    },
    {
      id: 2,
      question: "When is their traditional wedding ceremony?",
      options: ["November 20, 2025", "November 21, 2025", "November 22, 2025", "November 23, 2025"],
      correct: 0,
      explanation: "The traditional wedding ceremony takes place on November 20, 2025 at the bride's father's residence."
    },
    {
      id: 3,
      question: "Where will their white wedding ceremony be held?",
      options: ["St. Peter's Cathedral", "The Redeem Christian Church of God Upper Room Parish", "Holy Trinity Church", "Victory Chapel"],
      correct: 1,
      explanation: "Their white wedding ceremony will be held at The Redeem Christian Church of God Upper Room Parish on November 22, 2025."
    },
    {
      id: 4,
      question: "Where is the traditional wedding taking place?",
      options: ["Victoria Island Lagos", "Guobadia Avenue Benin City", "Airport Road Abuja", "GRA Port Harcourt"],
      correct: 1,
      explanation: "The traditional wedding is at the bride's father's residence on 45B Guobadia Avenue Off Etete GRA, Benin City."
    },
    {
      id: 5,
      question: "What street is the white wedding venue located on?",
      options: ["Etete Road", "Redeemed Christian Church way", "Airport Road", "Mission Road"],
      correct: 1,
      explanation: "The Redeem Christian Church of God Upper Room Parish is located at No. 3 Redeemed Christian Church way, off Adesuwa Girls Grammar School Road in Benin City."
    },
    {
      id: 6,
      question: "What does their love story represent according to the site?",
      options: ["A fairy tale romance", "True partnership", "A Kind Of Love", "Destiny fulfilled"],
      correct: 2,
      explanation: "Their love story represents 'A Kind Of Love' - a unique and special bond that led to their beautiful union."
    },
    {
      id: 7,
      question: "What special transportation is provided on the wedding day?",
      options: ["Luxury cars from hotels", "Bus from airport to venue", "Helicopter rides", "Train service"],
      correct: 1,
      explanation: "The couple is providing bus transportation from the airport to the venue on the wedding day for guests."
    },
    {
      id: 8,
      question: "What is the wedding countdown counting down to?",
      options: ["Traditional ceremony", "White wedding", "Reception party", "Engagement party"],
      correct: 1,
      explanation: "The countdown is set for November 22, 2025 - their white wedding ceremony date, marking when they say 'I do'!"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleAnswerSelect = (optionIndex) => {
    if (selectedAnswer !== null) return; // Prevent changing answer
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    
    const newAnswer = {
      questionId: questions[currentQuestion].id,
      selected: optionIndex,
      correct: questions[currentQuestion].correct,
      isCorrect: optionIndex === questions[currentQuestion].correct
    };
    
    setAnswers([...answers, newAnswer]);
    
    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setGameComplete(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfect! You know us so well! 🌟";
    if (percentage >= 80) return "Excellent! You're definitely invited to the wedding! 🎉";
    if (percentage >= 60) return "Great job! You know us pretty well! 😊";
    if (percentage >= 40) return "Not bad! You'll learn more about us at the wedding! 💕";
    return "Time to spend more time with us! 😄";
  };

  if (gameComplete) {
    return (
      <section className="section">
        <h2 className="section-title text-2xl">Trivia Game Complete!</h2>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div 
            className="card" 
            style={{ 
              maxWidth: '400px', 
              margin: '0 auto 2rem auto', 
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              color: 'white'
            }}
          >
            <h3 className="text-2xl" style={{ margin: '0 0 1rem 0' }}>
              Your Score
            </h3>
            <div className="text-3xl" style={{ margin: '0 0 1rem 0' }}>
              {score} / {questions.length}
            </div>
            <p className="text-lg" style={{ margin: 0 }}>
              {getScoreMessage()}
            </p>
          </div>

          <button className="btn" onClick={resetGame} style={{ marginRight: '1rem' }}>
            Play Again
          </button>
        </div>

        {/* Answer Review */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 className="text-xl" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-secondary)' }}>
            Answer Review
          </h3>
          {questions.map((question, index) => {
            const userAnswer = answers.find(a => a.questionId === question.id);
            return (
              <div key={question.id} className="card" style={{ marginBottom: '1rem' }}>
                <h4 className="text-md" style={{ margin: '0 0 1rem 0', color: 'var(--color-secondary)' }}>
                  Question {index + 1}: {question.question}
                </h4>
                <p className="text-sm" style={{ 
                  margin: '0 0 0.5rem 0',
                  color: userAnswer?.isCorrect ? 'green' : 'red',
                  fontWeight: 'bold'
                }}>
                  Your answer: {question.options[userAnswer?.selected]} 
                  {userAnswer?.isCorrect ? ' ✓' : ' ✗'}
                </p>
                {!userAnswer?.isCorrect && (
                  <p className="text-sm" style={{ margin: '0 0 0.5rem 0', color: 'green', fontWeight: 'bold' }}>
                    Correct answer: {question.options[question.correct]}
                  </p>
                )}
                <p className="text-sm" style={{ margin: 0, fontStyle: 'italic' }}>
                  {question.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <section className="section">
      <h2 className="section-title text-2xl">How Well Do You Know Us?</h2>
      <p className="text-base" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
        Test your knowledge about Aisosa and Kunle's wedding - #AKindOfLove!
      </p>

      {/* Progress Bar */}
      <div style={{ maxWidth: '400px', margin: '0 auto 2rem auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span className="text-sm">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-sm">Score: {score}</span>
        </div>
        <div 
          style={{ 
            width: '100%', 
            height: '8px', 
            backgroundColor: 'var(--color-accent)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden'
          }}
        >
          <div 
            style={{ 
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              height: '100%',
              backgroundColor: 'var(--color-primary)',
              transition: 'width 0.3s ease'
            }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3 className="text-lg" style={{ margin: '0 0 2rem 0', textAlign: 'center', color: 'var(--color-secondary)' }}>
          {currentQ.question}
        </h3>

        <div className="grid" style={{ gap: '1rem' }}>
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              className={`btn ${selectedAnswer === null ? '' : 
                index === currentQ.correct ? 'btn-correct' : 
                selectedAnswer === index ? 'btn-incorrect' : 'btn-secondary'
              }`}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              style={{
                backgroundColor: selectedAnswer === null ? 'var(--color-accent)' : 
                  index === currentQ.correct ? '#4CAF50' : 
                  selectedAnswer === index ? '#F44336' : '#e0e0c4',
                color: selectedAnswer === null ? 'var(--color-text)' :
                  (index === currentQ.correct || selectedAnswer === index) ? 'white' : 'var(--color-text)',
                cursor: selectedAnswer === null ? 'pointer' : 'default',
                opacity: selectedAnswer !== null && index !== currentQ.correct && selectedAnswer !== index ? 0.6 : 1,
                textAlign: 'left',
                padding: '1rem'
              }}
              aria-pressed={selectedAnswer === index}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Explanation and Next Button */}
        {showResult && (
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <div 
              className="card" 
              style={{ 
                background: selectedAnswer === currentQ.correct ? '#E8F5E8' : '#FFE8E8',
                border: `2px solid ${selectedAnswer === currentQ.correct ? '#4CAF50' : '#F44336'}`,
                marginBottom: '1rem'
              }}
            >
              <h4 className="text-md" style={{ 
                margin: '0 0 1rem 0', 
                color: selectedAnswer === currentQ.correct ? '#2E7D32' : '#C62828'
              }}>
                {selectedAnswer === currentQ.correct ? 'Correct! 🎉' : 'Not quite! 😅'}
              </h4>
              <p className="text-base" style={{ margin: 0, color: 'var(--color-text)' }}>
                {currentQ.explanation}
              </p>
            </div>
            
            <button className="btn" onClick={nextQuestion}>
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default TriviaGame;