import React, { useState } from 'react';
import { termsAndConditions } from '../data';
import styled from 'styled-components';
import Arrow from  "../assets/tab-slider-arrow-r.png"

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
`;

const Wrap = styled.div`
  background: #FFFFFF10;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0 20px;

  transition: all 0.3s ease;
  &:hover {
      background: #FFFFFF50;
  }
  h1 {
    padding: 10px;
    font-size: 15px;
    font-weight: 300;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #FFFFFF50;
  color: white;
  width: 99%;
  height: 60px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: center;
  padding-left: 10px;
  margin-bottom: 10px;
  
  p {
    font-size: 15px;
    padding-left: 20px;
  }
`;

const Arrowdown = styled.img`
  margin-right: 20px;
  transform: rotate(90deg);
`
const Arrowup = styled.img`
  margin-right: 20px;
  transform: rotate(270deg);
`

const AccordionBeta = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <AccordionSection>
        <Container>
            {termsAndConditions.map((item, index) => {
                return (
                    <>
                    <Wrap onClick={() => toggle(index)} key={index}>
                        <h1>{item.question}</h1>
                        <span>{clicked === index ? <Arrowup src={Arrow}/> : <Arrowdown src={Arrow}/>}</span>
                        
                        
                        {/* <span>{clicked === index ? "-" : "+"}</span> */}
                    </Wrap>
                    {clicked === index ? (
                        <Dropdown>
                        <p>{item.answer}</p>
                        </Dropdown>
                    ) : null}
                    </>
                );
            })}
        </Container>
    </AccordionSection>
    
  );
};

export default AccordionBeta;