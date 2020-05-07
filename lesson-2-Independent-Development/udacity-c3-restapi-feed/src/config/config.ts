const username=process.env.POSTGRES_USERNAME;
const password=process.env.POSTGRES_PASSWORD;
const database=process.env.POSTGRES_DATABASE;
const host=process.env.POSTGRES_HOST;
const dialect=process.env.POSTGRES_DIALECT;
const profile=process.env.POSTGRES_AWS_PROFILE;
const region=process.env.POSTGRES_AWS_REGION;
const bucket=process.env.POSTGRES_AWS_BUCKET;
const secret=process.env.JWT_SECRET;
export const config = {
  "dev": {
    "username": username,
    "password": password,
    "database": database,
    "host": host,
    "dialect": dialect,
    "aws_region":region ,
    "aws_profile":profile ,
    "aws_media_bucket":bucket
  },
  "jwt":{
    "secret":secret
  },

  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
