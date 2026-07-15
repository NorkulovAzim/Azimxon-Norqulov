/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TranslationSet, Course, QuizQuestion, Testimonial } from './types';

export const translations: Record<'uz' | 'ru' | 'de', TranslationSet> = {
  uz: {
    brandName: "GERMANIST",
    heroTagline: "Nemis tili bilan kelajagingizni quring",
    heroSubheadline: "Toshkent markazidagi professional nemis tili o'quv markazi. Kafolatlangan natija va tajribali ustozlar yordamida Yevropada o'qish hamda ishlash imkoniyatiga ega bo'ling.",
    heroCtaQuiz: "Darajangizni aniqlash",
    heroCtaCourses: "Kurslarni ko'rish",
    
    navAbout: "Biz haqimizda",
    navCourses: "Kurslar",
    navQuiz: "Darajani aniqlash",
    navContact: "Aloqa",
    navRegistration: "Ro'yxatdan o'tish",
    
    toggleThemeLight: "Yorug' rejim",
    toggleThemeDark: "Tungi rejim",

    aboutTitle: "Nega aynan GERMANIST?",
    aboutSubtitle: "Bizning maqsadimiz — sizga shunchaki til o'rgatish emas, balki Germaniyada muvaffaqiyatga erishishingizga ko'maklashish.",
    aboutText1: "GERMANIST — bu professional nemis tili ta'limiga ixtisoslashgan innovatsion markazdir. Bizning o'quv dasturlarimiz Yevropa umumiy til standartlari (CEFR) va Gyote Instituti talablariga to'liq mos ravishda ishlab chiqilgan.",
    aboutText2: "Darslarimiz Toshkent shahrining qoq markazida, shuningdek zamonaviy onlayn platforma orqali olib boriladi. Biz har bir o'quvchiga individual yondashib, uning maqsadlariga (o'qish, ish yoki immigratsiya) eng qisqa yo'l bilan yetishini ta'minlaymiz.",
    
    statStudents: "2,400+",
    statStudentsLabel: "Muvaffaqiyatli bitiruvchilar",
    statPassRate: "96%",
    statPassRateLabel: "Gyote va TestDaF muvaffaqiyat darajasi",
    statTeachers: "12+",
    statTeachersLabel: "Sertifikatlangan mutaxassislar",
    
    featNativeTitle: "Tizimli yondashuv",
    featNativeDesc: "A1 dan C1 gacha bo'lgan darslar mantiqiy va chuqur o'ylangan tizim asosida olib boriladi.",
    featInteractiveTitle: "Interaktiv metodika",
    featInteractiveDesc: "Darslarda faqat quruq qoidalar emas, jonli muloqot va amaliy mashg'ulotlarga e'tibor qaratiladi.",
    featSmallGroupsTitle: "Kichik guruhlar",
    featSmallGroupsDesc: "Guruhlarda o'quvchilar soni cheklangan bo'lib, bu ustozning har bir kishiga vaqt ajratishini ta'minlaydi.",
    featCertificateTitle: "Sertifikatga tayyorgarlik",
    featCertificateDesc: "Goethe-Zertifikat, ÖSD va TestDaF imtihonlariga maxsus strategiyalar bo'yicha tayyorlaymiz.",

    coursesTitle: "Bizning Kurslarimiz",
    coursesSubtitle: "Sizning darajangiz va maqsadingizga mos ravishda ishlab chiqilgan o'quv dasturlari.",
    courseDuration: "Davomiyligi",
    courseIntensity: "Intensivlik",
    coursePrice: "Narxi",
    courseRegisterCta: "Kursga yozilish",
    
    courseA1Desc: "Nemis tilini mutlaqo noldan boshlovchilar uchun. Kundalik oddiy iboralar va asosiy grammatikani o'rganasiz.",
    courseA2Desc: "Boshlang'ich bilimga ega bo'lganlar uchun. O'zingiz, oilangiz va ishingiz haqida suhbatlashishni mukammallashtiring.",
    courseB1Desc: "Mustaqil muloqot darajasi. Germaniyada o'qish (Studienkolleg) yoki ishlash (Ausbildung) uchun minimal talab etiladigan daraja.",
    courseB2Desc: "Kengaytirilgan til darajasi. Murakkab matnlarni tushunish va o'z sohangizda erkin fikr bildirish qobiliyati.",
    courseC1Desc: "Professional daraja. Germaniya universitetlarida to'g'ridan-to'g'ri ta'lim olish va ilmiy faoliyat olib borish uchun.",
    courseExamPrepDesc: "Goethe-Zertifikat B1/B2 va TestDaF imtihonlariga qaratilgan maxsus taktik va simulyatsion tayyorgarlik kursi.",

    quizTitle: "Tezkor Daraja Aniqlash Testi",
    quizSubtitle: "Germaniyadagi standartlarga mos ravishda tuzilgan 6 ta savoldan iborat qisqa test yordamida o'z nemis tili bilimingizni tekshiring.",
    quizStartCta: "Testni boshlash",
    quizQuestionOf: "Savol",
    quizNext: "Keyingisi",
    quizSubmit: "Natijani ko'rish",
    quizResultTitle: "Sizning Natijangiz",
    quizResultIntro: "Bizning tahlillarimizga ko'ra, sizning darajangiz taxminan quyidagicha:",
    quizRecommendedLevel: "Tavsiya etiladigan kurs:",
    quizRetryCta: "Testni qayta topshirish",
    quizApplyLevelCta: "Ushbu darajaga yozilish",

    formTitle: "Kursga Ro'yxatdan O'tish",
    formSubtitle: "Quyidagi formani to'ldiring, mutaxassislarimiz tez orada siz bilan bog'lanib, bepul maslahat berishadi.",
    formName: "Ism va familiyangiz",
    formPhone: "Telefon raqamingiz",
    formEmail: "E-pochta manzili (ixtiyoriy)",
    formCourse: "Tanlangan kurs",
    formFormat: "Ta'lim shakli",
    formFormatOnline: "Onlayn (Masofaviy)",
    formFormatOffline: "Oflayn (Toshkent markazi)",
    formMessage: "Qo'shimcha izoh yoki savollaringiz",
    formSubmitCta: "Arizani jo'natish",
    formSuccessTitle: "Muvaffaqiyatli ro'yxatdan o'tdingiz!",
    formSuccessMessage: "Arizangiz qabul qilindi. GERMANIST koordinatori tez orada siz bilan aloqaga chiqadi. Bizni tanlaganingiz uchun tashakkur!",
    formValidationRequired: "Ushbu maydon to'ldirilishi shart",
    formValidationPhone: "Iltimos, haqiqiy telefon raqamini kiriting (+998...)",

    testimonialsTitle: "Muvaffaqiyat Hikoyalari",
    testimonialsSubtitle: "Bizda tahsil olib, Germaniyada o'z maqsadlariga erishgan talabalarimiz fikri.",

    faqTitle: "Ko'p Beriladigan Savollar",
    faqSubtitle: "Sizda qiziqish uyg'otgan eng muhim savollarga ochiq va aniq javoblar.",
    faqQ1: "Darslar qayerda va qanday formatda bo'ladi?",
    faqA1: "Darslarimiz Toshkent shahrining markazida (metro yaqinida) joylashgan shinam va zamonaviy o'quv xonalarida (oflayn) hamda interaktiv Zoom platformasi orqali (onlayn) guruh yoki yakka tartibda (individual) olib boriladi.",
    faqQ2: "Gyote sertifikati imtihonini topshirishga yordam berasizmi?",
    faqA2: "Ha, biz barcha darslarimizda Gyote Institutining rasmiy formatiga tayyorlaymiz. Shuningdek, bizda faqat imtihon savollari va strategiyalariga qaratilgan maxsus intensiv tayyorgarlik kurslari (Exam Prep) ham mavjud.",
    faqQ3: "Bitta darajani o'rganish uchun qancha vaqt ketadi?",
    faqA3: "O'rtacha intensiv kurslarimizda har bir darajani (masalan, A1 yoki A2) o'zlashtirish uchun 2-2.5 oy vaqt talab etiladi. Standart kurslarimizda esa bu muddat 3-4 oyni tashkil qiladi.",
    faqQ4: "To'lovlar uchun qanday qulayliklar bor?",
    faqA4: "Bizda to'lovlarni oylik bo'lib to'lash tizimi mavjud. Shuningdek, to'liq kurs uchun oldindan to'lov qilgan o'quvchilarga 10% gacha chegirmalar taqdim etiladi.",

    contactTitle: "Biz bilan Aloqa",
    contactSubtitle: "Sizni o'quv markazimizda kutib qolamiz. Savollaringiz bo'lsa, xohlagan vaqtingizda murojaat qiling.",
    contactPhone: "Telefon",
    contactEmail: "E-pochta",
    contactAddress: "Manzil",
    contactAddressValue: "Toshkent shahar, Yunusobod tumani, Amir Temur ko'chasi 45-uy (Metro: Minor)",
    contactHours: "Ish vaqti",
    contactHoursValue: "Dushanba - Shanba, 09:00 - 21:00",
    mapTitle: "Xaritadagi joylashuvimiz",

    footerRights: "Barcha huquqlar himoyalangan.",
    footerTagline: "Germaniya sari yo'lingiz shu yerdan boshlanadi."
  },
  ru: {
    brandName: "GERMANIST",
    heroTagline: "Постройте свое будущее с немецким языком",
    heroSubheadline: "Профессиональный центр немецкого языка в самом центре Ташкента. Получите возможность учиться и работать в Европе под руководством опытных сертифицированных преподавателей.",
    heroCtaQuiz: "Определить уровень",
    heroCtaCourses: "Посмотреть курсы",
    
    navAbout: "О нас",
    navCourses: "Курсы",
    navQuiz: "Тест на уровень",
    navContact: "Контакты",
    navRegistration: "Запись на курс",
    
    toggleThemeLight: "Светлая тема",
    toggleThemeDark: "Темная тема",

    aboutTitle: "Почему именно GERMANIST?",
    aboutSubtitle: "Наша цель — не просто научить вас языку, а помочь вам успешно интегрироваться и реализовать себя в Германии.",
    aboutText1: "GERMANIST — это инновационный центр, специализирующийся исключительно на качественном обучении немецкому языку. Наши программы полностью адаптированы под общеевропейские стандарты (CEFR) и требования Института Гёте.",
    aboutText2: "Занятия проходят в современном кампусе в центре Ташкента, а также на нашей интерактивной онлайн-платформе. Мы применяем индивидуальный подход к каждому студенту в зависимости от его целей (учеба, работа или иммиграция).",
    
    statStudents: "2,400+",
    statStudentsLabel: "Успешных выпускников",
    statPassRate: "96%",
    statPassRateLabel: "Сдача экзаменов Goethe и TestDaF",
    statTeachers: "12+",
    statTeachersLabel: "Сертифицированных учителей",
    
    featNativeTitle: "Системный подход",
    featNativeDesc: "Обучение от А1 до С1 проходит по строго выверенной и проверенной временем методологии.",
    featInteractiveTitle: "Интерактивная методика",
    featInteractiveDesc: "Минимум скучной зубрежки — максимум живого общения, ролевых игр и дебатов на немецком.",
    featSmallGroupsTitle: "Малые группы",
    featSmallGroupsDesc: "Ограниченное число студентов в группах позволяет преподавателю уделить внимание каждому.",
    featCertificateTitle: "Подготовка к экзаменам",
    featCertificateDesc: "Специальные тактики и разбор реальных вариантов тестов Goethe-Zertifikat, ÖSD и TestDaF.",

    coursesTitle: "Наши Курсы",
    coursesSubtitle: "Программы обучения, созданные под ваш текущий уровень знаний и жизненные цели.",
    courseDuration: "Длительность",
    courseIntensity: "Интенсивность",
    coursePrice: "Стоимость",
    courseRegisterCta: "Записаться",
    
    courseA1Desc: "Для тех, кто начинает учить немецкий абсолютно с нуля. Вы освоите базовую грамматику и простые обиходные фразы.",
    courseA2Desc: "Для продолжающих. Научитесь уверенно выражать мысли на повседневные темы (семья, покупки, работа, окружение).",
    courseB1Desc: "Пороговый уровень самостоятельного владения. Необходимый минимум для поступления в Studienkolleg или на работу (Ausbildung).",
    courseB2Desc: "Продвинутый уровень. Способность понимать сложные тексты, свободно вести беседу и аргументировать свое мнение.",
    courseC1Desc: "Профессиональный уровень. Необходим для прямого поступления в немецкие вузы и ведения научной деятельности.",
    courseExamPrepDesc: "Специализированный тренинг для успешной сдачи Goethe-Zertifikat B1/B2 и TestDaF с разбором стратегий.",

    quizTitle: "Быстрый тест на уровень знаний",
    quizSubtitle: "Пройдите короткий тест из 6 вопросов, составленный по европейским стандартам, чтобы примерно оценить ваш уровень немецкого.",
    quizStartCta: "Начать тест",
    quizQuestionOf: "Вопрос",
    quizNext: "Далее",
    quizSubmit: "Показать результат",
    quizResultTitle: "Ваш Результат",
    quizResultIntro: "Согласно вашим ответам, ваш ориентировочный уровень:",
    quizRecommendedLevel: "Рекомендуемый курс:",
    quizRetryCta: "Пройти тест заново",
    quizApplyLevelCta: "Записаться на этот уровень",

    formTitle: "Запись на Обучение",
    formSubtitle: "Заполните форму ниже, и наши координаторы свяжутся с вами для подробной консультации и тестирования.",
    formName: "Ваше имя и фамилия",
    formPhone: "Номер телефона",
    formEmail: "Электронная почта (необязательно)",
    formCourse: "Выбранный курс",
    formFormat: "Формат обучения",
    formFormatOnline: "Онлайн (Дистанционно)",
    formFormatOffline: "Офлайн (В центре Ташкента)",
    formMessage: "Дополнительные комментарии",
    formSubmitCta: "Отправить заявку",
    formSuccessTitle: "Заявка успешно отправлена!",
    formSuccessMessage: "Мы приняли вашу заявку. Координатор GERMANIST свяжется с вами в ближайшее время. Спасибо за доверие!",
    formValidationRequired: "Это поле обязательно для заполнения",
    formValidationPhone: "Пожалуйста, введите корректный номер телефона (+998...)",

    testimonialsTitle: "Истории Успеха",
    testimonialsSubtitle: "Реальные отзывы наших выпускников, которые уже учатся или работают в Германии.",

    faqTitle: "Часто Задаваемые Вопросы",
    faqSubtitle: "Ответы на самые популярные и важные вопросы будущих студентов.",
    faqQ1: "Где проходят занятия и в каком формате?",
    faqA1: "Занятия проходят в наших уютных современных классах в центре Ташкента (около метро), а также в интерактивном формате через платформу Zoom для онлайн-студентов.",
    faqQ2: "Помогаете ли вы с регистрацией и сдачей Goethe-экзамена?",
    faqA2: "Да, наши программы полностью соответствуют формату Goethe-Zertifikat. Мы проводим пробные экзамены (Mock Tests) и помогаем психологически и технически подготовиться к реальному тесту.",
    faqQ3: "Сколько времени уходит на прохождение одного уровня?",
    faqA3: "На интенсивных курсах один уровень (например, А1 или А2) занимает 2-2.5 месяца. При стандартном темпе обучения на прохождение уровня требуется 3-4 месяца.",
    faqQ4: "Есть ли рассрочка или скидки на обучение?",
    faqA4: "Да, вы можете оплачивать обучение помесячно. Кроме того, при полной оплате курса вперед мы предоставляем скидку до 10%.",

    contactTitle: "Контакты",
    contactSubtitle: "Будем рады видеть вас в нашем центре. Мы всегда готовы ответить на ваши вопросы.",
    contactPhone: "Телефон",
    contactEmail: "Эл. почта",
    contactAddress: "Адрес",
    contactAddressValue: "г. Ташкент, Юнусабадский р-н, пр-т Амира Темура, д. 45 (Ориентир: метро Минор)",
    contactHours: "Часы работы",
    contactHoursValue: "Понедельник - Суббота, 09:00 - 21:00",
    mapTitle: "Мы на карте",

    footerRights: "Все права защищены.",
    footerTagline: "Ваш путь в Германию начинается здесь."
  },
  de: {
    brandName: "GERMANIST",
    heroTagline: "Bauen Sie Ihre Zukunft mit Deutsch",
    heroSubheadline: "Professionelles Deutsch-Zentrum im Herzen von Taschkent. Nutzen Sie die Chance, unter der Leitung erfahrener, zertifizierter Lehrkräfte in Europa zu studieren und zu arbeiten.",
    heroCtaQuiz: "Niveau testen",
    heroCtaCourses: "Kurse ansehen",
    
    navAbout: "Über uns",
    navCourses: "Kurse",
    navQuiz: "Einstufungstest",
    navContact: "Kontakt",
    navRegistration: "Anmeldung",
    
    toggleThemeLight: "Helles Design",
    toggleThemeDark: "Dunkles Design",

    aboutTitle: "Warum GERMANIST?",
    aboutSubtitle: "Unser Ziel ist es nicht nur, Ihnen die Sprache beizubringen, sondern Ihnen den Weg für einen erfolgreichen Start in Deutschland zu ebnen.",
    aboutText1: "GERMANIST ist ein innovatives Bildungszentrum, das sich auf den professionellen Deutschunterricht spezialisiert hat. Unsere Curricula entsprechen voll und ganz den Standards des Gemeinsamen Europäischen Referenzrahmens (GER) und des Goethe-Instituts.",
    aboutText2: "Der Unterricht findet in unserem modernen Campus im Zentrum von Taschkent sowie über unsere hochentwickelte Online-Plattform statt. Wir garantieren individuelle Betreuung für jeden Studierenden entsprechend seinen akademischen oder beruflichen Zielen.",
    
    statStudents: "2.400+",
    statStudentsLabel: "Erfolgreiche Absolventen",
    statPassRate: "96%",
    statPassRateLabel: "Bestehensquote bei Goethe & TestDaF",
    statTeachers: "12+",
    statTeachersLabel: "Zertifizierte Lehrkräfte",
    
    featNativeTitle: "Systematischer Ansatz",
    featNativeDesc: "Das Lernen von A1 bis C1 folgt einem sorgfältig ausgearbeiteten und wissenschaftlich fundierten Lehrplan.",
    featInteractiveTitle: "Interaktive Methoden",
    featInteractiveDesc: "Keine trockene Theorie — der Schwerpunkt liegt auf lebendiger Kommunikation und praxisnahen Übungen.",
    featSmallGroupsTitle: "Kleine Gruppen",
    featSmallGroupsDesc: "Eine begrenzte Teilnehmerzahl pro Kurs stellt sicher, dass die Lehrkraft auf jeden Einzelnen eingehen kann.",
    featCertificateTitle: "Prüfungsvorbereitung",
    featCertificateDesc: "Spezielle Strategien und Simulationen für Goethe-Zertifikat, ÖSD und TestDaF im echten Prüfungsformat.",

    coursesTitle: "Unsere Deutschkurse",
    coursesSubtitle: "Perfekt auf Ihr aktuelles Sprachniveau und Ihre Zukunftspläne abgestimmte Lehrprogramme.",
    courseDuration: "Dauer",
    courseIntensity: "Intensität",
    coursePrice: "Gebühr",
    courseRegisterCta: "Jetzt anmelden",
    
    courseA1Desc: "Für absolute Anfänger ohne Vorkenntnisse. Sie erlernen die grundlegende Grammatik und einfache Alltagsausdrücke.",
    courseA2Desc: "Für Fortgeschrittene mit Grundkenntnissen. Lernen Sie, sich über vertraute Alltagsthemen präzise zu verständigen.",
    courseB1Desc: "Selbstständige Sprachverwendung. Das absolute Minimum für die Bewerbung an einem Studienkolleg oder für eine Ausbildung.",
    courseB2Desc: "Fortgeschrittenes Niveau. Fähigkeit, komplexe Texte zu verstehen, fließend zu argumentieren und Fachgespräche zu führen.",
    courseC1Desc: "Fachkundige Sprachkenntnisse. Erforderlich für den direkten Einstieg in ein deutschsprachiges Universitätsstudium.",
    courseExamPrepDesc: "Spezialisiertes Training für das erfolgreiche Bestehen des Goethe-Zertifikats B1/B2 und TestDaF mit Taktik-Fokus.",

    quizTitle: "Schneller Einstufungstest",
    quizSubtitle: "Machen Sie einen kurzen Test mit 6 Fragen, der nach europäischen Standards entwickelt wurde, um Ihr Deutschniveau einzuschätzen.",
    quizStartCta: "Test starten",
    quizQuestionOf: "Frage",
    quizNext: "Weiter",
    quizSubmit: "Ergebnis anzeigen",
    quizResultTitle: "Ihr Testergebnis",
    quizResultIntro: "Basierend auf Ihren Antworten ist Ihr geschätztes Deutschniveau:",
    quizRecommendedLevel: "Empfohlener Kurs:",
    quizRetryCta: "Test wiederholen",
    quizApplyLevelCta: "Für dieses Niveau anmelden",

    formTitle: "Kursanmeldung",
    formSubtitle: "Füllen Sie das Formular aus. Unsere Berater werden sich in Kürze mit Ihnen in Verbindung setzen.",
    formName: "Vor- und Nachname",
    formPhone: "Telefonnummer",
    formEmail: "E-Mail-Adresse (optional)",
    formCourse: "Ausgewählter Kurs",
    formFormat: "Unterrichtsform",
    formFormatOnline: "Online (Fernunterricht)",
    formFormatOffline: "Präsenz (Im Zentrum von Taschkent)",
    formMessage: "Zusätzliche Nachricht",
    formSubmitCta: "Anmeldung senden",
    formSuccessTitle: "Erfolgreich angemeldet!",
    formSuccessMessage: "Wir haben Ihre Anmeldung erhalten. Ein GERMANIST-Koordinator wird sich in Kürze bei Ihnen melden. Vielen Dank für Ihr Vertrauen!",
    formValidationRequired: "Dieses Feld ist erforderlich",
    formValidationPhone: "Bitte geben Sie eine gültige Telefonnummer ein (+998...)",

    testimonialsTitle: "Erfolgsgeschichten",
    testimonialsSubtitle: "Was unsere ehemaligen Schüler sagen, die jetzt bereits in Deutschland studieren oder arbeiten.",

    faqTitle: "Häufig gestellte Fragen",
    faqSubtitle: "Direkte und klare Antworten auf die wichtigsten Fragen unserer zukünftigen Kursteilnehmer.",
    faqQ1: "Wo und in welchem Format finden die Kurse statt?",
    faqA1: "Die Kurse finden in unseren modernen Klassenzimmern im Zentrum von Taschkent (nahe Metro Minor) statt sowie online via interaktiver Zoom-Sitzungen.",
    faqQ2: "Helfen Sie bei der Anmeldung zur Goethe-Prüfung?",
    faqA2: "Ja, alle unsere Kurse bereiten intensiv auf das Goethe-Format vor. Wir führen regelmäßige Probeprüfungen durch, um Ihnen Sicherheit zu geben.",
    faqQ3: "Wie lange dauert es, ein Niveau abzuschließen?",
    faqA3: "In unseren Intensivkursen dauert ein Niveau (z. B. A1 oder A2) ca. 2 bis 2,5 Monate. In Standardkursen benötigen Sie etwa 3 bis 4 Monate.",
    faqQ4: "Gibt es Ratenzahlung oder Rabatte?",
    faqA4: "Ja, Sie können die Kursgebühren monatlich bezahlen. Bei Vorauszahlung eines kompletten Niveaus gewähren wir einen Rabatt von bis zu 10%.",

    contactTitle: "Kontakt",
    contactSubtitle: "Wir freuen uns auf Ihren Besuch in unserem Zentrum. Wir stehen Ihnen jederzeit zur Verfügung.",
    contactPhone: "Telefon",
    contactEmail: "E-Mail",
    contactAddress: "Adresse",
    contactAddressValue: "Taschkent, Yunusobod-Bezirk, Amir-Temur-Straße 45 (Orientierungspunkt: U-Bahn Minor)",
    contactHours: "Öffnungszeiten",
    contactHoursValue: "Montag - Samstag, 09:00 - 21:00 Uhr",
    mapTitle: "Standort auf der Karte",

    footerRights: "Alle Rechte vorbehalten.",
    footerTagline: "Ihr Weg nach Deutschland beginnt hier."
  }
};

