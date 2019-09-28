workflow "New workflow" {
  on = "issues"
  resolves = ["scp"]
}

action "Setup Google Cloud Authentication" {
  uses = "actions/gcloud/auth@master"
  secrets = ["GCLOUD_AUTH"]
}

action "set project" {
  uses = "actions/gcloud/cli@6a43f01e0e930f639b90eec0670e88ba3ec4aba3"
  needs = ["Setup Google Cloud Authentication"]
  runs = "gcloud config set project ramhacks"
  secrets = ["GCLOUD_AUTH", "GITHUB_TOKEN"]
}

action "scp" {
  uses = "actions/gcloud/cli@6a43f01e0e930f639b90eec0670e88ba3ec4aba3"
  needs = ["set project"]
  secrets = ["GCLOUD_AUTH", "GITHUB_TOKEN"]
  runs = "gcloud compute scp --recurse . root@realestategame:/home/caf203/ramhacks2019/ --zone us-central1-a"
}
