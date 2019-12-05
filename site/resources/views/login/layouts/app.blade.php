<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Painel</title>

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>

        <script src="{{ asset('js/chosen.jquery.js?v=').time() }}" defer></script>
        <script src="{{ asset('js/sweetalert2.all.min.js') }}"></script>
        <script src="{{ asset('js/jquery.mask.min.js') }}" defer></script>
        <script src="{{ asset('js/jquery.maskMoney.js') }}" defer></script>
        <script src="{{ asset('js/jquery-ui.js') }}" defer></script>
        <script src="{{ asset('js/summernote-bs4.js?v=').time() }}" defer></script>
        <script src="{{ asset('js/custom.js?v=').time() }}" defer></script>

        <!--<link rel="shortcut icon" href="{{{ asset('img/icone.png') }}}">-->

        <!-- Fonts -->
        <!--<link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">-->

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/custom.css?v=').time() }}" rel="stylesheet">
        <link href="{{ asset('css/sweetalert2.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/jquery-ui.css') }}" rel="stylesheet">
        <link href="{{ asset('css/chosen.css') }}" rel="stylesheet">
        <link href="{{ asset('css/summernote-bs4.css') }}" rel="stylesheet">
    </head>
<body> 
    <div>
      <main class="py-4">
          @yield('content')
      </main>
    </div>
</body>
</html>