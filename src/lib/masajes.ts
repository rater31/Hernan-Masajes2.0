
export interface ListaMasaje {
    id:string;
    tipo:string;
    title:string;
    sub:string;
    sub2:string;
    sub3:string;
    sub4:string;
    contenido:string;
    fondo:string;
}

export const listamasaje: ListaMasaje[] = [
    {
        id:'1',
        tipo:'Masajes',
        title:'Masajes Relajantes',
        sub:'masajes californianos',
        sub2:'masajes Tailandes',
        sub3:'masajes Lomi Lomi',
        sub4:'',
        contenido:'askdjhalksdhlahsdlkjasdlkjahsd',
        fondo:'tarjeta1.jpg',
    },
    {
        id:'2',
        tipo:'Masajes ',
        title:'Masajes Descontracturantes',
        sub:'',
        sub2:'masajes californianos',
        sub3:'masajes californianos',
        sub4:'masajes californianos',
        contenido:'askdjhalksdhlahsdlkjasdlkjahsd',
        fondo:"tarjeta2.jpg",
    }
];
