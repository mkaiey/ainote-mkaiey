import logo from "@/assets/logo.png";
import herolight from "@/assets/hero1.png";
import herodark from "@/assets/hero2.png";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-3">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="AINote" width={100} height={100} />
        <span className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          AINote
        </span>
      </div>
      <p className="max-w-prose px-3 text-center">
        AINote sangat berguna untuk mengelola dan mengatur catatan-catatan
        penting. Anda dapat dengan mudah membuat, mengedit, dan mengorganisir
        catatan sesuai kebutuhan Anda.
        AINote juga dilengkapi dengan fitur pencarian yang memudahkan Anda
        menemukan catatan yang relevan dengan cepat. Selain itu, aplikasi ini
        juga menyediakan integrasi dengan layanan lain seperti platform OpenAI
        dan Pinecone, sehingga Anda dapat dengan mudah mengakses dan mengelola
        data dan informasi dari berbagai sumber.
      </p>

      <Button size="lg" asChild>
        <Link href="/notes">Buka</Link>
      </Button>

      {/* hero image */}
      <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
        <Image
          src={herolight}
          fill
          className="object-contain dark:hidden"
          alt="Documents"
        />
        <Image
          src={herodark}
          fill
          className="hidden object-contain dark:block"
          alt="Documents"
        />
      </div>
    </main>
  );
}
