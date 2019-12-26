# Cloud Functions

We use Netlify Functions to manage our serverside functionality.

TODO: Update commands for Netlify Functions
## Prerequisites 

- Get deploy access to Google Cloud Functions on GCP project with ID `oreon-website`.
- Follow [instructions to install `gcloud` CLI](https://cloud.google.com/sdk/gcloud/)
- Set the default GCF region to `europe-west1` by running `gcloud config set functions/region europe-west1`  

## Deploying

From this directory run the command:
`gcloud functions deploy ${function_name} --entry-point ${entry_function_name}`

- `${function-name}` is the name of the function in Google Cloud Functions
- `${entry_function_name}` is the name of the function that should be called when making a request to this Google Cloud Function.  
This can be omitted in case it's the same as `${function_name}`

E.g. to deploy a function w/ the name `contact-form-email` and with entry point `sendEmail`, you'd execute the following command:
`gcloud functions deploy contact-form-email --entry-point sendEmail --region europe-west1 --trigger-http`
