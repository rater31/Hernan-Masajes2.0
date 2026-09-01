
export const WHATSAPP_URL = "https://wa.me/3874753268";
export const WHATSAPP_TEL = "+ 54 9 3874753268";

export function waLink(message: string): string {
    return `${WHATSAPP_URL}/?text=${encodeURIComponent(message)}`;
}
