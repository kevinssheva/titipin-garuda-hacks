import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface MediaCarouselProps {
  media: string[];
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ media }) => {
  const [currentMedia, setCurrentMedia] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentMedia < media.length - 1) {
      setCurrentMedia(currentMedia + 1);
    } else {
      setCurrentMedia(0);
    }
  };

  const handlePrev = () => {
    if (currentMedia > 0) {
      setCurrentMedia(currentMedia - 1);
    } else {
      setCurrentMedia(media.length - 1);
    }
  };

  const getCurrentMediaType = () => {
    const currentMediaUrl = media[currentMedia];
    const supportedImageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const supportedVideoExtensions = [".mp4", ".webm"];

    const fileExtension = currentMediaUrl.substring(
      currentMediaUrl.lastIndexOf(".")
    );

    if (supportedImageExtensions.includes(fileExtension)) {
      return "image";
    } else if (supportedVideoExtensions.includes(fileExtension)) {
      return "video";
    }

    return "unknown";
  };

  const renderMedia = () => {
    const currentMediaType = getCurrentMediaType();
    const currentMediaUrl = media[currentMedia];

    if (currentMediaType === "image") {
      return (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src={currentMediaUrl}
            className="object-contain max-h-full w-full"
            alt="media"
            layout="fill"
            objectFit="contain"
          />
        </div>
      );
    } else if (currentMediaType === "video") {
      return (
        <video
          src={currentMediaUrl}
          className="h-full w-full object-cover"
          controls
          autoPlay
          loop
        ></video>
      );
    }

    return null;
  };

  return (
    <div
      className="group relative h-72 w-full lg:h-[25rem]"
      ref={carouselRef}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0">
        {renderMedia()}
      </div>
      {media.length > 1 && (
        <>
          <div
            className="absolute left-3 top-1/2 -translate-x-1 -translate-y-1/2 cursor-pointer rounded-full bg-black/70 p-1 transition group-hover:-translate-x-0 group-hover:scale-110"
            onClick={handlePrev}
          >
            <BsChevronLeft size={20} color="white" />
          </div>
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 translate-x-1 cursor-pointer rounded-full bg-black/70 p-1 transition group-hover:-translate-x-0 group-hover:scale-110"
            onClick={handleNext}
          >
            <BsChevronRight size={20} color="white" />
          </div>
        </>
      )}
    </div>
  );
};

export default MediaCarousel;
