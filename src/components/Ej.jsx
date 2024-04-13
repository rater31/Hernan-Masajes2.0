

function MyButton(props) {
    // 1
    const handleClick = () => {
        const btn1 =document.getElementById({id});
        const p =document.getElementById({id});
        const btn2 =document.querySelector('#btn2');
        const p2 =document.querySelector('#texto2');
        const btn3 =document.querySelector('#btn3');
        const p3 =document.querySelector('#texto3');
        
            if  (p?.classList.contains('d-none')) {
                p.classList.remove('d-none');
                p.classList.add('d-block');
                console.log(btn1)
            } else if(p?.classList.contains('d-block')) {
                
                p?.classList.add('hidden-css'); 
               p?.classList.remove('d-block');
               setTimeout(() => {
                p?.classList.add('d-none');
                p?.classList.remove('hidden-css');
               }, 300);
               console.log('entro en elseif')
        
            }
      
    };
    // const handleClick2 =() =>{
    //     const p2 = document.querySelector('#texto2');
    //     if (p2?.classList.contains('d-none')) {
    //         p2.classList.remove('d-none');
    //         p2.classList.add('d-block');
    //         console.log('entro en if')
    //     } else if (p2?.classList.contains('d-block')) {

    //         p2?.classList.add('hidden-css');
    //         p2?.classList.remove('d-block');
    //         setTimeout(() => {
    //             p2?.classList.add('d-none');
    //             p2?.classList.remove('hidden-css');
    //         }, 300);
    //         console.log('entro en elseif')

    //     }
    // }

    // const handleClick3 =() =>{
    //     const p3 = document.querySelector('#texto3');
    //     if (p3?.classList.contains('d-none')) {
    //         p3.classList.remove('d-none');
    //         p3.classList.add('d-block');
    //         console.log('entro en if')
    //     } else if (p3?.classList.contains('d-block')) {

    //         p3?.classList.add('hidden-css');
    //         p3?.classList.remove('d-block');
    //         setTimeout(() => {
    //             p3?.classList.add('d-none');
    //             p3?.classList.remove('hidden-css');
    //         }, 300);
    //         console.log('entro en elseif')

    //     }
    // }

    return (
        <div>
            <div>
                <button onClick={handleClick}>{props.boton}</button>{props.boton}
                {props.texto}
            </div>
            <div>
                {props.boton2}
                {props.texto2}
            </div>
            <div>
                {props.boton3}
                {props.texto3}
            </div>

        </div>
    );
}

export default MyButton;