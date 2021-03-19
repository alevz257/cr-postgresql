#!/bin/bash

gcloud api-gateway api-configs create cloudrun-2 \
  --api=api-cloudrun-db --openapi-spec=openapi2-run.yaml \
  --project=alevz-project-1 --backend-auth-service-account=serverless-dev@alevz-project-1.iam.gserviceaccount.com
