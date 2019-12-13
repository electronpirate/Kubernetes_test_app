pipeline {
    agent any
    trigger {
        pollSCM('* * * * *')
    }

    stages {
        stage('Prepare the flow') {
            steps {
                echo 'Preparing the flow...'
            }
        }
        stage('Build the app') {
            steps {
                sh 'nps kube.start'
            }
        }
    }

} //end pipeline