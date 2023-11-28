<x-mail::message>
# Hi, there!

This is sample email I've created for you. This email only for testing purpose. So, don't worry about it. And also, please don't reply to this email.

<x-mail::button :url="'mailto:cakadi190@gmail.com'">
Email Me Back
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
