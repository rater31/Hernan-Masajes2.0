
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
    clase:string;
    clase2:string;
    clase3:string;

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
        clase:'btn-per',
        clase2:'btn-per',
        clase3:'btn-per',

    },
    {
        id: '2',
        title: 'Masajes Descontracturantes',
        especificaciones: 'Pensados para quitar de tu cuerpo contracturas ocacionales con malas posturas corporales y respiración inadecuada.',
        contenido1: 'Masajes Chinos',
        descripcion1: 'Focalizados en movilizar las energías del cuerpo mediante masajes profundos conbinados con digitopresión, dando atención a las zonas más comprometidas',
        contenido2: 'Masajes Convencionales',
        descripcion2: 'Donde el masaje se realiza de forma profunda y energética, trabajando en las zonas más afectadas',
        fondo: "tarjeta2.jpg",
        contenido3: "",
        clase:'btn-per',
        clase2:'btn-per',
        clase3:'',
        descripcion3: ""
    },
    {
        id: '3',
        title: 'Masajes Deportivos',
        especificaciones: 'Pensado para deportistas profesionales o aficionados. Ayudando a limpiar los músculos del resultado de la exigencia a la que se exponen.',
        contenido1: 'Pre o antes de entrenar o competir',
        descripcion1: 'Donde se realizan masajes con técnicas para preparar el cuerpo para la actividad a desarrollar.',
        contenido2: 'Durante el entrenamiento',
        descripcion2: 'si hay intermedio; el masaje será el adecuado para mantener',
        contenido3: '',
        clase: 'btn-per',
        fondo: "tarjeta1.jpg",
        descripcion3: "",
        clase2: "btn-per",
        clase3: ""
    },
    {
        id: "4",
        title: "Masajes Energizantes",
        especificaciones: "Pensados para elevar tu energía y que puedas utilizarla en tu vida diaria.",
        contenido1: "Integrales",
        descripcion1: " éste tipo de masajes abarca todas las inserciones musculares con el objeto de lograr relajar y a su vez elevar la energía.",
        clase: "btn-per",
        contenido2: "Integrales (l)",
        descripcion2: " similares a los anteriores pero más intensos, con movilizaciones que logran distender y a su vez energizar tu cuerpo.",
        clase2: "btn-per",

        fondo: 'tarjeta1.jpg',
        contenido3: "",
        descripcion3: "",
        clase3: ""
    },
    {
        id: "5",
        title: "Masajes Modeladores - Reductores",
        especificaciones: "son el complemento (sumado a actividad física y alimentación adecuada) ideal para marcar tu figura, disminuyendo algunas y elevando otras.",
        contenido1: "",
        contenido2: "",
        contenido3: "",
        descripcion1: "",
        descripcion2: "",
        descripcion3: "",
        clase: "",
        clase2: "",
        clase3: "",
        fondo: "tarjeta1.jpg"
    },
    {
        id: "6",
        title: "Masajes Especiales",
        especificaciones: "pensados para consultantes a partir de la segunda sesión, donde el masaje es el resultado de la combinación de variadas técnicas y estilos conforme al fluir de la energía del consultante - masajista; logrando contención, relajación, y altos niveles de energía.",
        contenido1: "",
        contenido2: "",
        contenido3: "",
        descripcion1: "",
        descripcion2: "",
        descripcion3: "",
        clase: "",
        clase2: "",
        clase3: "",
        fondo: "tarjeta1.jpg"
    }
];
