/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'uz' | 'ru' | 'de';
export type Theme = 'light' | 'dark';

export interface TranslationSet {
  // Navigation & General
  brandName: string;
  heroTagline: string;
  heroSubheadline: string;
  heroCtaQuiz: string;
  heroCtaCourses: string;
  
  // Sections
  navAbout: string;
  navCourses: string;
  navQuiz: string;
  navContact: string;
  navRegistration: string;
  
  // Theme Toggle Label
  toggleThemeLight: string;
  toggleThemeDark: string;

  // About Section
  aboutTitle: string;
  aboutSubtitle: string;
  aboutText1: string;
  aboutText2: string;
  statStudents: string;
  statStudentsLabel: string;
  statPassRate: string;
  statPassRateLabel: string;
  statTeachers: string;
  statTeachersLabel: string;
  
  // Features
  featNativeTitle: string;
  featNativeDesc: string;
  featInteractiveTitle: string;
  featInteractiveDesc: string;
  featSmallGroupsTitle: string;
  featSmallGroupsDesc: string;
  featCertificateTitle: string;
  featCertificateDesc: string;

  // Courses Section
  coursesTitle: string;
  coursesSubtitle: string;
  courseDuration: string;
  courseIntensity: string;
  coursePrice: string;
  courseRegisterCta: string;
  courseA1Desc: string;
  courseA2Desc: string;
  courseB1Desc: string;
  courseB2Desc: string;
  courseC1Desc: string;
  courseExamPrepDesc: string;

  // Level Quiz Section
  quizTitle: string;
  quizSubtitle: string;
  quizStartCta: string;
  quizQuestionOf: string;
  quizNext: string;
  quizSubmit: string;
  quizResultTitle: string;
  quizResultIntro: string;
  quizRecommendedLevel: string;
  quizRetryCta: string;
  quizApplyLevelCta: string;

  // Registration Form
  formTitle: string;
  formSubtitle: string;
  formName: string;
  formPhone: string;
  formEmail: string;
  formCourse: string;
  formFormat: string;
  formFormatOnline: string;
  formFormatOffline: string;
  formMessage: string;
  formSubmitCta: string;
  formSuccessTitle: string;
  formSuccessMessage: string;
  formValidationRequired: string;
  formValidationPhone: string;

  // Testimonials
  testimonialsTitle: string;
  testimonialsSubtitle: string;

  // FAQ
  faqTitle: string;
  faqSubtitle: string;
  faqQ1: string;
  faqA1: string;
  faqQ2: string;
  faqA2: string;
  faqQ3: string;
  faqA3: string;
  faqQ4: string;
  faqA4: string;

  // Contact & Location
  contactTitle: string;
  contactSubtitle: string;
  contactPhone: string;
  contactEmail: string;
  contactAddress: string;
  contactAddressValue: string;
  contactHours: string;
  contactHoursValue: string;
  mapTitle: string;

  // Footer
  footerRights: string;
  footerTagline: string;
}

export interface Course {
  id: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'Prep';
  title: string;
  description: {
    uz: string;
    ru: string;
    de: string;
  };
  duration: string;
  intensity: string;
  price: string;
  skillsAcquired: string[];
}

export interface QuizQuestion {
  id: number;
  question: {
    uz: string;
    ru: string;
    de: string;
  };
  options: string[];
  correctIndex: number;
  explanation: {
    uz: string;
    ru: string;
    de: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: {
    uz: string;
    ru: string;
    de: string;
  };
  quote: {
    uz: string;
    ru: string;
    de: string;
  };
  image: string;
}

export interface RegistrationSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  courseId: string;
  format: 'online' | 'offline';
  message: string;
  createdAt: string;
}
