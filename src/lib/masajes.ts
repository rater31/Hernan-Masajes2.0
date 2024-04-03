
export interface ListaMasaje {
    id:string;
    tipo:string;
    title:string;
    contenido:string;
    fondo:string;
}

export const listamasaje: ListaMasaje[] = [
    {
        id:'1',
        tipo:'Masajes Relajantes',
        title:'Masajes Relajantes',
        contenido:'askdjhalksdhlahsdlkjasdlkjahsd',
        fondo:'tarjeta1.jpg',
    },
    {
        id:'2',
        tipo:'Masajes ',
        title:'Masajes Descontracturantes',
        contenido:'askdjhalksdhlahsdlkjasdlkjahsd',
        fondo:"tarjeta2.jpg",
    }
];
