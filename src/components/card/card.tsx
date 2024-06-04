import React, { FC, useState } from "react";
import * as Styled from "./card.styled";
import Image from "next/image";
import { Like } from "../icons/like";
import { CardData } from "./card.types";
import placeholder from "../../assets/image/noImage.avif";
import { toPersianNumber } from "@/utils/toPersianNumber";

export const Card: FC<CardData> = ({
  image,
  title,
  genre,
  rate,
  interested,
}) => {
  const [img, setImg] = useState(image);
  return (
    <Styled.CardWrapper>
      <Styled.ImageWrapper>
        <Image
          alt={title}
          src={img}
          height={220}
          width={165}
          onError={() =>
            setImg(
              "https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg"
            )
          }
        />
        <Styled.HiddenContent>
          <Styled.Rate>
            <Like /> {toPersianNumber(interested)}
          </Styled.Rate>
          <span className="title">{title}</span>
          <span>{genre}</span>
        </Styled.HiddenContent>
      </Styled.ImageWrapper>

      <Styled.Caption>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Rate>امتیاز: {toPersianNumber(rate)}</Styled.Rate>
      </Styled.Caption>
    </Styled.CardWrapper>
  );
};
