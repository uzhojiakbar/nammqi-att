import React, { useState } from "react";
import styled from "styled-components";
import { Spin, Button } from "antd";
import {
  RotateLeftOutlined,
  RotateRightOutlined,
  ExpandOutlined,
  ShrinkOutlined,
  DownloadOutlined,
  CloseOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  UpOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import img1 from "../../assets/dir/111.jpg";
import img1_1 from "../../assets/dir/1_1.jpg";
import img2 from "../../assets/dir/2_2.jpg";
import img22 from "../../assets/dir/2_2.jpg";
import img3 from "../../assets/dir/3.jpg";
import img4 from "../../assets/dir/4.jpg";
import img5 from "../../assets/dir/5.jpg";
import img6 from "../../assets/dir/6.jpg";
import img7 from "../../assets/dir/7.jpg";
import img8 from "../../assets/dir/8.jpg";

const images = [
  {
    id: 1,
    src: img1,
    buttons: [{ icon: <UpOutlined />, position: "center", linkId: 2 }],
  },
  {
    id: 2,
    src: img1_1,
    buttons: [
      { icon: <LeftOutlined />, position: "left", linkId: 3 },
      { icon: <RightOutlined />, position: "right", linkId: 3 },
      { icon: <DownOutlined />, position: "down", linkId: 1 },
    ],
  },
  {
    id: 3,
    src: img2,
    buttons: [
      { icon: <LeftOutlined />, position: "left", linkId: 4 },
      { icon: <RightOutlined />, position: "right", linkId: 4 },
      { icon: <DownOutlined />, position: "down", linkId: 2 },
    ],
  },
  {
    id: 4,
    src: img22,
    buttons: [
      { icon: <LeftOutlined />, position: "left", linkId: 5 },
      { icon: <RightOutlined />, position: "right", linkId: 5 },
      { icon: <DownOutlined />, position: "down", linkId: 3 },
    ],
  },
  {
    id: 5,
    src: img3,
    buttons: [
      { icon: <LeftOutlined />, position: "left", linkId: 6 },
      { icon: <RightOutlined />, position: "right", linkId: 7 },
      { icon: <DownOutlined />, position: "down", linkId: 4 },
    ],
  },
  {
    id: 6,
    src: img4,
    buttons: [{ icon: <LeftOutlined />, position: "center", linkId: 5 }],
  },
  {
    id: 7,
    src: img5,
    buttons: [
      { icon: <UpOutlined />, position: "center", linkId: 8 },
      { icon: <DownOutlined />, position: "down", linkId: 5 },
    ],
  },
  {
    id: 8,
    src: img6,
    buttons: [
      { icon: <LeftOutlined />, position: "left", linkId: 9 },
      { icon: <RightOutlined />, position: "right", linkId: 10 },
      { icon: <DownOutlined />, position: "down", linkId: 7 },
    ],
  },
  {
    id: 9,
    src: img7,
    buttons: [{ icon: <DownOutlined />, position: "down", linkId: 8 }],
  },
  {
    id: 10,
    src: img8,
    buttons: [{ icon: <DownOutlined />, position: "down", linkId: 8 }],
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;

  gap: 20px;
  height: 89vh;
  background-color: #f0f2f5;
  transition: all 0.3s ease-in-out;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const ScrollableContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 5;

  max-width: 90vw;
  width: 100%;
  max-height: 80vh;
  height: fit-content;

  background-color: white;
  border-radius: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  overflow: ${({ fullView }) => (fullView ? "visible" : "auto")};
  transition: all 0.5s ease;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    max-width: 100vw;
    max-height: 60vh;
  }
`;

const ImageElement = styled.img`
  max-width: ${({ fullView }) => (fullView ? "100vw" : "100%")};
  max-height: ${({ fullView }) => (fullView ? "100vh" : "100%")};
  width: ${({ fullView }) => (fullView ? "auto" : "100%")};
  height: ${({ fullView }) => (fullView ? "auto" : "100%")};
  object-fit: contain;
  transition: all 0.5s ease-in-out;
  transform: rotate(${({ rotation }) => rotation}deg)
    scale(${({ scale }) => scale});

  @media (max-width: 768px) {
    width: 100%;
    max-height: 60vh;
  }
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-width: 90vw;
  width: 100%;
  height: 100%;

  margin-bottom: 15px;
  overflow-x: auto;
  padding: 10px;
  flex: 1;
  background-color: #f0f2f5;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 100%;
    gap: 5px;
    flex-direction: row;

    max-height: 20vh;
    min-height: 20vh;
    height: 20vh;
    overflow: auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Thumbnail = styled.img`
  width: 80%;
  height: 120px;
  object-fit: cover;
  border: ${({ isActive }) =>
    isActive ? "2px solid #1890ff" : "2px solid transparent"};
  border-radius: 5px;
  opacity: ${({ isActive }) => (isActive ? "1" : "0.8")};
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100px;

    border-radius: 5px;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }

  ${(props) =>
    props.position === "up" &&
    "top: 10px; left: 50%; transform: translateX(-50%);"}
  ${(props) =>
    props.position === "down" &&
    "bottom: 10px; left: 50%; transform: translateX(-50%);"}
  ${(props) =>
    props.position === "left" &&
    "left: 10px; top: 50%; transform: translateY(-50%);"}
  ${(props) =>
    props.position === "right" &&
    "right: 10px; top: 50%; transform: translateY(-50%);"}
  ${(props) => props.position === "right top" && "right: 10px; top: 4px;"}

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
`;

const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  padding-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 50px;
  }
`;

const FullscreenControls = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  z-index: 30;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    bottom: 40px;
  }
`;

const LoadingWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.5);

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  position: absolute;

  z-index: 99999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ControlButton = ({ icon, onClick, ariaLabel, style }) => (
  <Button
    icon={icon}
    type="primary"
    shape="circle"
    onClick={onClick}
    aria-label={ariaLabel}
    style={style}
  />
);

