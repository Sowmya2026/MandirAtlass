document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }
  
    // Submit the form
    this.submit();
  });
  