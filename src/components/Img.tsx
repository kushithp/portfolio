import { useState } from "react";
// Shows a placeholder instead of a broken image icon.
export default function Img({ src, alt, label }: { src: string; alt: string; label?: string }) {
  const [bad, setBad] = useState(!src);
  if (bad) return <div className="ph" role="img" aria-label={alt}><span className="lbl">{label ?? "Image placeholder"}</span></div>;
  return <img className="fit" src={src} alt={alt} loading="lazy" onError={() => setBad(true)} />;
}
