
/**/
console.log("working");

// const members = fetch('../storage')
//     .then(response => {
//         response.json()
//     })
//     .then(details => {
//         return details;
//     });

confirmBtn = document.getElementById('confirm_btn');

const checkMemberInData = () => {
    console.log('user clicked confirm button');
    window.location.href = '/storage';
}

confirmBtn.addEventListener('click', checkMemberInData);