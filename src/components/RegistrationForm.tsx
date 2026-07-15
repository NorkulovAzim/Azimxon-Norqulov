/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertTriangle, Send, History, Trash2 } from 'lucide-react';
import { Language, TranslationSet, Course, RegistrationSubmission } from '../types';

interface RegistrationFormProps {
  language: Language;
  t: TranslationSet;
  courses: Course[];
  preSelectedCourseId: string;
}

export default function RegistrationForm({ language, t, courses, preSelectedCourseId }: RegistrationFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState(preSelectedCourseId || 'a1');
  const [format, setFormat] = useState<'online' | 'offline'>('offline');
  const [message, setMessage] = useState('');

  // Validation States
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Submission Status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState<RegistrationSubmission[]>([]);

  useEffect(() => {
    if (preSelectedCourseId) {
      setCourseId(preSelectedCourseId);
    }
  }, [preSelectedCourseId]);

  // Load prior submissions on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('germanist_registrations');
      if (stored) {
        setSubmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Could not parse registrations from localStorage", e);
    }
  }, []);

  const validatePhone = (num: string) => {
    // Basic validation for Uzbekistan phones: (+998 xx xxx xx xx) or similar formats
    const cleaned = num.replace(/\D/g, '');
    return cleaned.length >= 7;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!name.trim()) {
      setNameError(t.formValidationRequired);
      hasError = true;
    } else {
      setNameError('');
    }

    if (!phone.trim()) {
      setPhoneError(t.formValidationRequired);
      hasError = true;
    } else if (!validatePhone(phone)) {
      setPhoneError(t.formValidationPhone);
      hasError = true;
    } else {
      setPhoneError('');
    }

    if (hasError) return;

    // Create record
    const newSubmission: RegistrationSubmission = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      phone,
      email,
      courseId,
      format,
      message,
      createdAt: new Date().toLocaleString()
    };

    const updatedSubmissions = [newSubmission, ...submissions];
    setSubmissions(updatedSubmissions);
    localStorage.setItem('germanist_registrations', JSON.stringify(updatedSubmissions));

    // Reset Form
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setIsSubmitted(true);

    // Auto close success banner after 8 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 8000);
  };

  const handleDeleteSubmission = (id: string) => {
    const filtered = submissions.filter((s) => s.id !== id);
    setSubmissions(filtered);
    localStorage.setItem('germanist_registrations', JSON.stringify(filtered));
  };

  return (
    <div id="registration-component" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
      {/* Form Card */}
      <div id="form-card" className="lg:col-span-7 bg-white dark:bg-neutral-900 border border-border-light dark:border-border-dark rounded-3xl p-6 md:p-8 shadow-xs">
        <h3 id="form-heading" className="text-xl md:text-2xl font-sans font-medium tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
          {t.formTitle}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
          {t.formSubtitle}
        </p>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 overflow-hidden"
            >
              <div className="flex gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-800 dark:text-emerald-400 text-sm">
                <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <h4 className="font-sans font-semibold mb-0.5">{t.formSuccessTitle}</h4>
                  <p className="text-xs leading-relaxed">{t.formSuccessMessage}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="reg-name" className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
              {t.formName} *
            </label>
            <input
              id="reg-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (e.target.value) setNameError('');
              }}
              placeholder="E.g., Jasur Alimov"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-neutral-50 dark:bg-neutral-850 dark:text-neutral-100 focus:outline-none focus:ring-1 transition-all ${
                nameError
                  ? 'border-rose-500 focus:ring-rose-500'
                  : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100 focus:ring-neutral-200 dark:focus:ring-neutral-800'
              }`}
            />
            {nameError && (
              <p className="text-rose-500 text-xs mt-1 font-sans flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>{nameError}</span>
              </p>
            )}
          </div>

          {/* Grid Phone + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="reg-phone" className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                {t.formPhone} *
              </label>
              <input
                id="reg-phone"
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (e.target.value) setPhoneError('');
                }}
                placeholder="+998 90 123 45 67"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-neutral-50 dark:bg-neutral-850 dark:text-neutral-100 focus:outline-none focus:ring-1 transition-all ${
                  phoneError
                    ? 'border-rose-500 focus:ring-rose-500'
                    : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100 focus:ring-neutral-200 dark:focus:ring-neutral-800'
                }`}
              />
              {phoneError && (
                <p className="text-rose-500 text-xs mt-1 font-sans flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{phoneError}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="reg-email" className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                {t.formEmail}
              </label>
              <input
                id="reg-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm bg-neutral-50 dark:bg-neutral-850 dark:text-neutral-100 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 focus:ring-1 focus:ring-neutral-200 dark:focus:ring-neutral-800 transition-all"
              />
            </div>
          </div>

          {/* Grid Course + Format */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="reg-course" className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                {t.formCourse}
              </label>
              <select
                id="reg-course"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm bg-neutral-50 dark:bg-neutral-850 dark:text-neutral-100 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 focus:ring-1 focus:ring-neutral-200 dark:focus:ring-neutral-800 transition-all"
              >
                {courses.map((course) => (
                  <option key={course.id} value={course.id} className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
                    [{course.level}] {course.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                {t.formFormat}
              </label>
              <div id="format-toggle" className="grid grid-cols-2 p-1 bg-neutral-100 dark:bg-neutral-800/80 rounded-xl border border-neutral-200/40 dark:border-neutral-700/50">
                <button
                  type="button"
                  onClick={() => setFormat('offline')}
                  className={`py-1.5 rounded-lg text-xs font-medium transition-all ${
                    format === 'offline'
                      ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-xs'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-850 dark:hover:text-neutral-200'
                  }`}
                >
                  {t.formFormatOffline}
                </button>
                <button
                  type="button"
                  onClick={() => setFormat('online')}
                  className={`py-1.5 rounded-lg text-xs font-medium transition-all ${
                    format === 'online'
                      ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-xs'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-850 dark:hover:text-neutral-200'
                  }`}
                >
                  {t.formFormatOnline}
                </button>
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="reg-message" className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
              {t.formMessage}
            </label>
            <textarea
              id="reg-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="..."
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm bg-neutral-50 dark:bg-neutral-850 dark:text-neutral-100 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 focus:ring-1 focus:ring-neutral-200 dark:focus:ring-neutral-800 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            id="submit-registration-btn"
            type="submit"
            className="w-full py-3 mt-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 font-medium rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{t.formSubmitCta}</span>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>
      </div>

      {/* History Log Card */}
      <div id="history-card" className="lg:col-span-5 bg-neutral-50 dark:bg-neutral-900/40 border border-border-light dark:border-border-dark rounded-3xl p-6 shadow-xs min-h-64 lg:sticky lg:top-24">
        <div className="flex items-center gap-2 mb-4">
          <History className="w-5 h-5 text-neutral-400 shrink-0" />
          <h4 id="submissions-history-title" className="text-base font-sans font-medium text-neutral-800 dark:text-neutral-200">
            Arizalar Tarixi (Local History)
          </h4>
        </div>

        {submissions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center text-neutral-400 dark:text-neutral-500">
            <Send className="w-8 h-8 mb-3 opacity-40" />
            <p className="text-xs font-sans">
              Hali hech qanday ariza topshirilmagan.
            </p>
            <p className="text-[10px] font-mono mt-1 opacity-70">
              No active bookings found in this browser cache.
            </p>
          </div>
        ) : (
          <div className="space-y-3.5 max-h-[420px] overflow-y-auto pr-1">
            {submissions.map((sub) => {
              const matchedCourse = courses.find((c) => c.id === sub.courseId);
              return (
                <div
                  key={sub.id}
                  id={`submission-${sub.id}`}
                  className="bg-white dark:bg-neutral-900 p-4 rounded-xl border border-neutral-200/75 dark:border-neutral-800/80 shadow-xs relative group/item"
                >
                  <button
                    id={`delete-submission-${sub.id}`}
                    onClick={() => handleDeleteSubmission(sub.id)}
                    className="absolute top-3.5 right-3.5 p-1 rounded-md text-neutral-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors opacity-0 group-hover/item:opacity-100 focus:opacity-100"
                    title="O'chirish / Delete"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded-md text-[10px] font-mono font-bold uppercase text-neutral-600 dark:text-neutral-300">
                      {matchedCourse?.level || 'A1'}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                      {sub.createdAt}
                    </span>
                  </div>
                  <h5 className="text-sm font-sans font-semibold text-neutral-900 dark:text-neutral-100 mb-1 leading-tight">
                    {sub.name}
                  </h5>
                  <div className="space-y-1 text-xs text-neutral-500 dark:text-neutral-400">
                    <p className="font-mono">{sub.phone}</p>
                    {sub.email && <p className="truncate font-sans">{sub.email}</p>}
                    <p className="text-[11px] mt-2 italic font-sans border-l-2 border-neutral-200 dark:border-neutral-750 pl-2">
                      Format: <span className="font-medium text-neutral-700 dark:text-neutral-300 capitalize">{sub.format}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
