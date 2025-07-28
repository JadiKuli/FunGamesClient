import Marquee from "react-fast-marquee";

type IMarqueeProps = {
  images?: string[];
};

const defaultImages: string[] = [
  "images/showcase/001.jpg",
  "images/showcase/002.jpg",
  "images/showcase/003.jpg",
  "images/showcase/004.jpg",
  "images/showcase/005.jpg",
];

export default function ScreenMarquee({
  images = defaultImages,
}: IMarqueeProps) {
  return (
    <div className="h-screen">
      {[...Array(4)].map((_, index) => (
        <Marquee key={index} direction={index % 2 === 0 ? "right" : "left"}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="h-[25vh] object-cover"
            />
          ))}
        </Marquee>
      ))}
    </div>
  );
}
