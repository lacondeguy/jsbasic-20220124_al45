function makeFriendsList(friends) {
let data = document.createElement('ul');
    for (let item of friends) {
        let str = document.createElement('li');
        str.innerHTML += `${item.firstName} ${item.lastName}`;
        data.append(str);
    }
return data;
}

