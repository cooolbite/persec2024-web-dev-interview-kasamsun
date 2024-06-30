class ReverseEncoder {
    encode(input: string): string {
        // แปลงทุกตัวอักษรใน input ตามกฎที่กำหนด
        const encodedChars = input.split('').map(char => {
            if (/[a-z]/.test(char)) {
                return String.fromCharCode('z'.charCodeAt(0) - (char.charCodeAt(0) - 'a'.charCodeAt(0)));
            } else if (/[A-Z]/.test(char)) {
                return String.fromCharCode('Z'.charCodeAt(0) - (char.charCodeAt(0) - 'A'.charCodeAt(0)));
            } else {
                return char;
            }
        });

        return encodedChars.join('');
    }

    decode(input: string): string {

        return this.encode(input);
    }
}
