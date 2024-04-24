    const form = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    const usernameErrorIcon = document.getElementById('usernameErrorIcon');
    const takenUsernames = ['john', 'jane', 'bob'];

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const username = usernameInput.value.toLowerCase();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      let hasError = false;

      // Check if any of the required fields are empty
      if (name === "" || username === "" || email === "" || password === "") {
        alert("Please fill out all required fields.");
        hasError = true;
      }

      // Check if username is taken
      if (takenUsernames.includes(username)) {

        usernameError.style.display = 'block';
        usernameErrorIcon.style.display = 'inline-block';

        hasError = true;

      } else {
        usernameError.style.display = 'none';
        usernameErrorIcon.style.display = 'none';
      }

      if (!hasError) {
        // Redirect to the new page if no error
        window.location.href = "profile.html";
      }
    });
