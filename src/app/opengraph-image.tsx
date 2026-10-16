import { createSocialImage } from "@/lib/createSocialImage";

export const alt = "Portfolio de Frontend Developer y Full-Stack JavaScript";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage();
}
