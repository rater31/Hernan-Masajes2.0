export interface NavLink {
  href: string;
  label: string;
  cta?: boolean;
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

export const NAV_LINKS: NavLink[] = [
  { href: withBase("/"), label: "Inicio" },
  { href: withBase("/masajes"), label: "Masajes" },
  { href: withBase("/cuerpo"), label: "Cuidado del cuerpo" },
  { href: withBase("/estetica"), label: "Estética Corporal" },
  { href: withBase("/contacto"), label: "Contacto", cta: true },
];
