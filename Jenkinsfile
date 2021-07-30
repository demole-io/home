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