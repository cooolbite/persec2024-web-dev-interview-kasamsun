function hexToRgb(hex: string): { r: number, g: number, b: number } | null {

    const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const shortHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

    let match = hex.match(hexRegex) || hex.match(shortHexRegex);

    if (!match) {
        return null;
    }

    const r = parseInt(match[1], 16);
    const g = parseInt(match[2], 16);
    const b = parseInt(match[3], 16);

    return { r, g, b };
}

console.log(hexToRgb('#FF9933'));
console.log(hexToRgb('#ff9933'));
console.log(hexToRgb('#FFF'));
console.log(hexToRgb('#000'));
