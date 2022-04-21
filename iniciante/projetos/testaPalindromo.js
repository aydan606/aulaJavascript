// Solução 1:

function verificaPalindromo(string) {
    
    if(!string)
        return;
    
        return string.split("").reverse().join("") === string;
    
}

// Solução 2:

function verificaPalindromoALT(string) {

    if(!string)
        return;
    
    for(let i = 0; i < string.length; i++) {
        
        if(string[i] !== string[string.length - 1 - i])
            return false;

    }

    return true; 
    
}

let string1 = "arara";
verificaPalindromo(string1);
verificaPalindromoALT(string1);