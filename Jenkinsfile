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
        sh 'npm config set user 0'
      }
      steps{
        sh 'npm config set unsafe-perm true'
      }
      steps{
        sh 'npm run welcome'
      }
    }
    
  }
}
