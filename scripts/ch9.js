function encryptFlag(flag) {
    return flag
        .split("")
        .map((char) => {
            if (/[a-zA-Z]/.test(char)) {
                const code = char.charCodeAt(0);
                return String.fromCharCode(code + 1);
            }
            return char; 
        })
        .join("");
}

// "BCN{kbwbtdsjqu_fodszqujpo_jt_gvo}"