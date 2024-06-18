// Evaluando que el enlace contenga "http://" o "https://" en caso de que no contenga (falso).
export function determineProtocolLink(link = ''): boolean {
    return /(http:\/\/)|(https:\/\/)\w+/.test(link);
}