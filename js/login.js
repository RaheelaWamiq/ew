document.addEventListener('DOMContentLoaded', function() {
      const loginLink = document.getElementById('loginLink');
        const loginOverlay = document.getElementById('loginOverlay');
        const signupOverlay = document.getElementById('signupOverlay');
        const closeButtonSignup = document.getElementById('closeButtonSignup');
        const signupLinkInLogin = document.getElementById('signupLinkInLogin');
        const loginLinkInSignup = document.getElementById('loginLinkInSignup');

        loginLink.addEventListener('click', function(event) {
            event.preventDefault();
            loginOverlay.style.display = 'block';
        });

        signupLinkInLogin.addEventListener('click', function(event) {
            event.preventDefault();
            loginOverlay.style.display = 'none';
            signupOverlay.style.display = 'block';
        });

        loginLinkInSignup.addEventListener('click', function(event) {
            event.preventDefault();
            signupOverlay.style.display = 'none';
            loginOverlay.style.display = 'block';
        });

        loginOverlay.addEventListener('click', function(event) {
            if (event.target === loginOverlay) {
                loginOverlay.style.display = 'none';
            }
        });

        signupOverlay.addEventListener('click', function(event) {
            if (event.target === signupOverlay) {
                signupOverlay.style.display = 'none';
            }
        });
});