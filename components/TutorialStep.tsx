type Props = {
  image: string;
  text: string;
};

export default function TutorialStep({
  image,
  text,
}: Props) {
  return (
    <section className="space-y-4">
      <img
        src={image}
        width={400}
        height={400}
        alt={text}
        className="w-full rounded-xl border"
      />

      <p className="text-lg leading-8">
        {text}
      </p>
    </section>
  );
}