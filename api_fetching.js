const api_url = 'dfda56122d04af1b23790dd7d2ffc801';

fetch(api_url)
    .then(response => {
        if(!response.ok){
            throw new Error(`HTTP erro ! Status: ${response.status}`);
        }
        return response.json();
    })

    .then(data => {
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    });
