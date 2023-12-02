<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="{{ asset('sitemap.xsl') }}"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>{{ url('/') }}</loc>
        <lastmod>{{ now() }}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </sitemap>
    <sitemap>
        <loc>{{ url('/portofolio') }}</loc>
        <lastmod>{{ now() }}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </sitemap>

    <!-- For Portofolio Page -->
    @foreach($portofolios as $porto)
    <sitemap>
        <loc>{{ url("/portofolio/{$porto->id}") }}</loc>
        <lastmod>{{ $porto->updated_at }}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </sitemap>
    @endforeach
</sitemapindex>
