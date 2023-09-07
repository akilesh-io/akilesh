import Balancer from "react-wrap-balancer";
import Image from "next/image";
export default function Card({
  title,
  description,
  link,
  image,
}: {
  title: string;
  description: string;
  link: string;
  image: string;
}) {
  return (
    <div className="relative col-span-1 h-96 overflow-hidden rounded-xl bg-white shadow-md ">
      <a href={link} target="_blank">
        <div className="flex h-60 items-center justify-center">
          <Image
            width={400}
            height={400}
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="mx-auto max-w-md text-center mt-1">
          <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
            <Balancer>{title}</Balancer>
          </h2>
          <div className="prose-sm mt-2 leading-normal text-gray-500 md:prose">
            {description}
          </div>
        </div>
      </a>
    </div>
  );
}
