import { LucideIcon } from "lucide-react";
import React from "react";

type CardProps = {
  icon: LucideIcon;
  text: string;
  title: string;
};

export default function Card({ icon: Icon, text, title }: CardProps) {
  return (
    <div className="my-5 flex items-center justify-center bg-zinc-300 rounded-2xl size-fit ">
      <div className="m-6">
        <p className="font-bold text-3xl">
          <Icon size={64} />
          {title}
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
}
