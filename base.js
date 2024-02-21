document.addEventListener("DOMContentLoaded", function () {
    const userNameInput = document.querySelector("#userNameInput");
    const getUserButton = document.querySelector("#getUserButton");
    const userCity = document.querySelector("#userCity");
    const userNumber = document.querySelector("#userNumber");
    const userEmail = document.querySelector("#userEmail");

    getUserButton.addEventListener("click", function () {
        const userName = userNameInput.value.trim().toLowerCase();
        if (!userName) {
            alert("Please enter a valid username");
            return;
        }

        fetch("data.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(users => {
                const user = users.find(u => u.username.toLowerCase() === userName);
                if (user) {
                    userCity.textContent = user.address.city;
                    userNumber.textContent = user.phone;
                    userEmail.textContent = user.email;
                } else {
                    userCity.textContent = "City not found";
                    userNumber.textContent = "Phone not found";
                    userEmail.textContent = "Email not found";
                }
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    });
});
