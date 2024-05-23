import HomePage from "@/components/home/homepage";
import Segundahome from "@/components/home/sobrehome";
import Servicos from "@/components/home/servicos";

export default function Home() {
  return (
    <main>
      <div>
        <HomePage />
        <Segundahome />
        <Servicos />
      </div>
    </main>
  );
}
