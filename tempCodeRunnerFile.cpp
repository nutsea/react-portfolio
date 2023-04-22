
#include <iostream>
#include <string>
#include <vector>
#include <thread>
#include <mutex>

using namespace std;

// Константы для сервера и клиента
const int PORT_NUMBER = 9001;
const char* HOST_NAME = "localhost";
const int BUFFER_SIZE = 1024;

// Функция для отправки сообщений на сервер
void sendMessages(int socket) {
    while (true) {
        string message;
        getline(cin, message);
        if (message.empty()) continue;

        char buffer[BUFFER_SIZE];
        message.copy(buffer, BUFFER_SIZE);
        buffer[message.size()] = '\0';

        ssize_t bytesSent = send(socket, buffer, strlen(buffer), 0);
        if (bytesSent == -1) {
            cerr << "Error sending message to server." << endl;
            break;
        }
    }
}

// Функция для получения сообщений от сервера
void receiveMessages(int socket, mutex& mtx) {
    while (true) {
        char buffer[BUFFER_SIZE];
        ssize_t bytesRead = recv(socket, buffer, BUFFER_SIZE - 1, 0);
        if (bytesRead == -1) {
            cerr << "Error receiving message from server." << endl;
            break;
        } else if (bytesRead == 0) {
            cout << "Server has closed the connection." << endl;
            break;
        } else {
            buffer[bytesRead] = '\0';
            lock_guard<mutex> lock(mtx);
            cout << buffer << endl;
        }
    }
}

int main() {
    int clientSocket = socket(AF_INET, SOCK_STREAM, 0);
    if (clientSocket == -1) {
        cerr << "Error creating client socket." << endl;
        return 1;
    }

    sockaddr_in serverAddress = {0};
    serverAddress.sin_family = AF_INET;
    serverAddress.sin_port = htons(PORT_NUMBER);
    inet_pton(AF_INET, HOST_NAME, &serverAddress.sin_addr);

    if (connect(clientSocket, (sockaddr*)&serverAddress, sizeof(serverAddress)) == -1) {
        cerr << "Error connecting to server." << endl;
        return 1;
    }

    cout << "Connected to server on port " << PORT;
}