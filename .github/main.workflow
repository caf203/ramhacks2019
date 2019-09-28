workflow "New workflow" {
  on = "issues"
  resolves = ["scp"]
}

action "setup auth" {
  uses = "actions/gcloud/cli@6a43f01e0e930f639b90eec0670e88ba3ec4aba3"
  runs = "gcloud config set project ramhacks"
  secrets = ["GCLOUD_AUTH", "GITHUB_TOKEN"]
}

action "scp" {
  uses = "actions/gcloud/cli@6a43f01e0e930f639b90eec0670e88ba3ec4aba3"
  needs = ["setup auth"]
  secrets = ["GCLOUD_AUTH", "GITHUB_TOKEN"]
  runs = "gcloud compute scp --recurse . realestategame:~/ramhacks2019/"
}
