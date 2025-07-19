import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-4xl">Nirmanam</h1>
      <ThemeToggle />
    </div>
  );
}
