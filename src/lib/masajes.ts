import type { ImageMetadata } from "astro";
import tarjeta1 from "../img/tarjeta1.webp";
import tarjeta2 from "../img/tarjeta2.webp";

export interface MasajeItem {
  titulo: string;
  descripcion: string;
}

export interface ListaMasaje {
  id: string;
  title: string;
  especificaciones: string;
  items: MasajeItem[];
  fondo: ImageMetadata;
}

export const listamasaje: ListaMasaje[] = [
  {
    id: "1",
    title: "Masajes Relajantes",
    especificaciones:
      "Si buscas liberar tensiones causadas por el estrés, el masaje relajante es una excelente opción, con maniobras lentas y profundas.",
    items: [
      {
        titulo: "Masaje Californiano o sensitivo",
        descripcion:
          "Donde se logra relajar el cuerpo con movimientos envolventes y lentos donde se busca contener al consultante, tanto física como mentalmente.",
      },
      {
        titulo: "Masaje Tailandés",
        descripcion:
          "Donde la relajación es el resultado de la combinación de masajes y estiramientos controlados de las cadenas musculares.",
      },
      {
        titulo: "Masaje Lomi Lomi",
        descripcion:
          "Siente cómo tu cuerpo se relaja cuando el masaje fluye de forma suave al ritmo de tu frecuencia energética.",
      },
    ],
    fondo: tarjeta1,
  },
  {
    id: "2",
    title: "Masajes Descontracturantes",
    especificaciones:
      "Pensados para quitar de tu cuerpo contracturas ocasionales con malas posturas corporales y respiración inadecuada.",
    items: [
      {
        titulo: "Masajes Chinos",
        descripcion:
          "Focalizados en movilizar las energías del cuerpo mediante masajes profundos combinados con digitopresión, dando atención a las zonas más comprometidas.",
      },
      {
        titulo: "Masajes Convencionales",
        descripcion:
          "Donde el masaje se realiza de forma profunda y energética, trabajando en las zonas más afectadas.",
      },
    ],
    fondo: tarjeta2,
  },
  {
    id: "3",
    title: "Masajes Deportivos",
    especificaciones:
      "Pensados para deportistas profesionales o aficionados, ayudando a limpiar los músculos del resultado de la exigencia a la que se exponen.",
    items: [
      {
        titulo: "Pre o antes de entrenar o competir",
        descripcion:
          "Donde se realizan masajes con técnicas para preparar el cuerpo para la actividad a desarrollar.",
      },
      {
        titulo: "Durante el entrenamiento",
        descripcion:
          "Si hay un intervalo, el masaje será el adecuado para mantener la musculatura preparada.",
      },
    ],
    fondo: tarjeta1,
  },
  {
    id: "4",
    title: "Masajes Energizantes",
    especificaciones:
      "Pensados para elevar tu energía y que puedas utilizarla en tu vida diaria.",
    items: [
      {
        titulo: "Integrales",
        descripcion:
          "Este tipo de masajes abarca todas las inserciones musculares con el objeto de lograr relajar y, a su vez, elevar la energía.",
      },
      {
        titulo: "Integrales intensivos",
        descripcion:
          "Similares a los anteriores pero más intensos, con movilizaciones que logran distender y, a su vez, energizar tu cuerpo.",
      },
    ],
    fondo: tarjeta2,
  },
  {
    id: "5",
    title: "Masajes Modeladores y Reductores",
    especificaciones:
      "Son el complemento (sumado a actividad física y alimentación adecuada) ideal para marcar tu figura, disminuyendo algunas zonas y elevando otras.",
    items: [],
    fondo: tarjeta1,
  },
  {
    id: "6",
    title: "Masajes Especiales",
    especificaciones:
      "Pensados para consultantes a partir de la segunda sesión, donde el masaje es el resultado de la combinación de variadas técnicas y estilos conforme al fluir de la energía del consultante y el masajista, logrando contención, relajación y altos niveles de energía.",
    items: [],
    fondo: tarjeta2,
  },
];
