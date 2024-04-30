function MyButton(props) {

 const click = (e) =>{
    const lista = document.getElementById('lista');
    // const hambur = document.getElementById('hamburg');
    
    if (lista.classList.contains('hidden')) {
        lista.classList.remove('hidden')
    }else{
        lista.classList.add('hidden')
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