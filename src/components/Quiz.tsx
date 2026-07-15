/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, Award, RotateCcw, ArrowRight, HelpCircle } from 'lucide-react';
import { QuizQuestion, Language, TranslationSet } from '../types';
import { quizQuestions } from '../translations';

interface QuizProps {
  language: Language;
  t: TranslationSet;
  onApplyLevel: (levelId: string) => void;
}

export default function Quiz({ language, t, onApplyLevel }: QuizProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answersHistory, setAnswersHistory] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleStart = () => {
    setIsPlaying(true);
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setAnswersHistory([]);
    setShowResult(false);
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionIndex(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIndex === null || isAnswerSubmitted) return;

    const isCorrect = selectedOptionIndex === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setAnswersHistory((prev) => [...prev, isCorrect]);
    setIsAnswerSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswerSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  const getResultLevel = () => {
    if (score <= 2) return { id: 'a1', name: 'A1 (Grundstufe)' };
    if (score <= 4) return { id: 'a2', name: 'A2 (Fortgeschrittene)' };
    return { id: 'b1', name: 'B1 (Mittelstufe)' };
  };

  const recommended = getResultLevel();

  return (
    <div id="placement-quiz-container" className="w-full max-w-2xl mx-auto bg-white dark:bg-neutral-900 border border-border-light dark:border-border-dark rounded-3xl overflow-hidden shadow-xs">
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="quiz-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 bg-neutral-50 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-neutral-200 dark:border-neutral-700">
              <HelpCircle className="w-8 h-8 text-neutral-600 dark:text-neutral-300" />
            </div>
            <h3 id="quiz-heading" className="text-2xl font-sans font-medium tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
              {t.quizTitle}
            </h3>
            <p id="quiz-subheading" className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed">
              {t.quizSubtitle}
            </p>
            <button
              id="start-quiz-btn"
              onClick={handleStart}
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 font-medium rounded-full transition-colors text-sm shadow-xs inline-flex items-center gap-2 group"
            >
              <span>{t.quizStartCta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        ) : showResult ? (
          <motion.div
            key="quiz-result"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 bg-amber-50 dark:bg-amber-950/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-200 dark:border-amber-800">
              <Award className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 id="result-heading" className="text-2xl font-sans font-medium tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
              {t.quizResultTitle}
            </h3>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-6">
              Score: {score} / {quizQuestions.length}
            </p>
            
            <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-6 mb-8 border border-neutral-150 dark:border-neutral-800 max-w-md mx-auto">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                {t.quizResultIntro}
              </p>
              <div id="recommended-level-badge" className="text-3xl font-sans font-bold text-neutral-900 dark:text-neutral-100 tracking-tight my-3">
                {recommended.name}
              </div>
              <p className="text-xs text-neutral-400 dark:text-neutral-500">
                {t.quizRecommendedLevel} <span className="font-semibold uppercase">{recommended.id}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                id="retry-quiz-btn"
                onClick={handleStart}
                className="w-full sm:w-auto px-5 py-2.5 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-850 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium rounded-full transition-colors text-xs inline-flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.quizRetryCta}</span>
              </button>
              
              <button
                id="apply-recommended-btn"
                onClick={() => onApplyLevel(recommended.id)}
                className="w-full sm:w-auto px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 font-medium rounded-full transition-colors text-xs inline-flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>{t.quizApplyLevelCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="quiz-question"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="p-6 md:p-8"
          >
            {/* Progress bar */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-neutral-400">
                {t.quizQuestionOf} {currentQuestionIndex + 1} / {quizQuestions.length}
              </span>
              <div className="flex gap-1">
                {quizQuestions.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 w-6 rounded-full transition-colors duration-300 ${
                      idx === currentQuestionIndex
                        ? 'bg-neutral-800 dark:bg-neutral-200'
                        : idx < currentQuestionIndex
                        ? answersHistory[idx]
                          ? 'bg-emerald-500'
                          : 'bg-rose-500'
                        : 'bg-neutral-150 dark:bg-neutral-800'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question Text */}
            <div className="min-h-16 mb-6">
              <h4 id="question-text" className="text-base md:text-lg font-sans font-medium text-neutral-900 dark:text-neutral-100 leading-snug">
                {currentQuestion.question[language]}
              </h4>
            </div>

            {/* Options list */}
            <div className="space-y-2.5 mb-6">
              {currentQuestion.options.map((option, idx) => {
                let optionStyle = 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-850';
                let icon = null;

                if (selectedOptionIndex === idx) {
                  optionStyle = 'border-neutral-900 dark:border-neutral-100 bg-neutral-50/50 dark:bg-neutral-850/50 text-neutral-900 dark:text-neutral-100';
                }

                if (isAnswerSubmitted) {
                  if (idx === currentQuestion.correctIndex) {
                    optionStyle = 'border-emerald-500 dark:border-emerald-600 bg-emerald-50/20 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400';
                    icon = <Check className="w-4 h-4 text-emerald-500 shrink-0" />;
                  } else if (selectedOptionIndex === idx) {
                    optionStyle = 'border-rose-500 dark:border-rose-600 bg-rose-50/20 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400';
                    icon = <X className="w-4 h-4 text-rose-500 shrink-0" />;
                  } else {
                    optionStyle = 'border-neutral-200 dark:border-neutral-800 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    id={`quiz-option-${idx}`}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={isAnswerSubmitted}
                    className={`w-full p-3.5 text-left text-sm rounded-xl border font-sans font-medium transition-all flex items-center justify-between ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {icon}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Explanation */}
            <AnimatePresence>
              {isAnswerSubmitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden mb-6"
                >
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-150 dark:border-neutral-800">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1.5 font-mono text-neutral-400">
                      {selectedOptionIndex === currentQuestion.correctIndex ? 'Richtig! (Toʻgʻri / Верно)' : 'Falsch! (Notoʻgʻri / Неверно)'}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                      {currentQuestion.explanation[language]}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Bar */}
            <div className="flex justify-end pt-2 border-t border-neutral-100 dark:border-neutral-800">
              {!isAnswerSubmitted ? (
                <button
                  id="submit-answer-btn"
                  onClick={handleSubmitAnswer}
                  disabled={selectedOptionIndex === null}
                  className={`px-5 py-2 rounded-full font-medium text-xs transition-colors ${
                    selectedOptionIndex === null
                      ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed'
                      : 'bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-950'
                  }`}
                >
                  {t.quizSubmit}
                </button>
              ) : (
                <button
                  id="next-question-btn"
                  onClick={handleNext}
                  className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 font-medium rounded-full text-xs transition-colors inline-flex items-center gap-1"
                >
                  <span>{t.quizNext}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
