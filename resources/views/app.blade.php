<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ isset($title) ? "{$title} • " . config('app.name', 'Laravel') : config('app.name', 'Laravel') }}
    </title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=public-sans:400,500,600,700,800,900|signika:300,400,500,600,700|space-grotesk:500,600,700" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])

    @php
        $__inertiaSsrDispatched = true;
        $__inertiaSsrResponse = null;
    @endphp

    <!-- HTML Meta Tags -->
    <meta name="description"
        content="{{ isset($pageDescription) ? $pageDescription : 'Selamat Datang di situs resmi Catatan Cak Adi, yang mana adalah seorang website developer dan android developer.' }}" />
    <meta name="keywords" content="{{ isset($pageKeywords) ?? 'webdev, ngawidev, robotika, apps dev, website developer' }}" />

    <!-- Social Media Meta Tags -->
    <meta property="og:title"
        content="{{ isset($title) ? "{$title} • " . config('app.name', 'Laravel') : config('app.name', 'Laravel') }}" />
    <meta property="og:description"
        content="{{ isset($pageDescription) ? $pageDescription : 'Selamat Datang di situs resmi Catatan Cak Adi, yang mana adalah seorang website developer dan android developer.' }}" />
    <meta property="og:site_name" content="{{ config('app.name', 'Laravel') }}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ config('app.url') }}" />
    <meta property="og:image" content="{{ isset($imageSeo) ? $imageSeo : asset('/assets/default-banner.png') }}" />
    <meta property="og:image:alt" content="{{ isset($imageSeoDesc) ? $imageSeoDesc : 'Logo Catatan Cak Adi' }}" />
    <meta property="og:image:width" content="{{ isset($imageSeoSizeWidth) ? $imageSeoSizeWidth : 1920 }}" />
    <meta property="og:image:height" content="{{ isset($imageSeoSizeHeight) ? $imageSeoSizeHeight : 1080 }}" />

    <meta name="twitter:title"
        content="{{ isset($title) ? "{$title} • " . config('app.name', 'Laravel') : config('app.name', 'Laravel') }}" />
    <meta name="twitter:description"
        content="{{ isset($pageDescription) ? $pageDescription : 'Selamat Datang di situs resmi Catatan Cak Adi, yang mana adalah seorang website developer dan android developer.' }}" />
    <meta name="twitter:site" content="@cakadi190" />
    <meta name="twitter:creator" content="@cakadi190" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="{{ isset($imageSeo) ? $imageSeo : asset('/assets/default-banner.png') }}" />
    <meta name="twitter:image:alt" content="{{ isset($imageSeoDesc) ? $imageSeoDesc : 'Logo Catatan Cak Adi' }}" />
    <meta name="twitter:image:width" content="{{ isset($imageSeoSizeWidth) ? $imageSeoSizeWidth : 1920 }}" />
    <meta name="twitter:image:height" content="{{ isset($imageSeoSizeHeight) ? $imageSeoSizeHeight : 1080 }}" />


    <!-- Additional Meta Tags -->
    <meta property="author" content="{{ config('app.name', 'Laravel') }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- MetaData -->
    @isset($metaData)
        @foreach ($metaData as $index => $meta)
            <meta {!! implode(
                ' ',
                array_map(
                    function ($value, $key) {
                        return "$key=\"$value\"";
                    },
                    $meta,
                    array_keys($meta),
                ),
            ) !!} />
        @endforeach
        @endif

        @inertiaHead
    </head>

    <body class="font-sans antialiased">
        @inertia
    </body>

    </html>
