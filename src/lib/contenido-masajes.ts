export interface ContenidoMasajes {
    id:string;
    tipo:string;
    title:string;
    contenido:string;
}

export const contenidomasaje: ContenidoMasajes[] = [
    {
        id:'1',
        tipo:'Masajes Relajantes',
        title:'Masajes Convencional',
        contenido:'tarjeta1.jpg',
    },
    {
        id:'2',
        tipo:'Masajes Descontracturantes ',
        title:'Masajes Descontracturantes',
        contenido:"tarjeta2.jpg",
    }
];


export const allTipo = {[
    ...contenidomasaje
  ]}
