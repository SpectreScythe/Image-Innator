import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {scaleUp} from "./Animations";

const Searched = ({imgs, inputValue}) => {
    const downloadHandler = (value) => {
        window.open(value, "_blank");
    };
    const downloadImageHandler = (link) => {
        window.open(link, "_blank")
    }
    return (
        <StyledSearched>
            <StyledGrid initial="hidden" animate="animate">
                {imgs.map((item) => (
                    <StyledMapDiv variants={scaleUp} key={item.id}>
                        <StyledImg
                            variants={scaleUp}
                            onClick={() => downloadHandler(item.links.download)}
                            src={item.urls.regular}
                            alt=""
                        />
                        <Button onClick={() => downloadImageHandler(item.links.download)}>Download</Button>
                    </StyledMapDiv>
                ))}
            </StyledGrid>
        </StyledSearched>
    );
};

const StyledImg = styled(motion.img)`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 10px;
  transition: 0.5s all ease;

  &:hover {
    scale: 0.95;
    cursor: pointer;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
  }
`;

const StyledMapDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const StyledGrid = styled(motion.div)`
  display: grid;
  padding: 1rem;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: 65%;
  }
`;

const StyledSearched = styled.div``;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: #a67b5b;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    scale: 0.95;
    cursor: pointer;
  }
`;

export default Searched;
