pipeline {
   agent any

   stages {
      stage('Install node modules') {
         steps {
            sh 'npm install'
         }
      }
      stage('Start App!') {
         steps {
            sh 'npm start'
         }
      }
   }
}
