/* eslint-disable */
// ^ Deliberately tell ESLint to ignore this file as the long lines actually make this slightly easier to parse than the newlines it adds otherwise.
const npsUtils = require("nps-utils");

module.exports = {
  scripts: {
    default: "nps dev",

    dev: {
      default: "nps dev.launch",

      launch: "nps dev.start; sleep 3; open http://localhost:3001",

      start:
        "nps dev.stop; docker-compose -f docker-compose.dev.yml up -d --build --force-recreate",

      stop: "docker-compose -f docker-compose.dev.yml down --remove-orphans"
    },

    prod: {
      default: "nps prod.launch",

      launch: "nps prod.start; sleep 3; open http://localhost:80",

      start:
        "nps prod.stop; docker-compose -f docker-compose.prod.yml up -d --build --force-recreate",

      stop: "docker-compose -f docker-compose.prod.yml down --remove-orphans"
    },
    kube: {
      default: "nps kube.launch",

      launch: "nps kube.run; sleep 3; open http://localhost:30001",

      //build and image from Dockerfile firs
      build: "docker build -t test-prod -f docker-prod.Dockerfile .",
      //spin up kubernetes deployment
      run: "kubectl apply -f kubernetes-compose.yaml",

      stop: "kubectl delete -f kubernetes-compose.yaml"
    }
  }
};
