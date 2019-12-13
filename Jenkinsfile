pipeline {
    agent any
    //triggers
    triggers {
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