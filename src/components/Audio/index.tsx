"use client";
import { Button } from "antd";
import { useRef, useState } from "react";

interface AudioProps {
  children?: React.ReactNode;
}

const BackgroundAudio = ({ children }: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playClicked, setPlayClicked] = useState(false);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 28;
      audioRef.current.play();
      setPlayClicked(true);
    }
  };

  return (
    <>
      {!playClicked && (
        <div className="flex flex-col gap-[40px] items-center p-[90px_24px]">
          <h1 className="text-white text-center text-[32px] font-[family-name:var(--font-hahmlet)]">
            ¿Listo para celebrar conmigo?
          </h1>
          <div className="bg-[url(/bgs/info-bg-mobile-1.png)] bg-no-repeat bg-cover bg-[100%_8%] w-full h-[300px] rounded-[20px] flex flex-col gap-[24px] justify-end p-[24px]" />
          <Button
            className="w-fit h-fit p-[12px_24px_16px] rounded-[50px] font-[family-name:var(--font-hahmlet)] text-[#2D4530] text-[18px]"
            onClick={play}
          >
            Abre la invitación
          </Button>
        </div>
      )}
      {playClicked && <>{children}</>}
      <audio ref={audioRef} src={"/sounds/brave.mp3"} controls={false} loop />
    </>
  );
};

export default BackgroundAudio;
