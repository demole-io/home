pipeline {
    agent any

    stages {
        stage('Build Image') {
            steps {
                sh 'docker build -t demole-frontend:latest .'
            }
        }
        stage('Run Docker') {
            steps {
                sh 'docker run -d -p 80:80 demole-frontend:latest'
            }
        }
    }
}