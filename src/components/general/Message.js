// Node Modules
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { UilMultiply } from "@iconscout/react-unicons";

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5em 1em;
  z-index: 99;
  background: ${props => props.theme.colors.primary["600"]};
  color: white;
  text-align: center;

  & a {
    font-weight: bold;
    color: ${props => props.theme.colors.primary["200"]};
  }
  & > svg {
    cursor: pointer;
  }
`;

function Message() {
  const [isOpen, setIsOpen] = useState(true);

  const slideDownAnimation = {
    hidden: {
      y: 200,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Container
          variants={slideDownAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div />
          <div>
            <a href="https://dribbble.com/shots/18425258-Srawana-Weather-Dashboard-Design" target="_blank" rel="noreferrer">
             ~ Design & Credit goes to Srawana. Created for educational purpose. ~
            </a>
            <br/>
            Just as a heads up, navbar links and login features are not implemented.
          </div>

          <UilMultiply
            onClick={() => setIsOpen(!isOpen)}
            width={16}
          ></UilMultiply>
        </Container>
      )}
    </AnimatePresence>
  );
}

export default Message;
