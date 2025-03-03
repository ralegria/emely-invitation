import Image from "next/image";

const DressCodeGrid = () => {
  const images = [
    "/dress_code/image_1.png",
    "/dress_code/image_2.png",
    "/dress_code/image_3.png",
    "/dress_code/image_4.png",
    "/dress_code/image_5.png",
    "/dress_code/image_6.png",
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <div key={index} className="w-full">
          <Image
            src={image}
            alt={`Dress Code ${index + 1}`}
            width={211}
            height={278}
          />
        </div>
      ))}
    </div>
  );
};

export default DressCodeGrid;
