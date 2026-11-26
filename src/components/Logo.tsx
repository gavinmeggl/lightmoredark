import Image from "next/image";

// Chrome sprout emblem.
export function Emblem({ size = 48, priority = false }: { size?: number; priority?: boolean }) {
  return (
    <Image
      src="/brand/plant.png"
      alt="Light More Dark emblem"
      width={size}
      height={Math.round(size * (904 / 1013))}
      priority={priority}
      className="emblem"
    />
  );
}

type Variant = "black" | "white" | "rgb";

// "LIGHT MORE DARK" wordmark.
export function Wordmark({
  variant = "black",
  width = 260,
  priority = false,
  className,
}: {
  variant?: Variant;
  width?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={`/brand/wordmark-${variant}.png`}
      alt="Light More Dark"
      width={width}
      height={Math.round(width * (73 / 1296))}
      priority={priority}
      className={className}
    />
  );
}
