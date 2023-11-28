<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnvirontmentMode
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next The next middleware.
     * @param mixed ...$condition The condition to check the environment mode.
     */
    public function handle(Request $request, Closure $next, ...$condition): Response
    {
        if(!app()->environment(...$condition)) {
            return abort(403, 'Unauthorized action.');
        }

        return $next($request);
    }
}
