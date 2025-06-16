import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-xl mx-auto">
      <Image
        src={"/images/hero-image.png"}
        alt="Projectravel Profile Picture"
        fill
        sizes="(max-width: 640px) 150px, 288px"
        className="object-cover rounded-full"
        priority
      />
    </div>
  );
}
