export default function Home() {
  return (
    <div>
      <h1>Exemplo de Input com Datalist</h1>
      <form action="https://www.w3schools.com/action_page.php" target="_blank" method="POST">
        <input name="browserName" list="browsers" />
        <datalist id="browsers">
          <option value="Internet Explorer" />
          <option value="Firefox" />
          <option value="Chrome" />
          <option value="Opera" />
          <option value="Safari" />
        </datalist>
        <input type="submit" value="Enviar" />
      </form>
      <hr />
      <h1>Exemplos de Tabelas</h1>
      <table border="1">
        <caption>Resultado 1º Bimestre</caption>
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">João</td>
          </tr>
          <tr>
            <td>Carlos</td>
            <td>10,0</td>
            <td rowSpan="2">10,0</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td>10,0</td>
          </tr>
        </tbody>
      </table>

      <hr />
      <a href="http://www.google.com.br" target="_blank">
        Ir para o Google
      </a>

      <h1>Lista de plantas silvestres na Amazônia</h1>
      <img
        src="1_flores_album.jpg"
        alt="mosaico com flores da amazônia"
        width="400"
        height="300"
      />
      <audio src="http://www.w3schools.com/tags/horse.mp3" controls>
        Seu navegador não suporta a tag audio.
      </audio>
      <video src="https://www.w3schools.com/tags/movie.mp4" controls>
        Seu navegador não suporta a tag vídeo.
      </video>

      <p>
        A lista de plantas silvestres da <strong>Amazônia</strong> inclui todas
        as espécies endêmicas da vegetação da Amazônia. Segundo{" "}
        <em>Giacometti</em>
        (1990), é estimada a existência de 800 espécies vegetais de valor
        econômico ou social nesta floresta.
      </p>
      <hr />
      <p>
        Elas foram listadas abaixo de acordo com a família à qual pertencem.
      </p>
      <h2>Bromeliaceae</h2>
      <p>
        Bromeliaceae Juss. é uma família de monocotiledôneas, que segundo a
        classificação filogenética AGP III (2009) pertence à ordem dos Poales,
        com plantas terrestres, rupícolas ou, principalmente epífitas, possui
        3.172 espécies, distribuídas em 58 gêneros.
      </p>
      <h2>Chrysobalanaceae</h2>
      <p>
        Chrysobalanaceae é uma família de plantas angiospérmicas (plantas com
        flor - divisão Magnoliophyta), pertencente à ordem Malpighiales.
      </p>
      <hr />
    </div>
  );
}
