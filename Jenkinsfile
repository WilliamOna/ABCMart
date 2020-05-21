pipeline {
   agent any


   stages {
    //    stage('clean'){
    //        steps{
    //            cleanWS();
    //        }
    //    }
    //    stage('download'){
    //        steps{
    //            git branch: 'master', url: 'https://github.com/WilliamOna/ABCMart.git', credentialsId: '1124e075-a6a6-439c-9fb6-f2ca193af9a3'
    //        }
    //    }
      stage('Install node modules') {
         steps {
            sh 'npm install'
         }
      }
      stage('Destroy old App') {
         steps {
             script{
                try{
                    sh 'kill -9 $(lsof -t -i:5000)'
                }catch (all){
                    echo 'No Server was already running'
                }
             }
         }
      }
      stage('Start App!') {
         steps {
            sh 'nohup npm start &'
         }
      }
   }
}
