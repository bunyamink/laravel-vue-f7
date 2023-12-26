<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>

        <!-- Required meta tags-->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <!-- Color theme for statusbar (Android only) -->
        <meta name="theme-color" content="#2196f3">
        <!-- Your app title -->
        <title>My App</title>

        @vite(['node_modules/framework7/framework7-bundle.min.css', 'resources/css/app.css', 'resources/js/app.js'])

    </head>
    <body>
        <!-- App Root Element -->
        <div id="app">

        </div>
    
        <!-- Scripts will be auto injected -->
      </body>
</html>
