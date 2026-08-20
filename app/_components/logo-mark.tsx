import Image from "next/image";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/qodesh-mark.png"
      alt=""
      width={121}
      height={131}
      priority
      className={className}
    />
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/qodesh-logo.png"
      alt="Qodesh CM"
      width={500}
      height={175}
      priority
      className={className}
    />
  );
}
