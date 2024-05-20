import HomePage from "@/components/home/homepage";
import Segundahome from "@/components/home/segundapage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="h-screen">
        <HomePage />
        <Segundahome />
      </div>
    </main>
  );
}
