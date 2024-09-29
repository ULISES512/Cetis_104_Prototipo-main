function navigateTo(event, url) {
    event.preventDefault(); 
    document.body.classList.add('transicion'); 
    setTimeout(() => {
        window.location.href = url; 
    }, 500); 
}
