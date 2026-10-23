export const SITE_NAME = "Hernán Masajes";
export const WHATSAPP_NUMBER = "5493874753268";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_TEL = "+54 9 387 475-3268";
export const INSTAGRAM_URL = "https://www.instagram.com/masajeshernan";
export const FACEBOOK_URL = "https://www.facebook.com/masajes393salta";

export function waLink(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
