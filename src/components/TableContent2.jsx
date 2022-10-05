import React from 'react'
import styled from "styled-components"
import { table2 } from '../data'

//container
const Container = styled.div`
  color: white;
  margin: 10px;
`
//wrapper
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin:30px 0;
`
const Info = styled.p`
  font-size: 14px;
  font-weight: 100;
`
//inside container wrap
const RelativeWrap = styled.div`
  position: absolute;
  top: 200px;
`

//inside container
const InsideContainer = styled.div`
  background-color: #203248;
  width: 415px;
  height: 340px;
  border-radius: 10px;
  position: relative;
`

//colorheader
const ColorHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`
const BannerWrap = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;
`
const Block1 = styled.div`
  position: absolute;
  padding: 5px;
  background-color: #F19020;
  border-radius: 10px 0 10px 0;
  z-index: 2;
`
const Block2 = styled.div`
  position: absolute;
  top: 0px;
  left: 193px;
  padding: 6.5px 10px;
  background-color: #D2770E;
  border-radius: 0 0 10px 0;
  z-index: 0;
`
const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 0 10px 0 10px;
  border: none;
  background-color: #FFFFFF10;
  color: white;
  font-weight: bold;
  cursor: default;
  position: relative;
  
  transition: all 0.5s ease;
  &:hover {
    background-color: #FFFFFF50;
  }

  &:hover + span {
    display: block;
    z-index: 10;
  }
`
const Span = styled.span`
  display: none;
  width: 220px;
  height: 90px;
  padding: 10px;
  border-radius: 15px;
  position: absolute;
  top: 40px;
  left: 250px;
  font-size: 13px;
  color: black;
  background-color: white;
`

//actualtable
const Table = styled.table`
  height: 240px;
  display: block;
  overflow-y: scroll;
  position: absolute;
  top: 50px;
  left: 40px;
  
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color:#FFFFFF30;
    border-radius: 10px;
    
  }
  &::-webkit-scrollbar-track {
    background-color: #203248
    
  }
`
const Row = styled.tr`
  height: 36px;
  width: 320px;
  display: flex;
  justify-content:center;
  margin: 3px 0;
`
const HeaderLeft = styled.th`
  margin-top: 15px;
  width: 40%;
  margin-right: 3px;
  font-size: 12px;
  color: #9A9A9A50;
`
const Header = styled.th`
  margin-top: 15px;
  width: 60%;
  margin-right: 3px;
  font-size: 12px;
  color: #9A9A9A50;
`

const BodyLeft = styled.td`
  width: 40%;
  margin-right: 3px;
  background-color: #00000030;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Body = styled.td`
  width: 60%;
  background-color: #00000030;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`



function TableContent2(item) {
  return (
    <Container>
      <Wrapper>
        
        <Title>ᲧᲝᲕᲔᲚᲓᲦᲔ ᲛᲘᲘᲦᲔ ᲨᲔᲛᲗᲮᲕᲔᲕᲘᲗᲘ ᲤᲣᲚᲐᲓᲘ <br/> ᲞᲠᲘᲖᲘ ᲜᲔᲑᲘᲡᲛᲘᲔᲠ ᲡᲞᲘᲜᲖᲔ</Title>
        <Info>ყოველდღიური, 36 000₾-ის ფულადი პრიზები</Info>
        
        <RelativeWrap>
          <InsideContainer>
            
            <ColorHeader>
              
              <BannerWrap>
                <Block1>ყოველდღიური 248 000₾</Block1>
                <Block2>Top 1500</Block2>
              </BannerWrap>
              
              <Button>?</Button>
              <Span>მოთამაშემ 10₾-იანი სპინით დააფიქსირა ყველაზე მაღალი მოგება და ლიდერბორდში დაიკავა პირველი ადგილი, ის მიიღებს 10₾X10 000=100 000₾-ს</Span>
            </ColorHeader>
            
            <Table>
              <Row>
                <HeaderLeft>რაოდენობა</HeaderLeft>
                <Header>პრიზი</Header>
              </Row> 
              
              {table2.map(item=>(
                <Row key={item.id}>
                  <BodyLeft>{item.place}</BodyLeft>
                  <Body>{item.money}</Body>
                </Row>
              ))}
            </Table>
          
          </InsideContainer>
        </RelativeWrap>    
      </Wrapper>
    </Container>
  )
}

export default TableContent2