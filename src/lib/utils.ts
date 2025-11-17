import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImage(id: string): ImagePlaceholder {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Return a default placeholder to prevent crashes if an image is missing
    return {
      id: "missing",
      description: "Missing image",
      imageUrl: "https://picsum.photos/seed/missing/800/600",
      imageHint: "placeholder",
    };
  }
  return image;
}
