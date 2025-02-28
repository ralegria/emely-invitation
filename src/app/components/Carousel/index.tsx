"use client";
import { Carousel } from "antd";
import Image from "next/image";

const MainCarousel = () => {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel autoplay fade dots={false}>
      {Array(15)
        .fill(null)
        .map((_, index) => (
          <div key={index}>
            <Image
              src={`/photos/pic${index + 1}.png`}
              alt={`Photo ${index + 1}`}
              width={1200}
              height={599}
            />
          </div>
        ))}
    </Carousel>
  );
};

export default MainCarousel;
