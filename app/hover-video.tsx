"use client";

type HoverVideoProps = {
  src: string;
  label: string;
};

export function HoverVideo({ src, label }: HoverVideoProps) {
  return (
    <video
      className="project-video"
      src={src}
      preload="metadata"
      playsInline
      muted
      loop
      onMouseEnter={(event) => event.currentTarget.play()}
      onMouseLeave={(event) => {
        event.currentTarget.pause();
        event.currentTarget.currentTime = 0;
      }}
      aria-label={label}
    />
  );
}
