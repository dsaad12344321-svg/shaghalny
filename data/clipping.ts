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
        image: "/tutorials/create-account/01.webp",
        text: "افتح تطبيق TikTok واضغط على تسجيل حساب جديد.",
      },
      {
        image: "/tutorials/create-account/02.webp",
        text: "اختر التسجيل باستخدام البريد الإلكتروني أو رقم الهاتف.",
      },
      {
        image: "/tutorials/create-account/03.webp",
        text: "أدخل بياناتك ثم أكمل إنشاء الحساب.",
      },
    ],
  },

  {
    slug: "requirements",
    title: "تحقيق شروط القناة",
    description: "تعرف على شروط تأهيل القناة.",
    steps: [],
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