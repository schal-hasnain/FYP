import "./sign2.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import LoginImage from './images/imgLogin.jpg'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:10%;
  margin-bottom:10%;
`;

function App() {
  return (
    
    <AppContainer>
      <div className="mainDivLoginn">
      <img className="imgLogin" src={LoginImage} alt=""></img>
      <AccountBox />
      </div>
     
    </AppContainer>
  );
}

export default App;