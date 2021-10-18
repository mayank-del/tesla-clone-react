import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({title,description,leftBtnText,rightBtnText,backgroundimg}) {
    return (
        <Wrap bgImage={backgroundimg}>{/* we passed background image there in fxn as parameter,then we passed it in wrap components*/}
          <Fade bottom>
           <ItemText>
               <h1>
                   {title}   {/* we re writing title instead of writing Model S */}  
               </h1>
               <p>
                  {description}
               </p>
           </ItemText>
           </Fade>
        <Buttons>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                { rightBtnText&& 
                <RightButton>
                {rightBtnText}
                </RightButton>
                }
                
                </ButtonGroup>
            </Fade>
                <DownArrow src="/images/logo1.svg" />
        </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap=styled.div`
    z-index:10;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    background-image: url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;// it is for vertical allgnment
    align-items:center;// it is for horizontal allgnment
    background-image:${props =>`url("/images/${props.bgImage}")`}
`
const ItemText =styled.div`
padding-top:15vh;
text-align:center;
z-index:-1;
h1{
    font-size:2.6rem;
    font-family: -webkit-pictograph;
    font-weight:600;
}
`
const ButtonGroup=styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:768px){
        flex-direction:column;
    }
`

const LeftButton =styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;

`

const RightButton=styled( LeftButton)`//we re using Left button inside brackets bcoz it allows us to use css of left button in rightbutton
 background:white;
 opacity:0.65;
 color:black;
`
const DownArrow= styled.img`
    
    height:30px;
    margin-left:250px;
    animation:animateDown infinite 1.5s;
    /* justify-content:center;
    align-items:center; */
    @media(max-width:768px){
       margin-left:125px;
    }
`
const  Buttons =styled.div`
`