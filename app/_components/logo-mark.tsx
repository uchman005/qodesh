import Image from "next/image";

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/brand/logo.png"
      alt="Qodesh CM"
      width={500}
      height={175}
      priority
      className={className}
    />
  );
}
