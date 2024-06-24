# Project Overview

Develop a website using Next.js and Django that takes two CSV files as input and generates a downloadable CSV file as output.

# Features

- User-friendly interface for uploading two CSV files.
- Validation checks to ensure the uploaded files are in the correct format.
- Ability to map columns from the input CSV files to the corresponding columns in the output CSV file.
- Option to specify the delimiter for the output CSV file.
- Preview functionality to view the data before generating the final output.
- Download button to save the generated CSV file to the user's device.

# Enhancements

- Implement drag and drop functionality for uploading CSV files.
- Include a progress bar to indicate the status of the file processing.
- Allow users to save mapping configurations for future use.
- Add support for different file formats such as Excel files.
- Include error handling for cases where the input files are not compatible.

# Programming Languages

- Next.js for the frontend to create a dynamic and responsive user interface.
- Django for the backend to handle file processing, mapping, and output generation efficiently.

# APIs

- Django REST framework for building RESTful APIs to handle file uploads, processing, and downloads.
- Next.js API routes to communicate with the backend and manage data flow between frontend and backend.

# Packages and Libraries

- Pandas (latest version) for data manipulation and CSV file handling in Python (Django).
- Axios (latest version) for making HTTP requests from the Next.js frontend to the Django backend.
- React Dropzone (latest version) for implementing drag and drop functionality for file uploads.
- React CSV (latest version) for CSV file parsing and rendering in the frontend.

# Rationale

- Next.js was chosen for the frontend due to its server-side rendering capabilities, which improve SEO and initial load times.
- Django was selected for the backend for its robustness, scalability, and the Django REST framework for building APIs efficiently.
- Pandas is a powerful library for data manipulation, making it ideal for handling CSV files and data processing.
- Axios simplifies handling HTTP requests, ensuring seamless communication between the frontend and backend.
- React Dropzone and React CSV enhance user experience by enabling drag and drop functionality and easy CSV file parsing in the frontend.

# Conclusion

By using Next.js and Django, along with the specified APIs and libraries, the project will offer users a seamless experience for uploading, processing, and downloading CSV files. The chosen technologies and tools ensure efficient data management and a user-friendly interface, meeting the project's objectives effectively.