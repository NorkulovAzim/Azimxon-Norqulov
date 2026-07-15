/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown, 
  GraduationCap, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Check, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { Language, Theme } from './types';
import { translations, coursesData, testimonialsData } from './translations';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector';
import Quiz from './components/Quiz';
import RegistrationForm from './components/RegistrationForm';
import ContactMap from './components/ContactMap';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('germanist_theme');
      if (stored === 'dark' || stored === 'light') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Language state
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('germanist_lang');
      if (stored === 'uz' || stored === 'ru' || stored === 'de') return stored;
    }
    return 'uz';
  });

  // Level registration selection state
  const [preSelectedCourseId, setPreSelectedCourseId] = useState<string>('a1');

  // Interactive FAQ state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Apply theme class to <html>
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('germanist_theme', theme);
  }, [theme]);

  // Sync language to localStorage
  useEffect(() => {
    localStorage.setItem('germanist_lang', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const t = translations[language];

  const handleApplyRecommendedLevel = (levelId: string) => {
    setPreSelectedCourseId(levelId);
    const element = document.getElementById('registration-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCourseEnroll = (courseId: string) => {
    setPreSelectedCourseId(courseId);
    const element = document.getElementById('registration-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '#about', label: t.navAbout },
    { href: '#courses', label: t.navCourses },
    { href: '#quiz', label: t.navQuiz },
    { href: '#registration-section', label: t.navRegistration },
    { href: '#contact', label: t.navContact },
  ];

  const faqs = [
    { q: t.faqQ1, a: t.faqA1 },
    { q: t.faqQ2, a: t.faqA2 },
    { q: t.faqQ3, a: t.faqA3 },
    { q: t.faqQ4, a: t.faqA4 }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 transition-colors duration-300 font-sans pb-12">
      
      {/* HEADER NAVBAR */}
      <header id="app-header" className="sticky top-0 z-40 w-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-border-light dark:border-border-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" id="brand-logo" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-white flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="font-display font-black text-sm text-accent dark:text-neutral-950 tracking-tighter">G</span>
            </div>
            <span className="font-display font-bold text-lg text-neutral-950 dark:text-white tracking-widest uppercase">
              {t.brandName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Configuration tools */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
            <ThemeToggle 
              theme={theme} 
              onToggle={toggleTheme} 
              labelLight={t.toggleThemeLight} 
              labelDark={t.toggleThemeDark} 
            />
          </div>

          {/* Mobile menu triggers */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle 
              theme={theme} 
              onToggle={toggleTheme} 
              labelLight={t.toggleThemeLight} 
              labelDark={t.toggleThemeDark} 
            />
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-border-light dark:border-border-dark text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border-light dark:border-border-dark bg-white dark:bg-neutral-950 px-4 py-6 space-y-4"
          >
            {/* Language Selection Shortcut for Mobile */}
            <div className="flex justify-between items-center pb-4 border-b border-border-light dark:border-border-dark">
              <span className="text-xs font-mono font-medium text-neutral-400">Language:</span>
              <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
            </div>

            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-sans font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-100 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO & STATS BENTO GRID */}
      <section id="hero" className="relative py-12 lg:py-16 overflow-hidden">
        {/* Abstract background ambient spots */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neutral-200/10 dark:bg-neutral-950/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neutral-250/10 dark:bg-neutral-900/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* LARGE HERO BLOCK (col-span-12 lg:col-span-8) */}
            <div id="bento-hero-main" className="lg:col-span-8 bg-white dark:bg-neutral-900 border border-border-light dark:border-border-dark rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-800 transition-all duration-300 shadow-2xs">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-border-light dark:border-border-dark text-[10px] font-mono font-bold tracking-widest text-neutral-550 dark:text-neutral-400 uppercase mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>Deutsch-Zentrum Tashkent</span>
                </span>

                <h1 id="hero-title" className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-neutral-950 dark:text-white leading-tight">
                  {t.heroTagline}
                </h1>

                <p id="hero-description" className="mt-4 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
                  {t.heroSubheadline}
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3.5 items-center">
                <a
                  id="hero-cta-quiz"
                  href="#quiz"
                  className="w-full sm:w-auto px-6 py-3 bg-neutral-950 hover:bg-neutral-850 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 font-sans font-semibold rounded-xl transition-colors text-xs shadow-xs inline-flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{t.heroCtaQuiz}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
                
                <a
                  id="hero-cta-courses"
                  href="#courses"
                  className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-850 text-neutral-850 dark:text-neutral-200 font-sans font-semibold border border-border-light dark:border-border-dark rounded-xl transition-colors text-xs"
                >
                  {t.heroCtaCourses}
                </a>
              </div>
            </div>

            {/* BRANDING GRAPHIC BLOCK (col-span-12 lg:col-span-4) */}
            <div id="bento-hero-branding" className="lg:col-span-4 bg-[#FAFAFA] dark:bg-neutral-900/60 border border-border-light dark:border-border-dark rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-800 transition-all duration-300 shadow-2xs relative overflow-hidden group">
              {/* Modern German Flag Stripe Accent in top corner */}
              <div className="absolute top-0 right-0 left-0 h-1.5 flex">
                <div className="flex-1 bg-black" />
                <div className="flex-1 bg-red-600" />
                <div className="flex-1 bg-accent" /> {/* #FFCE00 gold */}
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 dark:bg-white flex items-center justify-center shadow-xs mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <span className="font-display font-black text-lg text-accent dark:text-neutral-950 tracking-tighter">G</span>
                </div>
                <h3 className="text-lg font-display font-bold text-neutral-950 dark:text-white tracking-tight uppercase">
                  {t.brandName} Center
                </h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2 font-sans font-light leading-relaxed">
                  Uzbekistan, Toshkent markazida jahon darajasidagi nemis tili o'quv markazi. Gyote formatidagi ta'lim.
                </p>
              </div>

              {/* Visual mini flag block representing premium German standards */}
              <div className="mt-8 border-t border-border-light dark:border-border-dark pt-6 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Zertifikat</span>
                  <span className="text-[11px] font-sans font-bold text-neutral-900 dark:text-neutral-100">Goethe-Format</span>
                </div>
                <div className="flex flex-col gap-0.5 w-8 items-end">
                  <div className="w-6 h-1 bg-black dark:bg-neutral-100 rounded-xs" />
                  <div className="w-6 h-1 bg-red-600 rounded-xs" />
                  <div className="w-6 h-1 bg-accent rounded-xs" />
                </div>
              </div>
            </div>

            {/* KEY STATS (3 Bento cards - col-span-12 md:col-span-4) */}
            <div id="stat-students-card" className="lg:col-span-4 bg-white dark:bg-neutral-900 border border-border-light dark:border-border-dark rounded-3xl p-6 hover:border-accent dark:hover:border-accent transition-all duration-300 flex items-center justify-between shadow-2xs group">
              <div>
                <div className="text-3xl font-display font-bold text-neutral-950 dark:text-white tracking-tight">
                  {t.statStudents}
                </div>
                <div className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-sans">
                  {t.statStudentsLabel}
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 group-hover:scale-105 transition-transform duration-300 shrink-0 border border-border-light dark:border-border-dark">
                <Users className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
              </div>
            </div>

            <div id="stat-pass-rate-card" className="lg:col-span-4 bg-white dark:bg-neutral-900 border border-border-light dark:border-border-dark rounded-3xl p-6 hover:border-accent dark:hover:border-accent transition-all duration-300 flex items-center justify-between shadow-2xs group">
              <div>
                <div className="text-3xl font-display font-bold text-neutral-950 dark:text-white tracking-tight">
                  {t.statPassRate}
                </div>
                <div className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-sans">
                  {t.statPassRateLabel}
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 group-hover:scale-105 transition-transform duration-300 shrink-0 border border-border-light dark:border-border-dark">
                <Check className="w-5 h-5 text-emerald-500" />
              </div>
            </div>

            <div id="stat-teachers-card" className="lg:col-span-4 bg-white dark:bg-neutral-900 border border-border-light dark:border-border-dark rounded-3xl p-6 hover:border-accent dark:hover:border-accent transition-all duration-300 flex items-center justify-between shadow-2xs group">
              <div>
                <div className="text-3xl font-display font-bold text-neutral-950 dark:text-white tracking-tight">
                  {t.statTeachers}
                </div>
                <div className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-sans">
                  {t.statTeachersLabel}
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 group-hover:scale-105 transition-transform duration-300 shrink-0 border border-border-light dark:border-border-dark">
                <GraduationCap className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT / PHILOSOPHY SECTION */}
      <section id="about" className="py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
            
            {/* About Text Card (col-span-12 xl:col-span-5) */}
            <div id="about-intro-card" className="xl:col-span-5 bg-white dark:bg-neutral-900 border border-border-light dark:border-border-dark rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-800 transition-all duration-300 shadow-2xs">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-3">
                  01. Über uns
                </span>
                <h2 id="about-heading" className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 dark:text-white tracking-tight leading-tight">
                  {t.aboutTitle}
                </h2>
                <p className="text-xs sm:text-sm font-sans font-medium text-neutral-500 dark:text-neutral-400 mt-3 mb-6">
                  {t.aboutSubtitle}
                </p>
                
                <div className="space-y-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans font-light">
                  <p>{t.aboutText1}</p>
                  <p>{t.aboutText2}</p>
                </div>
              </div>

              {/* Aesthetic subtle banner in About card */}
              <div className="mt-8 pt-6 border-t border-border-light dark:border-border-dark flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Deutsch lernen, Türen öffnen</span>
              </div>
            </div>

            {/* Core Values grid (col-span-12 xl:col-span-7) */}
            <div id="about-features" className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div id="feat-native" className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-border-light dark:border-border-dark hover:border-accent dark:hover:border-accent transition-all duration-300 shadow-2xs group">
                <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200 mb-4 border border-border-light dark:border-border-dark group-hover:bg-accent group-hover:text-neutral-950 transition-colors duration-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-sans font-semibold text-neutral-950 dark:text-white mb-2">
                  {t.featNativeTitle}
                </h4>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed">
                  {t.featNativeDesc}
                </p>
              </div>

              <div id="feat-interactive" className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-border-light dark:border-border-dark hover:border-accent dark:hover:border-accent transition-all duration-300 shadow-2xs group">
                <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200 mb-4 border border-border-light dark:border-border-dark group-hover:bg-accent group-hover:text-neutral-950 transition-colors duration-300">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-sans font-semibold text-neutral-950 dark:text-white mb-2">
                  {t.featInteractiveTitle}
                </h4>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed">
                  {t.featInteractiveDesc}
                </p>
              </div>

              <div id="feat-groups" className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-border-light dark:border-border-dark hover:border-accent dark:hover:border-accent transition-all duration-300 shadow-2xs group">
                <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200 mb-4 border border-border-light dark:border-border-dark group-hover:bg-accent group-hover:text-neutral-950 transition-colors duration-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-sans font-semibold text-neutral-950 dark:text-white mb-2">
                  {t.featSmallGroupsTitle}
                </h4>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed">
                  {t.featSmallGroupsDesc}
                </p>
              </div>

              <div id="feat-certificate" className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-border-light dark:border-border-dark hover:border-accent dark:hover:border-accent transition-all duration-300 shadow-2xs group">
                <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200 mb-4 border border-border-light dark:border-border-dark group-hover:bg-accent group-hover:text-neutral-950 transition-colors duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-sans font-semibold text-neutral-950 dark:text-white mb-2">
                  {t.featCertificateTitle}
                </h4>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed">
                  {t.featCertificateDesc}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* COURSES LIST SECTION */}
      <section id="courses" className="py-20 bg-[#FAFAFA] dark:bg-neutral-900/10 border-y border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
              02. Lehrprogramme
            </span>
            <h2 id="courses-heading" className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 dark:text-white tracking-tight mt-3 mb-2">
              {t.coursesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
              {t.coursesSubtitle}
            </p>
          </div>

          <div id="courses-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((course) => {
              const isFlagship = course.id === 'prep';
              return (
                <div
                  key={course.id}
                  id={`course-card-${course.id}`}
                  className={`border bento-card rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between shadow-2xs group relative overflow-hidden ${
                    isFlagship 
                      ? 'bg-neutral-950 dark:bg-neutral-900 text-white border-accent dark:border-accent' 
                      : 'bg-white dark:bg-neutral-900 border-border-light dark:border-border-dark hover:border-accent dark:hover:border-accent'
                  }`}
                >
                  {isFlagship && (
                    <div className="absolute top-0 right-0 bg-accent text-neutral-950 text-[9px] font-mono font-bold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                      Flagship Course
                    </div>
                  )}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-3xl font-mono font-bold select-none ${
                        isFlagship ? 'text-accent/35' : 'text-neutral-250 dark:text-neutral-800'
                      }`}>
                        {course.level}
                      </span>
                      <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full font-semibold border ${
                        isFlagship 
                          ? 'bg-neutral-900 border-neutral-850 text-accent' 
                          : 'bg-neutral-100 dark:bg-neutral-800 border-border-light dark:border-border-dark text-neutral-600 dark:text-neutral-300'
                      }`}>
                        CEFR Standard
                      </span>
                    </div>

                    <h3 className={`text-base font-sans font-bold tracking-tight mb-2 ${
                      isFlagship ? 'text-white' : 'text-neutral-900 dark:text-white'
                    }`}>
                      {course.title}
                    </h3>

                    <p className={`text-xs leading-relaxed mb-6 font-light h-14 overflow-hidden ${
                      isFlagship ? 'text-neutral-300' : 'text-neutral-500 dark:text-neutral-400'
                    }`}>
                      {course.description[language]}
                    </p>

                    <div className={`space-y-2 border-t border-b py-4 mb-6 ${
                      isFlagship ? 'border-neutral-900' : 'border-border-light dark:border-border-dark'
                    }`}>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-400">{t.courseDuration}</span>
                        <span className={`font-mono font-medium ${
                          isFlagship ? 'text-neutral-200' : 'text-neutral-850 dark:text-neutral-200'
                        }`}>{course.duration}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-400">{t.courseIntensity}</span>
                        <span className={`font-mono font-medium ${
                          isFlagship ? 'text-neutral-200' : 'text-neutral-850 dark:text-neutral-200'
                        }`}>{course.intensity}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-400">{t.coursePrice}</span>
                        <span className={`font-mono font-semibold ${
                          isFlagship ? 'text-accent' : 'text-neutral-950 dark:text-white'
                        }`}>{course.price}</span>
                      </div>
                    </div>

                    {/* Bullet skills */}
                    <div className="space-y-1.5 mb-6">
                      {course.skillsAcquired.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2 text-[11px] font-sans">
                          <Check className={`w-3.5 h-3.5 shrink-0 ${
                            isFlagship ? 'text-accent' : 'text-emerald-500'
                          }`} />
                          <span className={isFlagship ? 'text-neutral-300' : 'text-neutral-500 dark:text-neutral-400'}>
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    id={`enroll-btn-${course.id}`}
                    onClick={() => handleCourseEnroll(course.id)}
                    className={`w-full py-2.5 font-medium rounded-xl transition-all duration-200 text-xs text-center border cursor-pointer ${
                      isFlagship
                        ? 'bg-accent hover:bg-white text-neutral-950 border-accent hover:border-white'
                        : 'bg-neutral-50 hover:bg-neutral-900 dark:bg-neutral-850 dark:hover:bg-white text-neutral-800 hover:text-white dark:text-neutral-200 dark:hover:text-neutral-950 border-border-light dark:border-border-dark'
                    }`}
                  >
                    {t.courseRegisterCta}
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* PLACEMENT QUIZ SECTION */}
      <section id="quiz" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Quiz itself */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <Quiz language={language} t={t} onApplyLevel={handleApplyRecommendedLevel} />
            </div>

            {/* Right Column: CEFR Info Bento block */}
            <div className="lg:col-span-4 bg-neutral-900 text-white dark:bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-750 transition-all duration-300 shadow-2xs relative overflow-hidden">
              {/* Gold light reflection dot */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-450 block mb-3">
                  03. Einstufungstest
                </span>
                <h3 className="text-xl font-display font-bold text-white tracking-tight leading-tight">
                  CEFR & Gyote daraja standartlari
                </h3>
                <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed font-sans font-light">
                  Nemis tili o'rganishda umumiy Yevropa standartlariga ko'ra darajalar qat'iy belgilangan bo'lib, o'z bilimingizni tekshirish orqali to'g'ri o'quv guruhini tanlaysiz.
                </p>

                <div className="space-y-4 mt-8">
                  <div className="flex gap-3 items-start border-l-2 border-accent pl-3.5">
                    <div>
                      <h4 className="text-xs font-sans font-bold text-white">0-2 To'g'ri javob — A1 / A2</h4>
                      <p className="text-[10px] text-neutral-450 mt-0.5 leading-relaxed font-sans font-light">Nemis tili boshlang'ich bilimlari, noldan boshlash yoki sodda suhbat qurish.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start border-l-2 border-red-600 pl-3.5">
                    <div>
                      <h4 className="text-xs font-sans font-bold text-white">3-4 To'g'ri javob — B1</h4>
                      <p className="text-[10px] text-neutral-450 mt-0.5 leading-relaxed font-sans font-light">Mustaqil muloqot va kundalik hayot. Germaniyada Studienkolleg va ish talabi.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start border-l-2 border-neutral-100 pl-3.5">
                    <div>
                      <h4 className="text-xs font-sans font-bold text-white">5-6 To'g'ri javob — B2 / C1</h4>
                      <p className="text-[10px] text-neutral-450 mt-0.5 leading-relaxed font-sans font-light">Professional daraja. Nemis universitetlariga to'g'ridan-to'g'ri kirish imkoniyati.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-850 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>Goethe-Institut Standard</span>
                <span className="text-accent font-bold">GERMANIST</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 bg-[#FAFAFA] dark:bg-neutral-900/10 border-y border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
              04. Erfolgsgeschichten
            </span>
            <h2 id="testimonials-heading" className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 dark:text-white tracking-tight mt-3 mb-2">
              {t.testimonialsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              {t.testimonialsSubtitle}
            </p>
          </div>

          <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                id={`testimonial-card-${test.id}`}
                className="bg-white dark:bg-neutral-900 border border-border-light dark:border-border-dark p-6 rounded-3xl hover:border-accent dark:hover:border-accent transition-all duration-300 flex flex-col justify-between shadow-2xs relative group"
              >
                {/* Floating quote indicator */}
                <span className="absolute top-4 right-6 text-6xl font-serif text-neutral-100/50 dark:text-neutral-800/50 font-bold select-none leading-none group-hover:text-accent/30 transition-colors duration-300">
                  “
                </span>

                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans italic relative z-10 font-light mb-6">
                  "{test.quote[language]}"
                </p>

                <div className="flex items-center gap-3.5 pt-4 border-t border-border-light dark:border-border-dark">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0 filter saturate-50 group-hover:saturate-100 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-sans font-bold text-neutral-900 dark:text-white">
                      {test.name}
                    </h4>
                    <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5 leading-tight">
                      {test.role[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REGISTRATION COMPONENT SECTION */}
      <section id="registration-section" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
              05. Kursanmeldung
            </span>
          </div>

          <RegistrationForm 
            language={language} 
            t={t} 
            courses={coursesData} 
            preSelectedCourseId={preSelectedCourseId} 
          />

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-[#FAFAFA] dark:bg-neutral-900/10 border-y border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left FAQ Intro Bento box */}
            <div id="faq-intro-card" className="lg:col-span-4 bg-white dark:bg-neutral-900 border border-border-light dark:border-border-dark rounded-3xl p-8 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-800 transition-all duration-300 shadow-2xs">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-3">
                  06. Fragen & Antworten
                </span>
                <h2 id="faq-heading" className="text-2xl font-display font-bold text-neutral-950 dark:text-white tracking-tight leading-tight">
                  {t.faqTitle}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-3 leading-relaxed">
                  {t.faqSubtitle}
                </p>
              </div>

              {/* Decorative block */}
              <div className="mt-8 pt-6 border-t border-border-light dark:border-border-dark">
                <p className="text-xs text-neutral-400 dark:text-neutral-500 font-sans font-light leading-relaxed">
                  Hali ham savollaringiz bormi? Telefon orqali bepul maslahat oling.
                </p>
                <a href="#contact" className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-neutral-950 dark:text-white group font-sans">
                  <span>Biz bilan bog'lanish</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Right FAQ Accordion block */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div id="faq-accordion" className="space-y-3.5 w-full">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div
                      key={index}
                      id={`faq-item-${index}`}
                      className="bg-white dark:bg-neutral-900 border border-border-light dark:border-border-dark rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        id={`faq-trigger-${index}`}
                        onClick={() => setActiveFaq(isOpen ? null : index)}
                        className="w-full p-4.5 text-left flex items-center justify-between text-xs sm:text-sm font-sans font-semibold text-neutral-900 dark:text-white gap-4 focus:outline-none cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? 'max-h-40 border-t border-border-light dark:border-border-dark' : 'max-h-0'
                        }`}
                      >
                        <p className="p-4.5 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans font-light">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT & LOCATION SECTION */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
              07. Kontakt & Standort
            </span>
            <h2 id="contact-heading" className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 dark:text-white tracking-tight mt-3 mb-2">
              {t.contactTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              {t.contactSubtitle}
            </p>
          </div>

          <div id="contact-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Contact details Card */}
            <div id="contact-details" className="lg:col-span-5 bg-white dark:bg-neutral-900 border border-border-light dark:border-border-dark p-6 md:p-8 rounded-3xl shadow-2xs flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-850 transition-all duration-300">
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-mono font-bold text-neutral-450 dark:text-neutral-500 uppercase tracking-widest mb-3">
                    {t.brandName} Tashkent HQ
                  </h4>
                  <div className="flex gap-3.5 items-start">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{t.contactAddress}</p>
                      <p className="text-xs sm:text-sm font-sans text-neutral-800 dark:text-neutral-200 mt-1 leading-relaxed">
                        {t.contactAddressValue}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex gap-3.5 items-start">
                    <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{t.contactPhone}</p>
                      <p className="text-xs font-mono text-neutral-850 dark:text-neutral-200 mt-1 font-semibold">
                        +998 90 950 44 88
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{t.contactEmail}</p>
                      <p className="text-xs font-sans text-neutral-850 dark:text-neutral-200 mt-1 truncate">
                        info@germanist.uz
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{t.contactHours}</p>
                    <p className="text-xs sm:text-sm font-sans text-neutral-850 dark:text-neutral-200 mt-1">
                      {t.contactHoursValue}
                    </p>
                  </div>
                </div>
              </div>

              {/* Aesthetic language quote */}
              <div className="pt-8 border-t border-border-light dark:border-border-dark mt-8">
                <p className="text-xs font-serif italic text-neutral-400 dark:text-neutral-500 leading-relaxed">
                  "Eine andere Sprache zu haben, ist wie eine zweite Seele zu besitzen."
                </p>
                <p className="text-[9px] font-mono text-neutral-400 mt-1 uppercase tracking-wider text-right">— Charlemagne</p>
              </div>

            </div>

            {/* Simulated Interactive Map */}
            <div id="contact-map" className="lg:col-span-7">
              <ContactMap />
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="app-footer" className="bg-white dark:bg-neutral-950 border-t border-border-light dark:border-border-dark py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border-light dark:border-border-dark">
            
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-neutral-900 dark:bg-white flex items-center justify-center">
                <span className="font-display font-black text-xs text-accent dark:text-neutral-950">G</span>
              </div>
              <span className="font-display font-bold text-base text-neutral-950 dark:text-white tracking-widest uppercase">
                {t.brandName}
              </span>
            </div>

            <p className="text-xs text-neutral-400 dark:text-neutral-500 max-w-sm text-center md:text-right font-sans font-light">
              {t.footerTagline}
            </p>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-neutral-400 dark:text-neutral-500">
            <p className="font-sans">
              © 2026 {t.brandName}. {t.footerRights}
            </p>

            <div className="flex gap-4 font-mono text-[10px] uppercase">
              <a href="#about" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">About</a>
              <span className="text-neutral-200 dark:text-neutral-850">|</span>
              <a href="#courses" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">Courses</a>
              <span className="text-neutral-200 dark:text-neutral-850">|</span>
              <a href="#quiz" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">Quiz</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
