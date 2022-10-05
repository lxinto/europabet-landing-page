import React, { useState} from 'react'
import styled from "styled-components"
import TableContent1 from "./TableContent1"
import TableContent2 from "./TableContent2"
import Multiplier from "../assets/multipliers-img.png"
import Plus from "../assets/plus.png"
import {mobile} from "../responsive"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 20px;
  color: white;
  text-align: center;
  letter-spacing: 1.5px;
`

const DateWrapper = styled.main`
  display: inline-flex;
  overflow: hidden;
  justify-content: space-evenly;
  border-radius: 10px 10px 0 0;
  background-color: #1A293B;
  width: 520px;
  height: 40px;
`
const Input = styled.input`
  display: none;
  
  &:checked + label {
    background-color: #2E9EA1;
  }
    
`

const Label = styled.label`
  flex: 1;
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  background-color: #1A293B;
  cursor: pointer;
  color: white;

  &:hover {
    background-color:#2E9EA150 ;
  }
  
`
const XTwrapper = styled.div`
  width: 100%;
  background-color:  #1A293B;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TableWrapper = styled.div`  
  position: relative;
  width: 100%;
  height: 600px;
  background-color: #1A293B80;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const CatchX = styled.div`
  display: flex;
  width: 500px;
  height: 110px;
  background-color:#203248;
  margin: 40px 0 40px 0;
  border-radius: 20px;
`
const Xtextwrap = styled.div`
  
`

const Xtitle = styled.h1`
  font-size: 18px;
  color: white;
`

const Xinfo = styled.p`
  font-size: 14px;
  color: white;
`

const Ximage = styled.img``

const PlusIcon = styled.img`
  position: absolute;
  z-index: 5;
  top: 50%;
  ${mobile({ top: "50%" })}
`

const SectionFooter = styled.div`
  width: 100%;
  background-color: #1A293B80;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-bottom: 10px;
`
const AlwaysVisible = styled.p`
  font-size: 13px;
  color: #FFFFFF70;
`
const Swap = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  color: #FFFFFF70;
  font-weight: 100;
`
const Span = styled.span`
  //display: none;
  margin: 0 10px;
  padding: 0 10px 5px 10px;
  font-size: 13px;
  color: #FFFFFF70;
  font-weight: 100;
`



function TablesSection(item) {
  const [show, setShow] = useState(false)
  return (
    <>
    <Container>
      <Title>
        12 კვირის განმავლობაში, მიიღე ფულადი პრიზები <br/> ყოველკვირეული საპრიზო ფონდიდან
      </Title>
      
      <DateWrapper className='bgc'>
        <Input type="radio" id="1" value="2.07-29.07" name="date" defaultChecked onChange={()=>setShow(false)}/>
        <Label id="label" for="1">2.07-29.07</Label>
        <Input type="radio" id="2" value="29.07-14.08" name="date" onChange={()=>setShow(true)}/>
        <Label for="2">29.07-14.08</Label>
        <Input type="radio" id="3" value="14.08-26.09" name="date"/>
        <Label for="3">14.08-26.09</Label>
        <Input type="radio" id="4" value="26.09-30.10" name="date"/>
        <Label for="4">26.09-30.10</Label>
      </DateWrapper>
      
      <XTwrapper>
        
        {show?<CatchX>
          <Ximage src={Multiplier}/>
          
          <Xtextwrap>
            <Xtitle>ᲓᲐᲘᲭᲘᲠᲔ X-ᲔᲑᲘ</Xtitle>
            <Xinfo>დაიკავე საპრიზო ადგილი ლიდერბორდში ან ჩამოაგდე ფულადი პრიზის შემთხვევითი მულტიპლიკატორი</Xinfo>
          </Xtextwrap>

        </CatchX>:null}
        
        
        <TableWrapper>
          <TableContent1 />
          <PlusIcon src={Plus}/>
          <TableContent2 />
        </TableWrapper>
      
      </XTwrapper>

    </Container>
      <SectionFooter>
        <AlwaysVisible>*პრიზები დაირიცხება ავტომატურად მოგებისთანავე.</AlwaysVisible>
        <AlwaysVisible>*ლიდერბორდი და დარჩენილი ქეშ დროფ პრიზების ოდენობა განახლდება ავტომატურად, მონაწილე თამაშების ფანჯარაში</AlwaysVisible>
        
        {show?<Swap>
          <Span>*თუ მომგებიან სპინზე დადებული ფსონი გადააჭარბებს 40₾-ს, მაშინ მოთამაშის მოგებული მულტიპლიკატორი გამრავლდება 40₾-ზე</Span>
          <Span>*ფრისპინების მოგების შემთხვევაში, 10 ცალი ფრისპინის ნომინალი განისაზღვრებამომგებიან სპინზე დადებული ფსონის შესაბამისად. თუ მომგებიან სპინზე დადებული ფსონი გადააჭარბებს 4₾-ს, მოთამაშე ჯამურად მიიღებს 10 ცალ 4 ლარიან ფრისპინს</Span>
        </Swap>:null}
      </SectionFooter>
    </>
  )
}

export default TablesSection