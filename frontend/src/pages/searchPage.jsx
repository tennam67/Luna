import React from 'react'
import HeaderNavi from '../components/headerNavi/index'
import styled from 'styled-components'
import CardReview from '../components/cards/cardReview';
// import arrow from '../assets/arrow.svg'
import CardRestaurant from '../components/cards/cardRestaurant/index';
import CardUser from '../components/cards/cardUser/index'
import Footer from '../components/footer/index';
import { useState } from "react";


const MainContainer = styled.div `
    min-height: 90vh;
`;

const SearchSelectContainer = styled.div `
    height: 50px;
    min-width:100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10px;
    box-sizing: content-box;
    border: 1px solid #EBEBEB;
    background-color: white;
`;

const SelectCategory = styled.div `
    margin-right: 10px;
    display: flex;
    justify-content:center;
    align-items: center;

  
    span{
        border-left: 1px solid #D8D8D8;
        height: 50px;
        
    }
    select{
        margin-right: 10px;
        border-style: none;
        color: #D8D8D8;
        outline:none;
    }

`;
const SearchBox = styled.div`
    margin-left: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    input{
        width: 50vw;
        background: #FFFFFF;
        border-radius: 5px;
        border-style:none;
        outline: none;
        padding-left: 10px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;
    }   
`;
const TabsContainer = styled.div`
    /* width: 80vw; */
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    margin: 20px 0 40px 0;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;

color: #4C4C4C;
    span{
        width: 500px;
        border-bottom: 1px solid #EBEBEB;
    }
    .reviewtitle{
        display: flex;
        div{
        margin: 0 80px 0 0;
        :hover {
            padding-bottom: 10px;
            border-bottom: 3px solid #E47D31;
        }
       
    }
    }
   
`;

const ResCardContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;    
    .content {
            display: none;
        }
    .active-content {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }

`;

const ContentWrapper = styled.div`
    margin: auto;
    max-width: 80vw;
`;

const SearchPage = () => {
    
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    // console.log(index)
    };

    return (
        <>
        <MainContainer>
            <HeaderNavi/>
            <SearchSelectContainer>
                <SearchBox><input type="search" name=""  placeholder='Search..'/></SearchBox>
                <SelectCategory>
                <span></span>
                <select id="selectbox1">
                    <option value="">Select a category&hellip;</option>
                    <option value="Indian">Indian</option>
                    <option value="Tibetan">Tibetan</option>
                    <option value="Swiss">Swiss</option>
                    <option value="French">French</option>
                </select>
                {/* <img src={arrow} alt="select arrow"/> */}
                </SelectCategory>
            </SearchSelectContainer>
            <ContentWrapper>
            <TabsContainer>
                <div className="reviewtitle">
                    <div onClick={() => toggleTab(1)}>Restaurants</div>
                    <div onClick={() => toggleTab(2)}>Reviews</div>
                    <div onClick={() => toggleTab(3)}>Users</div>
                </div>
              
                <span></span>
            </TabsContainer>
            <ResCardContainer> 
                <div className={toggleState === 1 ? " active-content" : "content"}>
                    <CardRestaurant/>
                    <CardRestaurant/>
                    <CardRestaurant/>
                    <CardRestaurant/>
                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>
                   <CardReview/>
                    <CardReview/>
                    <CardReview/>
                    <CardReview/>
                </div>
                <div className={toggleState === 3 ? "active-content" : "content"}>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                </div> 
            </ResCardContainer>  
            </ContentWrapper>
        </MainContainer>
        <Footer/>  
    </>
    )
}

export default SearchPage;
