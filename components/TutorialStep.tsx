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
    <section className="mb-10">

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <Image
          src={image}
          alt={text}
          width={1200}
          height={700}
          className="w-full h-auto"
        />
      </div>

      <p className="mt-4 text-lg leading-8 text-gray-700">
        {text}
      </p>

    </section>
  );
}