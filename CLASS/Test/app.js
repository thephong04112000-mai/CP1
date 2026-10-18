const users = [{ id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];

function updateUser(id, newName) {
    users.forEach(user => {
        if (user.id = id){
            user.name = newName
        }
    });
}

updateUser(2,'Charlie');
console.log(users)