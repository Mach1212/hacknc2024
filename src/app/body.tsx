interface BodyProps {
  text: string;
  image: string;
  imageDesc: string;
}

export default function Body({ text, image, imageDesc }: BodyProps) {
  return (
    <div className="flex flex-row gap-4">
      <div>{text}</div>
      <div>
        <img src={image} alt={imageDesc} />
      </div>
    </div>
  );
}
