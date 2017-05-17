const {mix} = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .extract(['vue'])
    .sass('resources/sass/app.scss', 'public/css').sourceMaps().browserSync({
    proxy: '127.0.0.1:60809'});