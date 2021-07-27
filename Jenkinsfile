pipeline {
    agent any

    stages {
        stage('Build Image') {
            steps {
                sh 'docker build -t demole-frontend:latest .'
            }
        }
        stage('Run Docker-compose') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}