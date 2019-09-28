workflow "New workflow" {
  resolves = ["deploy please"]
  on = "issues"
}

action "deploy please" {
  uses = "actions/gcloud/cli@6a43f01e0e930f639b90eec0670e88ba3ec4aba3"
  secrets = ["GCLOUD_AUTH"]
  runs = "gcloud compute scp --recurse . realestategame:~/ramhacks2019/"
}
