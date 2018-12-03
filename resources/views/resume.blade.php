<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Tu Thien Chung</title>
        {{-- favicon --}}

        <link rel="shortcut icon" href="{{asset('images/code_fav.ico')}}" type="image/x-icon" />


        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        {{-- script --}}
        <script src="{{ asset('js/jquery.js') }}" defer></script>
        {{-- <script src="{{ asset('js/semantic.js') }}" defer></script> --}}
        <script src="{{ asset('js/manifest.js') }}" defer></script>
        <script src="{{ asset('js/vendor.js') }}" defer></script>
        <script src="{{ asset('js/app.js') }}" defer></script>

        {{-- style --}}
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('css/semantic.css') }}">
    </head>
    <body id="app">
        <div id="resume">
            <title-content></title-content>
            <Navigation></Navigation>
            <router-view></router-view>
        </div>
    </body>
</html>
