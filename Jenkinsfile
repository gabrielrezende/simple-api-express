pipeline {
    agent any
    tools {nodejs "nodejs-server"}
    environment {
        CI = 'true'
    }
    stages {
        // stage("Instalando depedências") {
        //     steps {
        //         script {
        //             def nodeHome = tool 'nodejs-server';
        //             sh "echo ${nodeHome}"
        //         }
        //         nodejs(nodeJSInstallationName: 'nodejs-server'){
        //             sh "npm install"
        //         }
        //     }
        // }
        // stage("Realizando testes unitários") {
        //     steps {
        //         nodejs(nodeJSInstallationName: 'nodejs-server'){
        //             sh "npm test"
        //         }
        //     }
        // }
        stage('Scanendo qualidade do código') {
            steps {
                script {
                    def git_commiter_name = sh ( script: "git show -s --pretty=\"%ce\" ${GIT_COMMIT}", returnStdout: true ).trim()
                    def token_sonar = sh ( script: "/opt/sonar-tokens/tokens.sh admin", returnStdout: true ).trim()
                    echo "${token_sonar}"
                    echo "${git_commiter_name}"
                    def scannerHome = tool 'sonarqubescanner';
                    // withSonarQubeEnv('sonarqubeserver') {
                    //     sh "${tool("sonarqubescanner")}/bin/sonar-scanner -Dsonar.login=226b26692118a8dd4fe8dd7c2d908307c40c6095"
                    // }
                }
            }
        }
        // stage("Verificando qualidade do código") {
        //     steps {
        //       timeout(time: 1, unit: 'HOURS') {
        //         waitForQualityGate abortPipeline: true
        //       }
        //     }
        // }
    }
}