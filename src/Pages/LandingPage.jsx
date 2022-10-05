import React from 'react'
import Announcement1 from '../components/Announcement1'
import styled from "styled-components"
import prizeimg from "../assets/prize-ka.png"
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Terms from '../components/Terms'
import Footer from '../components/Footer'
import Scroller from '../components/Scroller'
import TablesSection from '../components/TablesSection'


const Container = styled.div`
    height: 244px;
    width: 100%;
    color: white;
    margin-left: 43px;
    position: relative;
`
const Sign = styled.div`

    margin: 20px 0;
    width: 93px;
    height: 27px;
    background-color: #FFFFFF10;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 2px 5px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    letter-spacing: 1.5px;
`
const Info = styled.h3`
    margin-top: 25px;
    font-size: 16px;
    font-weight: 65;
    width: 100%;
    letter-spacing: 1.5px;
`
const Image = styled.img`
    position: absolute;
    top: 0px;
    right: 20px;
    height: 80%;
    width: 280px;
    padding-right: 20px;    
`

function LandingPage() {
  return (
    <div>
        <Announcement1 />
        <Container>
            <Sign>სლოტები</Sign>
            <Title>
                PRAGMATIC-ის რჩეულ სლოტებში დიდი <br/> ფულადი პრიზები და ქეშდროფები გელოდება
            </Title>
            
            <Info>
                52 კვირის განმავლობაში, მიიღე ფულადი პრიზები <br/> ყოველკვირეული საპრიზო ფონდიდან
            </Info>
            <Image src={prizeimg} />            
        </Container>

        <Cards />
        <TablesSection />
        <Scroller />        
        <Terms />
        <Footer />
    </div>
  )
}

export default LandingPage