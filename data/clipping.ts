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
    description: "قم بالتواصل مع الادمن واربط القناة بمنصة الأرباح الخاصة بك.",
    steps: [],
  },

  {
  slug: "tiktok-studio",
  title: "تحميل TikTok Studio",
  description: "قم بتحميل تطبيق TikTok Studio والتقاط لقطات الشاشة المطلوبة لإرسالها إلى الأدمن.",
  steps: [
    {
      image: "/st1.jpg",
      text: "قم بتحميل تطبيق TikTok Studio من متجر Google Play ثم ثبّته على هاتفك.",
    },
    {
      image: "/st2.jpg",
      text: "افتح التطبيق وقم بتسجيل الدخول باستخدام نفس حساب TikTok الخاص بك.",
    },
    {
      image: "/st3.jpg",
      text: "من الشريط السفلي، اضغط على (التحليلات) أو (Analytics).",
    },
    {
      image: "/st4.jpg",
      text: "في أعلى الصفحة اختر (المشاهدون) أو (Viewers)، ثم التقط لقطة الشاشة الأولى.",
    },
    {
      image: "/st5.jpg",
      text: "اضغط على (العمر) أو (Age)، ثم التقط لقطة الشاشة الثانية.",
    },
    {
      image: "/st6.jpg",
      text: "اضغط على (الموقع) أو (Locations)، ثم التقط لقطة الشاشة الثالثة.",
    },
    {
      image: "/st7.png",
      text: "قم بتجميع لقطات الشاشة الثلاث في صورة واحدة، ثم أرسلها إلى الأدمن.",
    },
  ],
},

  {
  slug: "first-post",
  title: "تجهيز أول منشور",
  description: "اتبع هذه الخطوات لتجهيز ونشر أول فيديو بالطريقة الصحيحة.",
  steps: [
    {
      image: "/op1.png",
      text: "سيقوم الأدمن بإرسال 6 صور مشابهة للصورة الموضحة. استخدم هذه الصور لإنشاء الفيديو.",
    },
  {
  image: "/op2.jpg",
  text: "افتح تطبيق TikTok، ثم ابدأ برفع الصور بالترتيب كما هو موضح في الصورة. كما يمكنك اختيار موسيقى على ذوقك.",
},
    {
      image: "/op3.jpg",
      text: "انسخ الوسوم التالية في وصف الفيديو:\n\n#contentrewardspartner #clippers #اكسبلور #explore #clipper #viraltiktok\n\n@Content Rewards\n\nقبل نشر الفيديو يجب إبلاغ الأدمن. يجب أن يتم ذلك قبل مرور 30 دقيقة من وقت النشر حتى يتم قبول الفيديو، وسيقوم الأدمن بمتابعة الخطوات معك.",
    },
  ],
},
];