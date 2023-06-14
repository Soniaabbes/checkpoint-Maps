
import './App.css';
import  Map from "./Map"

function App() {
  return (
    <div className="App">
      <div className='droite'>
      <h1>Tour d'Argent
</h1>
      <div className='presentation'> Haut lieu de la cuisine française gastronomique, situé sur les quais et datant de plusieurs siècles, réputé pour son canard au sang.
 </div>
 <img alt="tour d'argent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-RaWZt_g70G4oXfquE5iaGy_VaJe9Hgonw&usqp=CAU"/>
 </div>
<div className='addresse'>

Horaires :  Ouvre à 12:00 <br/>
Menu: tdarotisserie.wpengine.com <br/>
Téléphone : +33 1 43 54 17 47 <br/>
Adresse : 19 Quai de la Tournelle, 75005 Paris, France
 <Map/></div>
     
    </div>
  );
}

export default App;
