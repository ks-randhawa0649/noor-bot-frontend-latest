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
        await axios.post(`https://rag-project-chatbot-v1-3-f52fcd0b4a68.herokuapp.com/api/query`, {'query': query}, axiosConfig)
            .then(res => {
                response = res.data.response;
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
                'Content-Type': 'multipart/form-data'
            }
        };
        const formData = new FormData();
        formData.append('file', file)
        await axios.post(`https://rag-project-chatbot-v1-3-f52fcd0b4a68.herokuapp.com/api/upload`, formData, axiosConfig)
            .then(res => {
                response = res.data.message;
                return response;
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
