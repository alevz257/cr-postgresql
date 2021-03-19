#!/bin/bash

gcloud api-gateway gateways create gateway-1 \
  --api=api-cloudrun-db --api-config=cloudrun-1 \
  --location=asia-east1 --project=alevz-project-1

gcloud api-gateway gateways describe gateway-1 \
  --location=asia-east1 --project=alevz-project-1
