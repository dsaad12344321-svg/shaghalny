export type TutorialStep = {
  image: string;
  text: string;
};

export type Lesson = {
  slug: string;
  title: string;
  description: string;
  steps: TutorialStep[];
};

export const clippingLessons: Lesson[] = [
  {
    slug: "create-account",
    title: "إنشاء قناة TikTok",
    description: "تعلم كيفية إنشاء قناة TikTok خطوة بخطوة.",
    steps: [
      {
        image: "/cr1.jpg",
        text: "افتح تطبيق TikTok واضغط على تسجيل دخول.",
      },
      {
        image: "/cr2.jpg",
        text: "اختر إضافة حساب آخر أو إنشاء حساب إذا لم يكن لديك حساب ",
      },
      {
        image: "/cr3.jpg",
        text: "اختر طريقة لتسجيل الدخول",
      },
    ],
  },

  {
  slug: "requirements",
  title: "تحقيق شروط القناة",
  description: "قم بتجهيز بيانات القناة بالشكل الصحيح قبل البدء في نشر المحتوى.",
  steps: [
    {
      image: "/re1.jpg",
      text: "لتغيير بيانات القناة اضغط على زر (تعديل الملف الشخصي).",
    },
    {
      image: "/re2.jpg",
      text: "ستجد 4 بيانات رئيسية يجب تعديلها وهي: الصورة الشخصية، الاسم، اسم المستخدم، والسيرة الذاتية.",
    },
    {
      image: "/re3.jpg",
      text: "اختر صورة شخصية احترافية لشاب أو فتاة بمظهر أنيق أو ناجح، ويفضل أن تكون بجوار سيارة أو في مكان يعكس النجاح المالي. تجنب استخدام الصور العشوائية أو منخفضة الجودة.",
    },
    {
      image: "/re4.jpg",
      text: `اختر اسمًا مناسبًا للقناة، مثل:

• ثروة بلا حدود
• طريق الثراء
• عقل المستثمر
• مال وحرية
• الاستقلال المالي
• نحو الثراء
• كن ثريًا
• بوابة الثروة
• ثروتك تبدأ هنا
• رحلة الثراء
• مال بذكاء
• مفاتيح الثروة
• المستقبل المالي
• بناء الثروة
• أسرار الثراء
• اقتصادك
• صانع الثروة
• نمو المال
• حرية المال
• المال الذكي

ويمكنك أيضًا استخدام أسماء إنجليزية مثل:

• Wealth Journey
• Wealth Mindset
• Money Vision
• Smart Investor
• Rich Life
• Freedom Finance
• Millionaire Path
• Wealth Hub
• Passive Income
• Financial Success
• Money Empire
• Future Wealth
• Rich Mind
• Success Finance
• Wealth Builder`,
    },
    {
      image: "/re5.jpg",
      text: "اسم المستخدم يجب أن يكون بسيطًا مثل: ali.hassan أو heba.ali. لا تستخدم الشرطة السفلية (_) أو أي رموز أخرى. يفضل عدم إضافة أرقام، ولكن يمكن إضافتها إذا كان الاسم مستخدمًا.",
    },
    {
      image: "/re6.jpg",
      text: `في السيرة الذاتية انسخ النص التالي:

Generate income without followers and without showing your face

https://contentrewards.com/r/erian`,
    },
  ],
},
  {
    slug: "monetization",
    title: "ربط القناة بمنصة الأرباح",
    description: "اربط القناة بمنصة الأرباح الخاصة بك.",
    steps: [],
  },

  {
    slug: "tiktok-studio",
    title: "تحميل TikTok Studio",
    description: "تحميل وتثبيت TikTok Studio.",
    steps: [],
  },

  {
    slug: "first-post",
    title: "تجهيز أول منشور",
    description: "تعلم تجهيز أول منشور بالطريقة الصحيحة.",
    steps: [],
  },
];