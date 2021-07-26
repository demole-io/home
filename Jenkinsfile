pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git credentialsId: 'demole-github', url: 'https://github.com/demoleio/demole-frontend.git'
            }
        }
        stage('Build Image') {
            steps {
                sh 'docker build -t demole-frontend:latest'
            }
        }
        stage('Run Docker') {
            steps {
                sh 'docker run -d -p 80:80 demole-frontend:latest'
            }
        }
    }
}