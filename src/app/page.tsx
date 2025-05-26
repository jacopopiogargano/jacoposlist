// src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <Image
        src="/img/logo.jpg"
        alt="Guernica"
        width={1200}
        height={600}
        priority
      />
    </div>
  );
}
