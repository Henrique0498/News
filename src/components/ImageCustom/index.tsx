import React from "react";
import * as S from "./styles";

interface ImageProps {
  alt: string
  src: string
  className?: string
  title?: string
}

const ImageCustom = ({ alt, className,...props }: ImageProps) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad() {
    setSkeleton(false);
  }

  return (
    <S.Container>
      {skeleton && <S.Skeleton />}
      <img 
        onLoad={handleLoad} alt={alt}
        {...props} className={`img ${className} ${skeleton ? '' : 'visible'}`}
      />
    </S.Container>
  );
};

export default ImageCustom