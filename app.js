const req = new XMLHttpRequest();
req.open('GET','https://jsonplaceholder.typicode.com/users');
req.responseType = "json";
req.onload = function() {
    emails = [];
    for (const person of req.response) {
        emails.push(person.email);
    }
    emails.sort();
    httpemail = document.getElementById("emails");
    httpemail.innerHTML = emails.join("<br>");
};
req.send();

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'get'
}).then(function(response){
    response.json().then(function(users){
        usernames = [];
        for (const user of users){
            usernames.push(user.username);
        }
        usernames.sort(function(a, b){return a.length - b.length});
        httpusername=document.getElementById("usernames");
        httpusername.innerHTML = usernames.join("<br>");
    })
});