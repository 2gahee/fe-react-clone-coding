// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import Header from "./component/header";
import GlobalStyle  from "./component/Globalstyle";
import Card from "./component/card";
import Button from "./component/button";
import Maincomponent from "./component/maincomponent";
import Footer from "./component/footer";

function App() {
  return(
  <>
  <GlobalStyle/>
 <Header/>
 <Maincomponent/>
 <Card/>
 <Footer/>
 


 
  </>
  ); 
}


export default App;
