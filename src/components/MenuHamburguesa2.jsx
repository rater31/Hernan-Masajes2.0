function MyButton(props) {

 const click = (e) =>{
    const lista = document.getElementById('lista');
    // const hambur = document.getElementById('hamburg');
    
    if (lista.classList.contains('hidden-css')) {
        lista.classList.remove('hidden-css')
        lista.classList.add('d-block')
    }else{
        lista.classList.add('hidden-css')
    }
  
 }

    return (
    <>
       <span onClick={click}>
        {props.div} 

        </span>
    </>

    );
}

export default MyButton;