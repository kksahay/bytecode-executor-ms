# Bytecode Executor Microservice

Bytecode Executor MS is an online judge application that allows you to run C++ code in a containerized environment. It provides a secure and isolated way to execute code and assess its correctness against predefined test cases.

## Features

- Run C++ code in a containerized environment
- Secure execution with resource limitations
- Retrieve test cases from Firebase Storage using API keys

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- Docker (for containerization)

## Installation

### Nodejs

1. Clone the repository:

    ```bash
   git clone https://github.com/your-username/bytecode-executor-ms.git
   cd bytecode-executor-ms
   
2. Install dependencies
    ```bash
    npm install
3. Configure API Keys
4. ```bash
    node main.js

### Docker

1. Build the Docker image
    ```bash
    docker build -t bytecode-executor-ms .
2. Run the Docker container
    ```bash
    docker run -p XXXX:XXXX -d bytecode-executor-ms

## Usage
1. Upload input and output test case file to Firebase Storage
2. Use the appropriate API to retrieve the test cases
3. Make POST request to the application API with the C++ code and retrieved test cases to execute the code and compare the output