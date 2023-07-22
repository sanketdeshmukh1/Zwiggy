import './App.css';
import Body from './Components/Body/Body';
//import HeaderComponent from './Components/HeaderComponent';
import { HeaderComponent } from './Components/Header/HeaderComponent';
/* 
header
 -logo
 -navbar
 -cart

body
 -search
 -carousals
 -restaurantlist 
   -restaurantCard
    -image
    -resName
    -menu
    -rating
    -distance

footer 
 -contact_us
 -legal
 -about_us
 */

function App() {
  return (
    <>
<HeaderComponent/>
<Body/>

    </>
  );
}

export default App;
