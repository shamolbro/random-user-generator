const api = 'https://randomuser.me/api/?results=1';

function loadUser() {
    fetch(api)
        .then(res => res.json())
        .then(data => showUser(data.results[0]))
}


leadUser()


function showUser(user) {

    // selection
    const display = document.getElementById('display')
    const profile = document.getElementById('profile')
    const intro = document.getElementById('intro')
        // inner info
    profile.src = `${user.picture.large}`
    display.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    intro.innerText = `Hi my name is`;

    console.log(user);

    // name change

    document.getElementById('name').addEventListener('mouseover', function() {
        display.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
        intro.innerText = `Hi, my name is`;
    })

    // change email
    document.getElementById('email').addEventListener('mouseover', function() {
        display.innerText = `${user.email}`;
        intro.innerText = `my email adress`;
    })

    // date change

    document.getElementById('dob').addEventListener('mouseover', function() {
        display.innerText = `${user.dob.date.slice(0, 10)}`;
        intro.innerText = `My brithday`;
    })

    // phone change
    document.getElementById('phone').addEventListener('mouseover', function() {
        display.innerText = `${user.phone}`;
        intro.innerText = `My phone number`;
    })

    // adress change
    document.getElementById('address').addEventListener('mouseover', function() {
        display.innerText = `${user.location.country}`;
        intro.innerText = `My adress is`;
    })

    // password change
    document.getElementById('password').addEventListener('mouseover', function() {
        display.innerText = `${user.login.password}`;
        intro.innerText = `My password is`;
    })




}