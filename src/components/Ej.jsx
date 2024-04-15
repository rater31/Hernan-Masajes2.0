

function MyButton(props) {

    // const handleClick = () => {
    //     const btn1 =document.getElementById('btn11');
    //     const text1 =document.getElementById('texto11');
    //         btn1.addEventListener('click',() =>{
    //             if  (text1?.classList.contains('d-none')) {
    
    //                 text1.classList.remove('d-none');
    //                 text1.classList.add('d-block');
    
    //             } else if(text1?.classList.contains('d-block')) {
                    
    //                 text1?.classList.add('hidden-css'); 
    //                text1?.classList.remove('d-block');
    
    //                setTimeout(() => {
    //                 text1?.classList.add('d-none');
    //                 text1?.classList.remove('hidden-css');
    //                }, 300);
    //             }
      
    // });
    // // lo que podria hacer seria una function en la cual le asigno el atributo click por separado pero que se ejecute todo junto, eso no creo que sea buena idea   
    // }
    const btnClick1 = () =>{
        const btn1 =  document.getElementById('btn11');
        const text1 = document.getElementById('texto11');
        
        if  (text1?.classList.contains('d-none')&& btn1.id === 'btn11' ) {
    
            text1.classList.remove('d-none');
            text1.classList.add('d-block');

        } else if(text1?.classList.contains('d-block')) {
            
            text1?.classList.add('hidden-css'); 
           text1?.classList.remove('d-block');

           setTimeout(() => {
            text1?.classList.add('d-none');
            text1?.classList.remove('hidden-css');
           }, 300);
        }


    };

    return (

                <>
                
                <span onClick={btnClick1} >{props.boton}</span>
                
                {props.texto}
  
                </>

    );
}

export default MyButton;