export const coursesData: Course[] = [
  {
    id: "a1",
    level: "A1",
    title: "Grundstufe Deutsch A1",
    description: {
      uz: "Nemis tilini mutlaqo noldan boshlovchilar uchun. Kundalik oddiy iboralar va asosiy grammatikani o'rganasiz.",
      ru: "Для начинающих с нуля. Вы освоите правила чтения, базовую грамматику и научитесь простым разговорным фразам.",
      de: "Für Anfänger ohne Vorkenntnisse. Lernen Sie grundlegende Ausdrücke und einfache grammatikalische Strukturen."
    },
    duration: "2 - 2.5 Monate",
    intensity: "3x / Woche (Intensiv)",
    price: "1,200,000 UZS / Month",
    skillsAcquired: ["Buchstabieren & Vorstellung", "Einfache Fragen stellen", "Zahlen & Einkaufen", "Grundzeitformen (Präsens)"]
  },
  {
    id: "a2",
    level: "A2",
    title: "Grundstufe Deutsch A2",
    description: {
      uz: "Boshlang'ich bilimga ega bo'lganlar uchun. O'zingiz, oilangiz va ishingiz haqida suhbatlashishni mukammallashtiring.",
      ru: "Для тех, кто уже знает основы. Курс направлен на расширение словарного запаса и свободное описание повседневных ситуаций.",
      de: "Für Fortgeschrittene mit Grundkenntnissen. Sprechen Sie über Ihre Familie, Ihre Arbeit und Ihre direkte Umgebung."
    },
    duration: "2 - 2.5 Monate",
    intensity: "3x / Woche (Intensiv)",
    price: "1,300,000 UZS / Month",
    skillsAcquired: ["Wegbeschreibung & Reisen", "Vergangenheit (Perfekt & Präteritum)", "Nebensätze (weil, dass, wenn)", "Grundlegende E-Mails schreiben"]
  },
  {
    id: "b1",
    level: "B1",
    title: "Mittelstufe Deutsch B1",
    description: {
      uz: "Mustaqil muloqot darajasi. Germaniyada o'qish (Studienkolleg) yoki ishlash (Ausbildung) uchun minimal talab etiladigan daraja.",
      ru: "Пороговый средний уровень. Необходим для поступления в колледж (Studienkolleg) или работы в Германии (Ausbildung).",
      de: "Selbstständige Sprachanwendung. Der Schlüssel für das Studienkolleg, die Berufsausbildung oder Arbeit in Deutschland."
    },
    duration: "2.5 - 3 Monate",
    intensity: "3x / Woche (Intensiv)",
    price: "1,400,000 UZS / Month",
    skillsAcquired: ["Meinung äußern & argumentieren", "Arbeitswelt & Bewerbung", "Passiv & Konjunktiv II", "Längere Zeitungsartikel verstehen"]
  },
  {
    id: "b2",
    level: "B2",
    title: "Mittelstufe Deutsch B2",
    description: {
      uz: "Kengaytirilgan til darajasi. Murakkab matnlarni tushunish va o'z sohangizda erkin fikr bildirish qobiliyati.",
      ru: "Выше среднего. Свободное общение с носителями языка, понимание сложных абстрактных тем и аргументация в дискуссиях.",
      de: "Fortgeschrittene Sprachverwendung. Ermöglicht fließende Diskussionen mit Muttersprachlern und Verständnis von Fachtexten."
    },
    duration: "2.5 - 3 Monate",
    intensity: "3x / Woche (Intensiv)",
    price: "1,500,000 UZS / Month",
    skillsAcquired: ["Komplexe Diskussionen führen", "Fachsprache & Berufskommunikation", "Präsentationen halten", "Schilderung abstrakter Probleme"]
  },
  {
    id: "c1",
    level: "C1",
    title: "Oberstufe Deutsch C1",
    description: {
      uz: "Professional daraja. Germaniya universitetlarida to'g'ridan-to'g'ri ta'lim olish va ilmiy faoliyat olib borish uchun.",
      ru: "Профессиональный уровень. Свободное владение в академической среде, понимание скрытых смыслов и иронии, свободное письмо.",
      de: "Fachkundige Sprachkenntnisse. Erforderlich für ein reguläres Hochschulstudium und akademische Berufe in Deutschland."
    },
    duration: "3 Monate",
    intensity: "3x / Woche",
    price: "1,700,000 UZS / Month",
    skillsAcquired: ["Wissenschaftliches Arbeiten", "Nuancenreiche Argumentation", "Fließendes, fehlerfreies Schreiben", "Komplexe literarische Texte"]
  },
  {
    id: "prep",
    level: "Prep",
    title: "Goethe & TestDaF Prep",
    description: {
      uz: "Goethe-Zertifikat B1/B2 va TestDaF imtihonlariga qaratilgan maxsus taktik va simulyatsion tayyorgarlik kursi.",
      ru: "Специальный тренинг перед экзаменами. Разбор типичных ошибок, тренировка всех частей теста (Schreiben, Sprechen, Hören, Lesen).",
      de: "Spezifisches Prüfungstraining für Goethe B1/B2 und TestDaF. Simulieren von realen Prüfungsbedingungen und Zeiteinteilung."
    },
    duration: "1 Month",
    intensity: "4x / Woche (Super-Intensiv)",
    price: "1,600,000 UZS / Course",
    skillsAcquired: ["Prüfungssimulationen under Zeitdruck", "Spezifische Schreibschablonen", "Taktiken für das Hör- & Leseverstehen", "Mündlicher Ausdruck-Tricks"]
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: {
      uz: "Suhbatdoshga qanday qilib 'Sizning ahvolingiz qanday?' deb murojaat qilinadi?",
      ru: "Как вежливо спросить собеседника 'Как Ваши дела?' на немецком?",
      de: "Wie fragt man höflich nach dem Befinden: 'Wie geht es ___?'"
    },
    options: ["dir", "euch", "Ihnen", "dich"],
    correctIndex: 2,
    explanation: {
      uz: "Höflichkeitsform (Sizlash) shaklida 'Ihnen' ishlatiladi. 'Wie geht es Ihnen?' — Sizning ahvolingiz qanday?",
      ru: "В вежливой форме обращения используется местоимение 'Ihnen'. 'Wie geht es Ihnen?' — Как у Вас дела?",
      de: "Für die formelle Anrede (Sie) verwendet man das Dativpronomen 'Ihnen'."
    }
  },
  {
    id: 2,
    question: {
      uz: "Gapni mos fe'l bilan to'ldiring: 'Ich ___ gestern viel Deutsch gelernt.'",
      ru: "Заполните пропуск: 'Ich ___ gestern viel Deutsch gelernt.'",
      de: "Ergänzen Sie das Hilfsverb: 'Ich ___ gestern viel Deutsch gelernt.'"
    },
    options: ["bin", "habe", "werde", "hatte"],
    correctIndex: 1,
    explanation: {
      uz: "'Lernen' fe'lining o'tgan zamon (Perfekt) shakli 'haben' yordamchi fe'li bilan yasaladi: 'Ich habe gelernt.'",
      ru: "Прошедшее разговорное время (Perfekt) для глагола 'lernen' образуется с вспомогательным глаголом 'haben'.",
      de: "Das Perfekt von 'lernen' wird mit dem Hilfsverb 'haben' gebildet."
    }
  },
  {
    id: 3,
    question: {
      uz: "Qaysi predlog vaqtni ifodalash uchun to'g'ri keladi? 'Der Unterricht beginnt ___ 9:00 Uhr.'",
      ru: "Какой предлог времени подходит: 'Der Unterricht beginnt ___ 9:00 Uhr.'?",
      de: "Welche temporale Präposition ist richtig: 'Der Unterricht beginnt ___ 9:00 Uhr.'?"
    },
    options: ["am", "im", "um", "auf"],
    correctIndex: 2,
    explanation: {
      uz: "Soat vaqtlari bilan har doim 'um' predlogi ishlatiladi: 'um 9:00 Uhr' (soat 9 da).",
      ru: "С точным временем на часах всегда употребляется предлог 'um': 'um 9:00 Uhr' (в 9 часов).",
      de: "Für präzise Uhrzeiten wird im Deutschen die Präposition 'um' verwendet."
    }
  },
  {
    id: 4,
    question: {
      uz: "Konjunktiv II (istak-shart) shaklini tanlang: 'Wenn ich Zeit hätte, ___ ich nach Berlin reisen.'",
      ru: "Выберите форму сослагательного наклонения: 'Wenn ich Zeit hätte, ___ ich nach Berlin reisen.'",
      de: "Wählen Sie die richtige Konjunktiv II Form: 'Wenn ich Zeit hätte, ___ ich nach Berlin reisen.'"
    },
    options: ["werde", "würde", "hätte", "wollte"],
    correctIndex: 1,
    explanation: {
      uz: "Kelajak yoki hozirgi zamondagi xayoliy niyatlar 'würde + Infinitiv' orqali ifodalanadi: 'ich würde reisen'.",
      ru: "Для выражения гипотетического действия в настоящем/будущем времени используется конструкция 'würde + инфинитив'.",
      de: "Irreale Bedingungen der Gegenwart werden meist mit 'würde + Infinitiv' gebildet."
    }
  },
  {
    id: 5,
    question: {
      uz: "Predlogni toping: 'Er freut sich schon ___ den nächsten Urlaub.' (kelgusi ta'tildan xursand bo'lmoq)",
      ru: "Выберите правильный предлог: 'Er freut sich schon ___ den nächsten Urlaub.' (радоваться предстоящему отпуску)",
      de: "Ergänzen Sie die Präposition: 'Er freut sich schon ___ den nächsten Urlaub.'"
    },
    options: ["über", "auf", "für", "an"],
    correctIndex: 1,
    explanation: {
      uz: "Kelajakdagi quvonchli voqeaga nisbatan 'sich freuen auf + Akkusativ' ishlatiladi. O'tib ketgan voqea uchun esa 'über' bo'ladi.",
      ru: "Глагол 'sich freuen auf + Akkusativ' означает радоваться предстоящему событию. 'Über' употребляется для прошедших событий.",
      de: "Sich freuen 'auf' bezieht sich auf ein zukünftiges Ereignis. Sich freuen 'über' bezieht sich auf die Gegenwart oder Vergangenheit."
    }
  },
  {
    id: 6,
    question: {
      uz: "Qaysi artikl mos keladi? 'Trotz ___ Regens (Genitiv) machten wir einen Spaziergang.'",
      ru: "Выберите правильное окончание артикля: 'Trotz ___ Regens (Genitiv) machten wir einen Spaziergang.'",
      de: "Welcher Artikel passt in den Genitiv: 'Trotz ___ Regens machten wir einen Spaziergang.'"
    },
    options: ["dem", "den", "des", "das"],
    correctIndex: 2,
    explanation: {
      uz: "'Trotz' predlogi Genitiv (qaratqich kelishigi)ni talab qiladi. Erkak jinsidagi 'der Regen' so'zi Genitivda 'des Regens' bo'ladi.",
      ru: "Предлог 'trotz' требует родительного падежа (Genitiv). Мужской род 'der Regen' в родительном падеже принимает форму 'des Regens'.",
      de: "Die Präposition 'trotz' regiert den Genitiv. 'Der Regen' wird im Genitiv Maskulinum zu 'des Regens'."
    }
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Jasur Alimov",
    role: {
      uz: "Myunxen Texnika Universiteti talabasi",
      ru: "Студент Технического университета Мюнхена",
      de: "Student an der Technischen Universität München"
    },
    quote: {
      uz: "GERMANIST tufayli men 6 oyda B2 darajasiga erishdim va Gyote imtihonidan 88 ball oldim. Hozir Myunxenda bepul ta'lim olyapman!",
      ru: "Благодаря GERMANIST я достиг уровня B2 всего за 6 месяцев и сдал экзамен на 88 баллов. Сейчас я бесплатно учусь в Мюнхене!",
      de: "Dank GERMANIST habe ich in nur 6 Monaten das B2-Niveau erreicht und die Goethe-Prüfung mit 88 Punkten bestanden. Jetzt studiere ich gebührenfrei in München!"
    },
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Kamola Umarova",
    role: {
      uz: "Aspirant / Hamshira, Frankfurt am Main",
      ru: "Аспирант / Медсестра, Франкфурт-на-Майне",
      de: "Auszubildende zur Pflegefachfrau, Frankfurt am Main"
    },
    quote: {
      uz: "Ausbildung dasturi bo'yicha hujjatlarim qabul qilinishi uchun menga tezda B1 kerak edi. Ustozlarning maxsus yondashuvi evaziga muvaffaqiyatli topshirdim.",
      ru: "Для программы Ausbildung мне срочно требовался сертификат B1. Благодаря интенсивным практическим занятиям я сдала экзамен с первой попытки.",
      de: "Für mein Ausbildungsprogramm brauchte ich dringend das B1-Zertifikat. Dank der intensiven praktischen Übungen habe ich es auf Anhieb geschafft."
    },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Dmitriy Pak",
    role: {
      uz: "Dasturchi, Berlin",
      ru: "Программист, Берлин",
      de: "Softwareentwickler, Berlin"
    },
    quote: {
      uz: "IT sohasida ishlasam ham, nemis tili kundalik hayot va doimiy yashash ruxsatnomasi olish uchun juda kerak edi. GERMANIST onlayn kursi juda qulay va sifatli bo'ldi.",
      ru: "Хотя я работаю в сфере IT, немецкий язык был очень нужен для повседневной жизни и ВНЖ. Онлайн-курс GERMANIST оказался невероятно удобным и гибким.",
      de: "Obwohl ich in der IT-Branche arbeite, war Deutsch für das tägliche Leben und die Niederlassungserlaubnis essenziell. Der GERMANIST Onlinekurs war perfekt strukturiert."
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];
