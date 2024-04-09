const btn =document.getElementById('btn');
    const p =document.querySelector('#texto');
    const btn2 =document.querySelector('#btn2');
    const p2 =document.querySelector('#texto2');
    const btn3 =document.querySelector('#btn3');
    const p3 =document.querySelector('#texto3');
    btn?.addEventListener("click", ()=>{
        if  (p?.classList.contains('d-none')) {
            p.classList.remove('d-none');
            p.classList.add('d-block');
        } else {
            
            p?.classList.add('hidden-css'); 
           p?.classList.remove('d-block');
           setTimeout(() => {
            p?.classList.add('d-none');
            p?.classList.remove('hidden-css');
           }, 300);
        }})
        btn2?.addEventListener("click", ()=>{
            if  (p2?.classList.contains('d-none')) {
                p2.classList.remove('d-none');
            } else {
               p2?.classList.add('d-none');  
               p2?.classList.remove('d-block');
    
            }
        })
        btn3?.addEventListener("click", ()=>{
            if  (p3?.classList.contains('d-none')) {
                p3.classList.remove('d-none');
            } else {
               p3?.classList.add('d-none');  
            }
        })