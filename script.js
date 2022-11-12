const nameInput = document.querySelector('#nameInput');
const form = document.querySelector('#userInfoform');
const userTemplate = document.querySelector('#userInfoTemplate').innerHTML;
const userInfoContainer = document.querySelector('#userInfoContainer');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e){
    e.preventDefault();

    const name = nameInput.value;

    if (!name){
        alert('Invalid Value')
        return
    }

    fetch(`https://api.github.com/users/${name}`)
    .then((res) => {
        if (res.ok) {
            return res.json ()
        }
        throw new Error('user does not exist')
    })
    .then((userInfo) => renderUserInfo(userInfo))
    .catch((error) => alert(error.message))
}

function renderUserInfo(userInfo){
    const html = generateTemplate(userInfo);

    userInfoContainer.innerHTML =  html;
}

function generateTemplate(userInfo){
    return userTemplate
    .replace('{{avatar}}', userInfo.avatar_url)
    .replace('{{repos}}', userInfo.public_repos)
    .replace('{{followers}}', userInfo.followers)
    .replace('{{following}}', userInfo.following)
}