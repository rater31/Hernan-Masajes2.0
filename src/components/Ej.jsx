

function MyButton(props) {

    const btnClick1 = (e) =>{
        
        const ids= e.target.id

        const text1 = document.getElementById('texto11');
        const text2 = document.getElementById('texto12');
        const text3 = document.getElementById('texto13');

        console.log(ids)

        // console.log(id)
        if (ids === '1'){

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
        }elseif (ids === '2'){
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
        }else {
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