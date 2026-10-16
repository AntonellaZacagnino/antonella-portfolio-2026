import { createSocialImage } from "@/lib/createSocialImage";

export const alt = "Frontend Developer · Full-Stack JavaScript portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return createSocialImage();
}
