function opacity1() {
    const f1 = document.getElementById('ARQ1');
    const f2 = document.getElementById('ARQ2');
    
    if (f1.style.display !== 'none') {
        f1.style.display = 'none'; 
        f1.style.opacity = 0;
        f2.style.display = 'flex'; 
        f2.style.opacity = 1;
        
    } else {
        f1.style.display = 'flex'; 
        f2.style.display = 'none'; 
        f2.style.opacity = 0;
        f1.style.opacity = 1;
    }
}
