
import { useState } from "react";
import Button from "./Button";

type CardProps = {
  title: string;
  description: string;
  category: string;
};

const Card = ({ title, description, category }: CardProps) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(!showDetail);
  };

  return (
    <article>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>{description}</p>

      <Button
        text={showDetail ? "Tutup Detail" : "Baca Selengkapnya"}
        onClick={handleClick}
      />

      {showDetail && (
        <p>
          Kamu sedang melihat detail artikel tentang {title}.
        </p>
      )}
    </article>
  );
};

export default Card;
