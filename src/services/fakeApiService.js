// We need https to make http requests to external APIs over HTTPs since we use fakeapi data -> APIs
const https = require('https');

// Now, we define an exported function for it
exports.fetchProducts = function (resultCallback) {
    // setup http request options
    let options = {
        host: "api.escuelajs.co",
        path: "/api/v1/products",
        method: "GET",
    }

    // Create an HTTPs request with provided options above
    // function(res) -> A callback function that gets executed when we receive a response
    https.request(options, function (res) {
        // Just define buffer to store data
        let buffer = "";

        // receive a response
        // The API sends data in chunks instead of all at once
        // Now, each time we receive a chunk, we append it to the buffer
        res.on("data", function (chunk) {
            buffer += chunk;
        });

        // Now, when the process is done
        res.on("end", function () {
            try {
                // Convert to json
                const result = JSON.parse(buffer);
                // Pass the result to the callback
                resultCallback(null, result);

            } catch (error) {
                // Also pass error to callback if error
                resultCallback(error, null);
            }
        })

        // Handle error which occurs before the request is completed
        res.on("error", function (error) {
            resultCallback(error, null);
        });
        // this sends the request
        // without this, the request would not be sent
    }).end();

}