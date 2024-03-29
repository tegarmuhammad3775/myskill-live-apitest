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
        sh 'npm config set unsafe-perm true'
        sh 'npm run welcome'
      }
    }
    
  }
}
