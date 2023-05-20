import styled from "styled-components";


const Ex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 90px 0px 100px 0px;
`;
const Headtext = styled.h1`
  font-size: 45px;
  font-weight: 300;
  height: 58px;
`;
const Intext = styled.p`
  word-spacing: -2px;
  width: 100%;
  text-align: center;
  font-size: 23px;
  line-height: 1.5;
  color: #6c6a6a;
  margin-bottom: 25px;
`;

const btnwrap= styled.div`
 display: flex;
 justify-content: space-between;
 width: 400px;

`;

const Headbtn1 = styled.button`
  width: 180px;
  height: 45px;
  background-color: #007bff;
  color: #fff;
  margin-right: 5px;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  
  &:hover {
    background-color: blue;
    transition-duration: 0.1s;
    transition-delay: 0.1s;
  }
`;


const Headbtn2 =styled.button`

width: 180px;
  height: 45px;
  background-color:#6c757d;
  color: #fff;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background-color:  #6b6969;
    transition-duration: 0.1s;
    transition-delay: 0.1s;
  }
`;


const Maincomponent =  (props) => {
  return (
    <Ex>
      <Headtext>Album example</Headtext>
      <Intext>
        Something short and leading about the collection below—its contents,
        <br />, the creator, etc. Make it short and sweet, but not too short so
        folks don’t <br /> simply skip over it entirely 
        </Intext>
        <btnwrap>
        <Headbtn1>Main call to action</Headbtn1>
        <Headbtn2>Secondary action</Headbtn2>  
        </btnwrap>
    </Ex>
  );
};

export default Maincomponent;