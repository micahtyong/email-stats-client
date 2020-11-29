const AWS = require('aws-sdk')

const awsConfig = {
  region: 'us-east-1',
  endpoint: 'http://dynamodb.us-east-1.amazonaws.com',
  accessKeyId: process.env.VUE_APP_AWS_DB_ACCESS_KEY,
  secretAccessKey: process.env.VUE_APP_AWS_DB_SECRET_KEY
}
AWS.config.update(awsConfig)

const docClient = new AWS.DynamoDB.DocumentClient()
/**
 * Fetches gmail data according to some range
 * Formats for frontend client.
 */
export const rangeScan = function (email, start, end) {
  const params = {
    TableName: 'gmail-stats',
    KeyConditionExpression: 'id = :id AND #t between :start AND :end',
    ExpressionAttributeNames: {
      '#t': 'time'
    },
    ExpressionAttributeValues: {
      ':id': email,
      ':start': start,
      ':end': end
    }
  }
  return new Promise((resolve, reject) => {
    docClient.query(params, function (err, data) {
      if (err) return reject('gmail-stats::rangeScan::error - ' + err)
      if (
        !data.Items ||
        data.Items.length === 0 ||
        !data.Items[0].hasOwnProperty('id')
      )
        return reject('gmail-stats::rangeScan::keyNotFound')
      // Step 0: Initialize variables
      const email = data.Items[0].id
      const times = []
      const toMeFromGmail = []
      const toMeFromNonGmail = []
      const fromMeToGmail = []
      const fromMeToNonGmail = []

      // Step 1: Extract
      for (const gmailItem of data.Items) {
        times.push(gmailItem.time)
        toMeFromGmail.push(gmailItem.toMeFromGmail)
        toMeFromNonGmail.push(gmailItem.toMeFromNonGmail)
        fromMeToGmail.push(gmailItem.fromMeToGmail)
        fromMeToNonGmail.push(gmailItem.fromMeToNonGmail)
      }

      // Step 2: Resolve!
      resolve({
        email,
        times,
        toMeFromGmail,
        toMeFromNonGmail,
        fromMeToGmail,
        fromMeToNonGmail
      })
    })
  })
}
