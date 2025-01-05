import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Button, Spin } from "antd";
import {
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  UpOutlined,
} from "@ant-design/icons";

import img1 from "../../assets/dir/1.jpg";
import img1_1 from "../../assets/dir/1_1.jpg";
import img2 from "../../assets/dir/2.jpg";
import img22 from "../../assets/dir/2_2.jpg";
import img3 from "../../assets/dir/3.jpg";
import img4 from "../../assets/dir/4.jpg";
import img5 from "../../assets/dir/5.jpg";
import img6 from "../../assets/dir/6.jpg";
import img7 from "../../assets/dir/7.jpg";
import img8 from "../../assets/dir/8.jpg";

// O'zgarishsiz images array

const images = [
  {
    id: 1,
    src: img1,
    buttons: [{ title: <UpOutlined />, top: 50, left: 50, linkId: 2 }],
    key: "bir",
  },
  {
    id: 2,
    src: img1_1,
    buttons: [
      { title: <LeftOutlined />, top: 50, left: 10, linkId: 3 },
      { title: <RightOutlined />, top: 50, left: 90, linkId: 3 },
      { title: <DownOutlined />, top: 90, left: 50, linkId: 1 },
    ],
    key: "bir_bir",
  },
  {
    id: 3,
    src: img2,
    buttons: [
      { title: <LeftOutlined />, top: 50, left: 10, linkId: 4 },
      { title: <RightOutlined />, top: 50, left: 90, linkId: 5 },
    ],
    key: "ikki",
  },
  {
    id: 4,
    src: img22,
    buttons: [
      { title: <LeftOutlined />, top: 50, left: 10, linkId: 6 },
      { title: <RightOutlined />, top: 50, left: 90, linkId: 6 },
    ],
    key: "ikki_ikki",
  },
  {
    id: 5,
    src: img3,
    buttons: [
      { title: <LeftOutlined />, top: 50, left: 10, linkId: 4 },
      { title: <RightOutlined />, top: 50, left: 90, linkId: 5 },
    ],
    key: "uch",
  },
  {
    id: 6,
    src: img4,
    buttons: [{ title: <>Orqaga</>, top: 50, left: 50, linkId: 3 }],
    key: "to'rt",
  },
  {
    id: 7,
    src: img5,
    buttons: [{ title: <UpOutlined />, top: 50, left: 50, linkId: 6 }],
    key: "besh",
  },
  {
    id: 8,
    src: img6,
    buttons: [
      { title: <LeftOutlined />, top: 50, left: 10, linkId: 7 },
      { title: <RightOutlined />, top: 50, left: 90, linkId: 8 },
    ],
    key: "olti",
  },
  {
    id: 9,
    src: img7,
    buttons: [{ title: <>Orqaga</>, top: 50, left: 50, linkId: 6 }],
    key: "yetti",
  },
  {
    id: 10,
    src: img8,
    buttons: [{ title: <>Orqaga</>, top: 50, left: 50, linkId: 6 }],
    key: "sakkiz",
  },
];
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 90vh;
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const ImageElement = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
`;

const PointButton = styled(Button)`
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5) !important;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
`;

const Direction = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [loading, setLoading] = useState(true);

  const imageRef = useRef(null);

  const calculatePositions = () => {
    if (imageRef.current) {
      const { offsetWidth, offsetHeight } = imageRef.current;
      return currentImage.buttons.map((button) => ({
        top: `${(button.top / 100) * offsetHeight - 25}px`,
        left: `${(button.left / 100) * offsetWidth - 25}px`,
      }));
    }
    return [];
  };

  const [positions, setPositions] = useState(calculatePositions());

  useEffect(() => {
    const handleResize = () => {
      setPositions(calculatePositions());
    };

    // Initial positions calculation
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentImage]);

  const handleNavigate = (linkId) => {
    const nextImage = images.find((img) => img.id === linkId);
    setCurrentImage(nextImage || images[0]);
  };

  const handleImageLoad = () => {
    setLoading(false); // Rasm yuklanganida loadingni to'xtatish
    setPositions(calculatePositions()); // Tugmalar joylashuvini yangilash
  };

  return (
    <Wrapper>
      <ImageContainer>
        {loading && (
          <LoadingWrapper>
            <Spin size="large" />
          </LoadingWrapper>
        )}
        <ImageElement
          ref={imageRef}
          src={currentImage.src}
          alt="Current View"
          onLoad={() => {
            setPositions(calculatePositions());
            handleImageLoad();
          }}
        />
        {!loading &&
          currentImage.buttons.map((button, index) => (
            <PointButton
              key={index}
              style={{
                top: positions[index]?.top,
                left: positions[index]?.left,
              }}
              onClick={() => handleNavigate(button.linkId)}
            >
              {button.title}
            </PointButton>
          ))}
      </ImageContainer>
    </Wrapper>
  );
};

export default Direction;
