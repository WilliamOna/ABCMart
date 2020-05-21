pipeline {
   agent any

   stages {
      stage('Install node modules') {
         steps {
            sh 'npm install'
         }
      }
      stage('Destroy old App') {
         steps {
            sh 'kill -9 $(lsof -t -i:5000)'
         }
      }
      stage('Start App!') {
         steps {
            sh 'nohup npm start &'
         }
      }
   }
}
