let users = document.querySelector('.users')

async function getUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments')
        let data = await response.json()
        data.forEach((item) => {
            let usersItem = document.createElement('div')
            usersItem.classList.add('users__item')
            let h2 = document.createElement('h2')
            let p = document.createElement('p')
            h2.textContent = 'Коментарий: ' + item.name
            p.innerHTML = `<a href="${item.email}"> Пользователь: ${item.email}</a>`
            
            usersItem.append(h2)
            usersItem.append(p)
            
            users.append(usersItem)
            
        })
    } catch (error) {
        console.log('Ошибка произошла при получении пользователй ' + error);
    }
}
getUsers()

