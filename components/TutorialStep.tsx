import Image from "next/image";

type Props = {
  image: string;
  text: string;
};

export default function TutorialStep({
  image,
  text,
}: Props) {
  return (
    <section className="mb-12">

      <Image
        src={image}
        alt={text}
        width={1200}
        height={700}
        className="w-full rounded-xl border"
      />

      <p className="mt-4 text-lg leading-8">
        {text}
      </p>

    </section>
  );
}