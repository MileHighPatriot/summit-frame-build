import Image, { type ImageProps } from "next/image";
import { asset } from "@/lib/asset";

export default function SiteImage({ src, alt = "", ...props }: ImageProps) {
  return (
    <Image
      src={typeof src === "string" ? asset(src) : src}
      alt={alt}
      {...props}
    />
  );
}
