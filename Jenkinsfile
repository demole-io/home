pipeline {
    agent any

    stages {
        stage('Install & Build') {
            steps {
                sh 'npm install && npm run build'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t demole-frontend:latest .'
            }
        }
        stage('Run') {
            steps {
                sh 'docker-compose up -d'
            }
        }
        stage('Clean old images') {
            steps {
                sh 'docker rmi `docker images --filter dangling=true -q` --force'
            }
        }
    }

    post { 	//No matter success or failure will send information, youid is the group id sent
        always {
            telegramSend(message:'Build Status: ${PROJECT_NAME} is ${BUILD_STATUS}')
        }
    }
}