import Image from "next/image";
export function HomePageCard(props: {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  alignment: string;
}) {
  const { title, description, imgSrc, imgAlt, imgWidth, imgHeight, alignment } = props;
  return (
    <article className="grid gap-4 m-4 p-4 md:grid-cols-2 md:gap-2 ">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        className={"rounded-lg w-full h-auto md:w-2/3 "+alignment}
      />
      <div className="space-y-4 md:place-self-center">
        <h2 className="semibold text-xl">{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
}
