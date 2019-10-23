<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!--<meta charset="utf-8">-->
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>iFBox - Repositório Acadêmico</title>      

        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="robots" content="ALL" />

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
    </head>
<body class="site {{Route::currentRouteName()}}">
    <div id="app" class="site {{Route::currentRouteName()}}">
        <header>           
            <div id="menu">
                <div class="container">
                    <div class="row">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <input type="hidden" id="app-url" value="{{ url('/') }}"/>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div class="col-md-3 col-xs-12 col-sm-12" id="container-logo">
                                    <h1 id="logo">
                                        <a href="{{route('home')}}" title="iFBox">
                                            <img class="img-responsive" alt="menu" src="{{asset('img/iFBox_white.png')}}" />
                                        </a>
                                    </h1>
                                </div>
                                <div class="col-md-2"></div>
                                <div class="col-md-5 col-xs-12 col-sm-12 text-left">
                                    <ul class="navbar-nav" id="container-menu-item">
                                        <li><a href="#" title="Pesquisar" id="">Pesquisar</a></li>
                                        <li><a href="#" title="Sobre nós" id="">Sobre nós</a></li>
                                        <li><a href="#" title="A equipe" id="">A equipe</a></li>                                   
                                    </ul>
                                </div>
                                <div class="col-md-2 col-xs-12 col-sm-12">                                   
                                    <a href="#" title="Guarde Seus Trabalhos" id="link-home-upload" class="btn borda hover">
                                        <i class="fas fa-cloud-upload-alt mr-2"></i>
                                        UPLOAD
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <main id="main-container">
            
            @component('sobre')@endcomponent

            {{-- @component('banners')
                @slot('banners', $banners)
            {{-- @endcomponent --}}
            
        </main>       
        <footer>
            <a href="http://www.ifc-riodosul.edu.br/site/">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center borda-superior">
                            <span id="rodape-texto">&copy 2019 Instituto Federal Catarinense - Campus Rio do Sul</span>
                        </div>
                    </div>
                </div> 
            </a>                 
        </footer>
    </div>
</body>
</html>