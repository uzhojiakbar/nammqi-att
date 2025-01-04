import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";

import img1 from "../../assets/dir/1.jpg";
import img2 from "../../assets/dir/2.jpg";
import img22 from "../../assets/dir/22.jpg";

// Rasmlar ro'yxati (o'z rasmlaringizni qo'shing)
const images = [
  {
    id: 1,
    src: img1,
    buttons: [
      {
        // title: <i class="fa-solid fa-location-dot"></i>,
        title: <>keyingi</>,
        linkId: 2,
      },
    ],
    key: "bir",
  },
  {
    id: 2,
    src: img2,
    buttons: [
      {
        title: <>oldingisi</>,
        linkId: 1,
      },
      {
        title: <>keyingisi</>,
        linkId: 3,
      },
    ],
    key: "ikki",
  },
  //   { id: 3, src: img22, directions: { up: 1, left: 2 }, key: "img3" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: 90vh;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
  position: relative;

  .arrowContainer {
    position: absolute;
    width: 100%;
    bottom: 0;

    display: flex;
  }
`;

const ArrowButton = styled(Button)`
  z-index: 10;
  flex: 1;

  font-size: 20px;
  padding: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-transform: capitalize;
  border-radius: 0 !important;

  /* ${({ direction }) =>
    direction === "up" &&
    `
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  `}

  ${({ direction }) =>
    direction === "down" &&
    `
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  `}

  ${({ direction }) =>
    direction === "left" &&
    `
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  `}

  ${({ direction }) =>
    direction === "right" &&
    `
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  `} */
`;

const Direction = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleNavigate = (v) => {
    console.log(v);

    const nextImage = images.find((img) => img.id === v.linkId);
    console.log("NEEEEEEXT", nextImage);

    setCurrentImage(nextImage || images[0]);
  };

  return (
    <Wrapper>
      <ImageContainer image={currentImage.src} key={currentImage.key}>
        <div className="arrowContainer">
          {currentImage.buttons.map((v, i) => {
            return (
              <ArrowButton
                type="primary"
                //   direction={}
                onClick={() => handleNavigate(v)}
                key={i}
              >
                {v?.title || <i class="fa-solid fa-arrow-right"></i>}
              </ArrowButton>
            );
          })}
        </div>
      </ImageContainer>
    </Wrapper>
  );
};

export default Direction;
