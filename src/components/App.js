import "bootstrap/dist/css/bootstrap.min.css";
import '../app.css'
import dog from '../assets/images/puppy.jpg';
import EmotionMeter from "./EmotionMeter";
// Não se esqueça de importar os componentes!

function App() {

  return (
    <div className="container mt-5 mb-5 col-6">
      {/* Não se esqueça de invocar seus componentes aqui! */}
      <small>Interpolação de variáveis</small>
        <h1>Olá, Pedro!</h1>
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

      <ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
    Fazer compras
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
    Renovar CNH
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
    Pagar contas
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
    Estudar React
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
    Fazer Minilab
  </li>
</ul>

      <small>Renderização condicional</small>
      <hr />

      <EmotionMeter feeling='HAPPY'/>
     
    </div>
  );
}

export default App;
