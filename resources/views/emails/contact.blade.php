<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Contact Form Message</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .box { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
        .field { margin-bottom: 12px; }
    </style>
</head>
<body>
    <div class="box">
        <h2>📩 New Contact Form Submission</h2>

        <div class="field"><strong>Name:</strong> {{ $data['name'] }}</div>
        <div class="field"><strong>Email:</strong> {{ $data['email'] }}</div>
        <div class="field"><strong>Subject:</strong> {{ $data['subject'] }}</div>

        <hr>

        <div class="field"><strong>Message:</strong></div>
        <p>{{ $data['message'] }}</p>
    </div>
</body>
</html>
