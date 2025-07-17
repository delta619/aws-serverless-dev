exports.process = async (event) => {
    console.log("S3 Event received:", JSON.stringify(event, null, 2));

    // Example: get bucket name and object key from event
    const record = event.Records[0];
    const bucketName = record.s3.bucket.name;
    const objectKey = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

    console.log(`New object uploaded: ${objectKey} in bucket: ${bucketName}`);

    // Perform your processing here, for example, reading the file, resizing images, etc.

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Successfully processed ${objectKey} in ${bucketName}`,
        }),
    };
};
