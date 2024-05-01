"use client";
import { Box, Stack, Diagram, DiagramProps } from "grommet";
import styled from "styled-components";

/** Diagram Component for landing page.
 *
 * Props: none
 * State: none
 */

type AnimationProps = {
  type: "draw" | "pulse"; // Adjust the animation types as needed
  delay: number | string;
  duration: number | string;
  size: "xsmall" | "small" | "medium" | "large" | "xlarge";
};

const animationProps = {
  type: "draw", // or 'draw' based on your preference
  delay: 0,
  duration: 11000, // in milliseconds
  size: "medium", // or any other size based on your preference
};

const FadeInText = styled.div`
  opacity: 0; // Initial opacity set to 0
  animation: fadeIn 5s forwards;
  font-size: small;
  transition: opacity 0.5s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DiagramComponent = () => {
  return (
    <div>
      <Stack guidingChild={1}>
        <Diagram
          connections={[
            {
              fromTarget: "4",
              toTarget: "1",
              thickness: "xsmall",
              color: "graph-1",
              type: "rectilinear",
            },
            {
              fromTarget: "1",
              toTarget: "2",
              thickness: "small",
              color: "graph-0",
            },
          ]}
          animation={animationProps as DiagramProps["animation"]}
        />
        <Box>
          <Box direction="row">
            <Box id="1" margin="small" pad="medium" background="light-4" />
            <FadeInText>secure a home</FadeInText>
            <Box id="2" margin="small" pad="medium" background="light-4" />
          </Box>
          <Box direction="row">
            <Box id="3" margin="small" pad="medium" background="light-4" />
            <FadeInText>start your form</FadeInText>
            <Box id="4" margin="small" pad="medium" background="light-4" />
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default DiagramComponent;
