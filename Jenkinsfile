pipeline {
    agent any
	
    environment{
        JENKINS_NODE_COOKIE = 'dontkillmeplease'
        PORT=5000
        MESSAGE='secret'
    }
    stages {
        stage('Preparation') { // for display purposes
            steps {
              // clean the workspace
              cleanWs()
            }
        }        
        stage('Download') {
           steps {
              // Download code from a GitHub repository
              git branch: 'jenkins', credentialsId: '9d791b73-e506-42da-84a4-e9c1cefaedeb', url: 'https://gitlab.com/2005-javareact/trainingrepos/1w-abcmartv3.0.git'
           }
        }
        stage('Install node modules'){
            steps{
                sh 'npm install'
            }

        }
        stage('Destroy Old Server') {
            steps {
                script {
                    try {
                        // kill any running instances
                        sh 'kill $(lsof -t -i:$PORT)'
                    } catch (all) {
                        // if it fails that should mean a server wasn't already running
                        echo 'No server was already running'
                    }
                }
            }
        }
        stage('Start New Server!') {
            steps {
                script {
                    sh 'nohup npm start &'
                }
            }
        }
    }
}