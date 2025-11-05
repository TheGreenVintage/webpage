const GRAVITY = "no";
const ENLARGE = 1;
const RESIZED_TYPE = "fill";

const host = process.env.NEXT_PUBLIC_IMGPROXY_URL;

// TODO: Reevaluate to use salt and signature for security

const getEncodedPath = (
  encodedUrl: string,
  width: number,
  quality: number,
  blur: number,
): string => {
  // We use insecure because the nextjs loader is used in client side and signed
  // urls don't make sense in this context. The protection is done in the server
  // side with the IMGPROXY_ALLOWED_SOURCES environment variable.

  return `/insecure/rt:${RESIZED_TYPE}/w:${width}/quality:${quality}/blur:${blur}/g:${GRAVITY}/el:${ENLARGE}/plain/${encodedUrl}`;
};

type Props = {
  src: string;
  width: number;
  quality?: number;
  blur?: number;
};

export default function imageLoader({
  src,
  width,
  quality = 80,
  blur = 0,
}: Props) {
  // Local images. We don't need to proxy them.
  if (src.startsWith("/")) {
    return src;
  }

  return `${host}${getEncodedPath(src, width, quality, blur)}`;
}
