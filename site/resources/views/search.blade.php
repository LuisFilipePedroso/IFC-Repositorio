<div class="container-fluid" id="container-search">
  <div class="container">
    <form action="{{ route('pesquisar') }}" method="GET">
      <div class="row">
        <div class="col-md-12">
          <img id="caixa-roxa" src="{{ asset('img/New_Box1.png') }}" alt="Ifbox" class="img-responsive">
        </div>
        <div class="col-md-12 text-center" id="busque-na-caixa">
          <h1>Busque os trabalhos na caixa!</h1>
        </div> 
        <div class="form-group col-md-12">
            <input id="searchbar" type="text" autocomplete="off"
            value="{{old('nome')}}" class="form-control borda" name="nome"/>
            <button type="submit" id="icone-search"><i class="fas fa-search"></i></button>     
        </div>
        <div id="div-busca-avancada">
          <a href="/pesquisa">
            <span id="label-busca-avancada">Busca Avançada</span>
          </a>
        </div>
      </div>
    </form>
  </div>
</div>