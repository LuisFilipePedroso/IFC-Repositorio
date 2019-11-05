{{-- @extends('') --}}
<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer></script>

<script src="{{ asset('js/chosen.jquery.js?v=').time() }}" defer></script>
<script src="{{ asset('js/sweetalert2.all.min.js') }}"></script>
<script src="{{ asset('js/jquery.mask.min.js') }}" defer></script>
<script src="{{ asset('js/jquery.maskMoney.js') }}" defer></script>
<script src="{{ asset('js/jquery-ui.js') }}" defer></script>        
<script src="{{ asset('js/jquery.tosrus.min.all.js') }}" defer></script>
<script src="{{ asset('js/owl.carousel.min.js') }}" defer></script>
<script src="{{ asset('js/custom.js?v=').time() }}" defer></script>

<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,800,800i&display=swap" 
rel="stylesheet"> 

<link rel="shortcut icon" href="{{ asset('img/fav.png') }}">

<!-- Styles -->
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
<link href="{{ asset('css/custom.css?v=').time() }}" rel="stylesheet">
<link href="{{ asset('css/sweetalert2.min.css') }}" rel="stylesheet">
<link href="{{ asset('css/jquery-ui.css') }}" rel="stylesheet">
<link href="{{ asset('css/chosen.css') }}" rel="stylesheet">
<link href="{{ asset('css/jquery.tosrus.all.css') }}" rel="stylesheet">

<!-- Owl Stylesheets -->
<link rel="stylesheet" href="{{ asset('css/owl.carousel.min.css') }}">
<link rel="stylesheet" href="{{ asset('css/owl.theme.default.min.css') }}">


<style>
    /* Lembrar de adicionar => .site #container-trabalho  */
    .titulo {
        font-weight: bold;
        font-size: 15px;
    }
    .texto {
        text-align: justify;
    }
    .conteudo {
        margin-bottom: 15px;
    }
</style>




<div id="container-trabalho" class="container-fluid">
    <div class='container'>
        <br><br>
        <h2>{{$aTrabalho['title']}}</h2>
        <br>

        <div class="row">
            <div class="col-sm-3">
                <div class="titulo">Autor</div>
                <div>Mathias Artur Schulz</div>
            </div>
            <div class="col-sm-9">
                <div class="titulo">Resumo</div>
                <div class='conteudo texto'>{{$aTrabalho['abstract']}}</div>
                <div class="titulo">Abstract</div>
                <div class='conteudo texto'>{{$aTrabalho['altabstract']}}</div>
            </div>
        </div>
        {{-- <div class="row">
            <div class="col-sm-3">Mathias Artur Schulz</div>
            <div class="col-sm-9">.col-sm-4</div>
        </div> --}}
        <br>
        <br><br><br>

        <?= $aTrabalho['title'] ?>

        <?php var_dump($aTrabalho) ?>

    </div>
</div>
