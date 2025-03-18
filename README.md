Digital Picture Frame App
 Overview
 A simple Flutter app that rotates through images stored in AWS S3, displaying them in the best resolution for Android and iOS devices.
 Features
 Rotation of Images: Changes images every ten seconds. Personalized border around images in a custom frame. Pause/Resume: Control image rotation with a button.
 Optimized Display: Ensures high-resolution rendering on mobile screens.
 Technologies Used
 Framework: Flutter
 Storage: AWS S3
 Management of States: Provider and SetState Installation
 Clone this repo:
 https://github.com/your-repo/flutter-picture-frame.git can be copied using git. cd flutter-picture-frame
 Install dependencies:
 flutter pub get
 Configure AWS S3 access in lib/config.dart:
 const String awsBucketUrl = "https://your-bucket.s3.amazonaws.com/";
 Run the app:
 flutter run
 Acknowledgments
 Some code was taken from AI (ChatGPT) and modified.
 References from YouTube tutorials and GitHub repositories.
