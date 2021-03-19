#!/bin/bash

gcloud builds submit --config cloudbuild.yaml --substitutions=_VERSION="v1.0"
