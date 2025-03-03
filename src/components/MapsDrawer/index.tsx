"use client";

import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";

import Image from "next/image";
import Link from "next/link";

const MapsDrawer = () => {
  const [isMapsOpen, setMapIsOpen] = useState(false);

  const onMapOpenHandler = () => {
    setMapIsOpen(!isMapsOpen);
  };

  return (
    <>
      <Button
        onClick={onMapOpenHandler}
        className="bg-transparent text-white h-fit w-fit p-[12px_24px] rounded-[50px] font-[family-name:var(--font-hahmlet)]"
      >
        Ver en mapas
      </Button>
      <Drawer
        open={isMapsOpen}
        onClose={onMapOpenHandler}
        key={"bottom"}
        height={"auto"}
        closable={false}
        placement={"bottom"}
        className="maps-drawer"
      >
        <ul className="font-[family-name:var(--font-hahmlet)]">
          <li>
            <Button type="text" className="h-fit w-full block">
              <Link
                target="_blank"
                className="flex flex-row justify-between gap-5 font-semibold p-[16px_24px]"
                href={
                  "https://ul.waze.com/ul?place=ChIJxSTCsicxY48Ryo2tqwDT8nQ&ll=13.68935910%2C-89.23763910&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                }
              >
                <div className="flex flex-row gap-5">
                  <Image
                    src={"/icons/waze-icon.svg"}
                    alt="Waze Icon"
                    width={24}
                    height={24}
                  />
                  Ver en waze
                </div>
                <RightOutlined />
              </Link>
            </Button>
          </li>
          <li>
            <Button type="text" className="h-fit w-full block">
              <Link
                target="_blank"
                className="flex flex-row justify-between gap-5 font-semibold p-[16px_24px]"
                href={"https://maps.app.goo.gl/cgb11uEMuEum7PX26"}
              >
                <div className="flex flex-row gap-5">
                  <Image
                    src={"/icons/google-map-icon.svg"}
                    alt="Google Maps Icon"
                    width={20}
                    height={20}
                  />
                  Ver en Google Maps
                </div>
                <RightOutlined />
              </Link>
            </Button>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default MapsDrawer;
