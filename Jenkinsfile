pipeline {
    agent any

    stages {
        stage('Prepare the flow') {
            steps {
                echo 'Preparing the flow...'
            }
        }
        stage('Build the app') {
            steps {
                sh 'nps kube'
            }
        }
        stage('Clean up') {
            steps {
                echo 'Cleaning up...'
            }
        }
    }

} //end pipeline