const Direction = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [loading, setLoading] = useState(false);
  const [fullView, setFullView] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const toggleFullView = () => setFullView(!fullView);

  const rotateImage = (direction) => {
    setRotation((prevRotation) => prevRotation + direction);
  };

  const zoomImage = (factor) => {
    setScale((prevScale) => Math.max(0.5, Math.min(prevScale + factor, 2)));
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = currentImage.src;
    link.download = "image.jpg";
    link.click();
  };

  const navigateImage = (linkId) => {
    const nextImage = images.find((img) => img.id === linkId);
    if (nextImage) {
      setLoading(true);
      setTimeout(() => {
        setCurrentImage(nextImage);
        setLoading(false);
      }, 300);
    }
  };

  const selectImage = (image) => {
    setCurrentImage(image);
    setRotation(0);
    setScale(1);
  };

  return (
    <Wrapper>
      {/* Fullscreen View Toggle Button */}
      {fullView && (
        <FullscreenOverlay>
          <FullscreenControls>
            <ControlButton
              icon={<ZoomOutOutlined />}
              onClick={() => zoomImage(-0.1)}
              ariaLabel="Zoom Out"
            />
            <ControlButton
              icon={<RotateLeftOutlined />}
              onClick={() => rotateImage(-90)}
              ariaLabel="Rotate Left"
            />
            <ControlButton
              icon={<DownloadOutlined />}
              onClick={downloadImage}
              ariaLabel="Download Image"
            />
            <ControlButton
              icon={<CloseOutlined />}
              onClick={toggleFullView}
              ariaLabel="Close Fullscreen"
            />
            <ControlButton
              icon={<RotateRightOutlined />}
              onClick={() => rotateImage(90)}
              ariaLabel="Rotate Right"
            />
            <ControlButton
              icon={<ZoomInOutlined />}
              onClick={() => zoomImage(0.1)}
              ariaLabel="Zoom In"
            />
          </FullscreenControls>
          <ImageElement
            src={currentImage.src}
            alt="Navigation View"
            fullView={true}
            rotation={rotation}
            scale={scale}
          />
        </FullscreenOverlay>
      )}

      <GalleryContainer>
        {images.map((image) => (
          <Thumbnail
            key={image.id}
            src={image.src}
            isActive={image.id === currentImage.id}
            onClick={() => selectImage(image)}
          />
        ))}
      </GalleryContainer>

      <ScrollableContainer fullView={fullView}>
        {!fullView && (
          <ImageElement
            src={currentImage.src}
            alt="Navigation View"
            fullView={false}
            rotation={rotation}
            scale={scale}
          />
        )}

        <NavigationButton position={"right top"} onClick={toggleFullView}>
          <ExpandOutlined />
        </NavigationButton>

        {loading && (
          <LoadingWrapper>
            <div>
              <Spin size="large" />
            </div>
          </LoadingWrapper>
        )}

        {!fullView &&
          currentImage.buttons?.map((button) => (
            <NavigationButton
              key={button.key}
              position={button.position}
              onClick={() => navigateImage(button.linkId)}
            >
              {button.icon}
            </NavigationButton>
          ))}
      </ScrollableContainer>
    </Wrapper>
  );
};

export default Direction;
