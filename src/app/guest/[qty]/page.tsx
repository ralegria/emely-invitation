"use client";
import MainView from "@/app/view";
import { useParams } from "next/navigation";

const GuestView = () => {
  const { qty: guestQty } = useParams();
  return <MainView guests={Number(guestQty)} />;
};

export default GuestView;
