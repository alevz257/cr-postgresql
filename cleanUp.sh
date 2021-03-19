#!/bin/bash

gcloud beta api-gateway gateways delete gateway-1 --location=asia-east1

gcloud beta api-gateway api-configs delete cloudrun-1 --api=api-cloudrun-db

gcloud beta api-gateway api-configs delete cloudrun-2 --api=api-cloudrun-db


