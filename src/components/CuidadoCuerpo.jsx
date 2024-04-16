function MyButton(props) {

    const btnClick1 = (e) =>{
        
        const ids= e.target.id

        const text1 = document.getElementById('texto11');
        const text2 = document.getElementById('texto12');
        const text3 = document.getElementById('texto13');
        const text4 = document.getElementById('texto14');

            
        if (ids === 'btn11'){

            if  (text1?.classList.contains('d-none') ) {
        
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
        }else if (ids === 'btn12'){
            if  (text2?.classList.contains('d-none') ) {
        
                text2.classList.remove('d-none');
                text2.classList.add('d-block');
    
            } else if(text2?.classList.contains('d-block')) {
                
                text2?.classList.add('hidden-css'); 
               text2?.classList.remove('d-block');
    
               setTimeout(() => {
                text2?.classList.add('d-none');
                text2?.classList.remove('hidden-css');
               }, 300);
            }
        }else if(ids === 'btn13'){
            if  (text3?.classList.contains('d-none') ) {
        
                text3.classList.remove('d-none');
                text3.classList.add('d-block');
    
            } else if(text3?.classList.contains('d-block')) {
                
                text3?.classList.add('hidden-css'); 
               text3?.classList.remove('d-block');
    
               setTimeout(() => {
                text3?.classList.add('d-none');
                text3?.classList.remove('hidden-css');
               }, 300);
            }

        }else if(ids === 'btn14'){
            if  (text4?.classList.contains('d-none') ) {
        
                text4.classList.remove('d-none');
                text4.classList.add('d-block');
    
            } else if(text4?.classList.contains('d-block')) {
                
                text4?.classList.add('hidden-css'); 
               text4?.classList.remove('d-block');
    
               setTimeout(() => {
                text4?.classList.add('d-none');
                text4?.classList.remove('hidden-css');
               }, 300);
            }

        }
    
    };

    return (

                <>
                
                <span onClick={btnClick1} >{props.boton1}</span>
                
                {props.texto1}
                <span onClick={btnClick1} >{props.boton2}</span>
                
                {props.texto2}
                <span onClick={btnClick1} >{props.boton3}</span>
                
                {props.texto3}
  
                </>

    );
}

export default MyButton;