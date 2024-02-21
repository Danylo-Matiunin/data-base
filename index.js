const apiUrl = 'data.json';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    const userListElement = document.querySelector('.usersList');
    if (!userListElement) {
      console.error('Error: Unable to find the usersList element');
      return;
    }

    userListElement.innerHTML = '';

    userData.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.username; 
      userListElement.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
