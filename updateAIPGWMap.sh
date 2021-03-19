#!/bin/bash

gcloud beta api-gateway gateways update gateway-1 \
  --api=api-cloudrun-db --api-config=cloudrun-2 \
  --location=asia-east1 --project=alevz-project-1
