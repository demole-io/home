pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git credentialsId: 'demole-github', url: 'https://github.com/demoleio/demole-frontend.git'
            }
        }
        stage('Build Image & Run Docker') {
            steps {
                sh '''docker build -t demole-frontend:latest .
                docker run -d -p 80:80 demole-frontend:latest'''
            }
        }
    }
}