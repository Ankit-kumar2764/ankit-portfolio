const ASSET_PREFIX = "/assets/";

function isAbsoluteOrExternalUrl(value: string): boolean {
  return (
    value.startsWith("/") ||
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:") ||
    value.startsWith("blob:")
  );
}

export function normalizeProjectImageInput(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  if (isAbsoluteOrExternalUrl(trimmed)) {
    return trimmed;
  }

  const sanitized = trimmed.replace(/^\.?\/+/, "");
  return `${ASSET_PREFIX}${sanitized}`;
}

export function getAlternateImageCandidate(imageSrc: string): string | null {
  if (!imageSrc.startsWith(ASSET_PREFIX)) {
    return null;
  }

  if (imageSrc.endsWith(".png")) {
    return imageSrc.replace(/\.png$/, ".jpg");
  }

  if (imageSrc.endsWith(".jpg") || imageSrc.endsWith(".jpeg")) {
    return imageSrc.replace(/\.(jpg|jpeg)$/, ".png");
  }

  return null;
}
