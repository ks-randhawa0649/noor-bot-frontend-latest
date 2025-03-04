import axios from "axios";

    const FetchResponse = async(query) =>{
        let response = '';
        if(query ==  null || query.trim() == '')
            response = 'Please provide a query to proceed';
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        await axios.post(`https://99pu1c9eml.execute-api.ca-central-1.amazonaws.com/query`, {'query': query}, axiosConfig)
            .then(res => {
                response = res.data.answer;
            })
            .catch(error =>{
                if (error.response) {
                    // The server responded with a status code that falls out of the range of 2xx
                    console.error('Response error data:', error.response.data);
                    console.error('Response error status:', error.response.status);
                    console.error('Response error headers:', error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('Request error:', error.request);
                } else {
                    // Something else happened during the setup of the request
                    console.error('Error message:', error.message);
                }
                console.error('Error config:', error.config);
                response = `Something went wrong : ${error} [ERROR CODE - BQ]`
            })
        return response;
    }

    const UploadPDF = async(file) =>{
        let response = '';
        if(file ==  null)
            response = 'Please upload a file to proceed';
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        await axios.post(`https://99pu1c9eml.execute-api.ca-central-1.amazonaws.com/upload`, {'files': {'file':file}}, axiosConfig)
            .then(res => {
                response = res.data.answer;
            })
            .catch(error =>{
                if (error.response) {
                    // The server responded with a status code that falls out of the range of 2xx
                    console.error('Response error data:', error.response.data);
                    console.error('Response error status:', error.response.status);
                    console.error('Response error headers:', error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('Request error:', error.request);
                } else {
                    // Something else happened during the setup of the request
                    console.error('Error message:', error.message);
                }
                console.error('Error config:', error.config);
                response = `Something went wrong : ${error} [ERROR CODE - BQ]`
            })
        return response;
    }

export {FetchResponse,UploadPDF};