import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <h1 className="text-9xl font-bold">idleShubh</h1>
      <Button variant="outline" className="text-white text-2xl">My resume</Button>
    </header>
  )
}
