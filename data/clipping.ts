export type TutorialImage = {
  image: string;
  text: string;
};

export type Lesson = {
  slug: string;
  title: string;
  description: string;
  images: TutorialImage[];
};

export const clippingLessons: Lesson[] = [];