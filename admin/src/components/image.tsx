import React, { useState } from "react";
import NextImage from "next/image";

import { Skeleton } from "@/components/ui/skeleton";

import { getFileUrl } from "@/lib/utils";

const Image = ({
  src,
  alt,
  height,
  width,
  className,
}: {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
}) => {
  const [loading, setLoading] = useState(false);

  if (!src) return null;

  if (loading) return <Skeleton className="h-[125px] w-[250px] rounded-xl" />;

  return (
    <NextImage
      src={getFileUrl(src) || ""}
      alt={alt}
      height={height}
      width={width}
      className={className}
      onLoadStart={() => setLoading(true)}
      onLoad={() => setLoading(false)}
      onError={() => setLoading(false)}
    />
  );
};

export default Image;
