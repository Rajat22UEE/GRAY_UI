import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-5xl text-amber-300"> HII NANA</div>
      <Button> click me</Button>
      <Button variant="outline">Button</Button>
    </div>
  );
}
