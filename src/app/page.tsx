import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        Welcome to the Wizarding World of Harry Potter
      </h1>
      <p className="text-lg mt-8 text-center">
        Explore the magical realms, meet extraordinary creatures, and uncover the secrets hidden within.
      </p>
    </div>
  );
}
