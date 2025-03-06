"use client";
import { Alert, Button } from "antd";
import { useRef, useState } from "react";
import { GiftFilled } from "@ant-design/icons";

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

  const GiftMessage = () => (
    <Alert
      message="Ten en cuenta"
      description={
        <>
          Agradecemos tus muestras de cariño en <b>regalo de sobre</b>
        </>
      }
      className="mt-[40px]"
      type="success"
      icon={<GiftFilled />}
      showIcon
    />
  );

  return (
    <>
      {!playClicked && (
        <div className="flex flex-col gap-[40px] items-center p-[40px_24px]">
          <GiftMessage />
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
      {playClicked && (
        <>
          <GiftMessage />
          {children}
        </>
      )}
      <audio ref={audioRef} src={"/sounds/brave.mp3"} controls={false} loop />
    </>
  );
};

export default BackgroundAudio;
