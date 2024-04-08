
export interface ListaMasaje {
    id:string;
    title:string;
    especificaciones:string;
    contenido1:string;
    contenido2:string;
    contenido3:string;
    descripcion1:string;
    descripcion2:string;
    descripcion3:string;
    fondo:string;
}

export const listamasaje: ListaMasaje[] = [
    {
        id:'1',
        title:'Masajes Relajantes',
        especificaciones:'si buscas liberar tensiones causadas por el estrés, el masaje relajante es una excelente opción; con maniobras lentas y profundas.',
        contenido1:'Masaje Californiano o sensitivo',
        descripcion1:'Donde se logra relajar el cuerpo con movimientos envolventes y lentos donde se busca contener al consultante, tanto física como metalmente',
        fondo:'tarjeta1.jpg',
        contenido2:'Masajes Tailandés',
        descripcion2:'Donde la relajación es el resultado de la conbinación de masajes y estiramientos controlados de las cadenas musculares',
        contenido3:'Masaje Lomi Lomi ',
        descripcion3:'Siente como tu cuerpo se relaja cuando el masaje fluye de forma suave al ritmo de tu frecuencia energética',
    },
    {
        id:'2',
        title:'Masajes Descontracturantes',
        especificaciones:'Pensados para quitar de tu cuerpo contracturas ocacionales con malas posturas corporales y respiración inadecuada.',
        contenido1:'Masajes Chinos',
        descripcion1:'Focalizados en movilizar las energías del cuerpo mediante masajes profundos conbinados con digitopresión, dando atención a las zonas más comprometidas',
        contenido2:'Masajes Convencionales',
        descripcion2:'Donde el masaje se realiza de forma profunda y energética, trabajando en las zonas más afectadas',
        fondo:"tarjeta2.jpg",
    },
    {
        id:'3',
        title:'Masajes Deportivos',
        especificaciones:'Pensado para deportistas profesionales o aficionados. Ayudando a limpiar los músculos del resultado de la exigencia a la que se exponen.',
        contenido1:'Pre o antes de entrenar o competir',
        descripcion1:'Donde se realizan masajes con técnicas para preparar el cuerpo para la actividad a desarrollar.',
        contenido2:'Durante el entrenamiento',
        descripcion2:'si hay intermedio; el masaje será el adecuado para mantener',
        contenido3:'',
        fondo:"tarjeta1.jpg",
    }
];
