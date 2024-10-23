function opacity1() {
    const f1 = document.getElementById('ARQ1');
    const f2 = document.getElementById('ARQ2');

        f1.style.opacity = 0;
        f2.style.opacity = 1;
        
        setTimeout(() => {
            f1.style.display = 'none';
            f2.style.display = 'flex'; 
        }, 500); 
}
function resturaring(){
    const f1 = document.getElementById('ARQ1');
    const f2 = document.getElementById('ARQ2');

        f1.style.opacity = 1;
        f2.style.opacity = 0;
        
        setTimeout(() => {
            f1.style.display = 'flex';
            f2.style.display = 'none'; 
        }, 500); 
    }
function tresDvisibility(){
   
    const button_desactivar = document.getElementById("btn-quit-3d");
    const modelo3d = document.getElementById('MODEL3D');
    const seccion = document.getElementById('sp2')

    modelo3d.style.opacity='1';    
    button_desactivar.style.opacity="1";
    button_desactivar.style.display="flex";
    modelo3d.style.display='flex';
    seccion.scrollIntoView({ behavior: 'smooth' });
}
function displaynotresd(){
   
    const button_desactivar = document.getElementById("btn-quit-3d");
    const modelo3d = document.getElementById('MODEL3D');

    modelo3d.style.opacity='0';    
    button_desactivar.style.opacity="0";
    button_desactivar.style.display="none";
    modelo3d.style.display='none';
}