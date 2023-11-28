<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (\Symfony\Component\HttpKernel\Exception\NotFoundHttpException $e, Request $request) {
            $title = [
                503 => "Service Unavailable",
                500 => "Server Error",
                419 => "Page Expired",
                404 => "Page Not Found",
                403 => "Forbidden",
            ];

            $description = [
                503 => "Sorry, we are doing some maintenance. Please check back soon.",
                500 => "Whoops, something went wrong on our servers.",
                419 => "Whoops, your access token has been expired or revoked.",
                404 => "Sorry, the page you are looking for could not be found.",
                403 => "Sorry, you are forbidden from accessing this page.",
            ];

            return Inertia::render('error', ['status' => $e->getStatusCode(), 'message' => $e->getMessage()])
                ->withViewData([
                    'title' => $title[$e->getStatusCode()],
                    'pageDescription' => $description[$e->getStatusCode()],
                ])
                ->toResponse($request)
                ->setStatusCode($e->getStatusCode());
        });
    }
}
