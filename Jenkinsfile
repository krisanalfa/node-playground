pipeline {
  agent {
    agent { dockerfile true }
  }

  tools { nodejs "9.8.0" }

  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'npm install'
        sh 'npm run lint'
      }
    }

    stage('Deploy') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
  }
}
