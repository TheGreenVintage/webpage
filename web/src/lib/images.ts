import imageLoader from "./imgproxyLoader";

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export async function dynamicBlurDataUrl(src: string) {
  if (src.includes("http://127.0.0.1")) {
    return null;
  }

  const url = imageLoader({
    src,
    width: 200,
    quality: 75,
    blur: 10,
  });

  const base64str = await fetch(url).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString("base64"),
  );

  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='1' />
      </filter>

      <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}
