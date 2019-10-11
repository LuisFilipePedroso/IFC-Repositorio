<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="description" content="iFBox - Repositório de trabalhos acadêmicos do Instituto Federal Catarinense" />
    <meta name="keywords" content="Repositório, IFC, Instituto Federal Catarinense, Rio do Sul, trabalhos, TCC, trabalhos
    acadêmicos, ifbox, Ciência da Computação" />
    <meta name="author" content="Alunos da sexta fase do curso de Ciência da Computação do Instituto Federal Catarinense
    (www.ifc-riodosul.edu.br/)" />
    <meta name="robots" content="ALL" />

    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i,900,900i&display=swap" rel="stylesheet">

    <script src="{{ asset('js/app.js') }}" defer></script>

    <script>
        var assetBaseUrl = "{{ asset('') }}";
    </script>

    <script src="{{ asset('js/custom.js?v=').time() }}" defer></script>

    <link rel="shortcut icon" href="{{{ asset('img/fav.png') }}}">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/custom.css?v=').time() }}" rel="stylesheet">
    <title>Document</title>
</head>
<body>

</body>
</html>
