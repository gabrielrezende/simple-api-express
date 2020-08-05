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
                    sh "printenv"
                    sh "echo $GIT_BRANCH"
                    // def author = sh script: "git show -s --pretty=\"%an <%ae>\" ${GIT_COMMIT}", returnStdout: true
                    // sh "echo ${author}"
                    def git_author_email = sh ( script: 'git --no-pager show -s --format=\'%ae\'', returnStdout: true ).trim()
                    def git_author_name = sh ( script: 'git --no-pager show -s --pretty=\"%an <%ae>\'', returnStdout: true ).trim()
                    echo "${git_author_email}"
                    echo "${git_author_name}"
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