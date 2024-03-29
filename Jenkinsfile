pipeline{
  agent any
  tools{
    nodejs 'Node ENV'
  }
  stages{
    stage('Install Deps'){
      steps{
        sh 'npm install'
      }
    }

    stage('Unit Test'){
      steps{
        sh 'npm run "test get"'
      }
    }
    
  }
}
