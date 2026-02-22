import { LucideIcon } from "lucide-react";

type CardProps = {
  icon: LucideIcon;
  text: string;
  title: string;
};

export default function Card({ icon: Icon, text, title }: CardProps) {
  return (
    <div className="my-5 flex items-center justify-center bg-zinc-200 rounded-2xl sm:h-64 ">
      <div className="p-20">
        <div className="mb-6 flex items-center justify-center">
          <Icon size={64} />
        </div>
        <p className="font-bold text-3xl">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
