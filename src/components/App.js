import "bootstrap/dist/css/bootstrap.min.css";
import '../app.css'
import dog from '../assets/images/puppy.jpg';
import EmotionMeter from "./EmotionMeter";
import Greeting from "./Greeting";
import ToDoList from "./ToDoList";
// Não se esqueça de importar os componentes!

const tasks = [
  "Fazer compras",
  "Renovar CNH",
  "Pagar contas",
  "Estudar React",
  "Fazer Minilab",
];

function App() {

  return (
    <div className="container mt-5 mb-5 col-6">
      {/* Não se esqueça de invocar seus componentes aqui! */}
      <small>Interpolação de variáveis</small>
        <Greeting name='Edgar' />
      <small>Imagens</small>
      <hr />

      <div className="borda"> 
        <img className="cachorro" src={dog} alt="logo do cachorro" />
        
        <h3>Cute Puppy </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipisci elit, 
        sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. </p>
      </div>

      <small>Renderização de listas</small>
      <hr />

      <ToDoList taskList={tasks}/>


      <small>Renderização condicional</small>
      <hr />

      <EmotionMeter feeling='HAPPY'/>
     
    </div>
  );
}

export default App;
