// your code here
document.getElementById('button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    
    // Craft the query string
    const queryString = `name=${name} & year=${year}`;
    
    // Update the URL in the h3 element
    document.getElementById('url').textContent = `https://localhost:8080/   ${queryString}`;
});
