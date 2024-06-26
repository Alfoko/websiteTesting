document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    
    if (window.innerWidth <= 768) {
        container.innerHTML += '<p>You are using a mobile device.</p>';
    } else {
        container.innerHTML += '<p>You are using a PC or a larger screen device.</p>';
    }
    
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            container.innerHTML = '<h1>Welcome to the Responsive Webpage</h1><p>This content will change based on the device you are using.</p><p>You are using a mobile device.</p>';
        } else {
            container.innerHTML = '<h1>Welcome to the Responsive Webpage</h1><p>This content will change based on the device you are using.</p><p>You are using a PC or a larger screen device.</p>';
        }
    });
});
