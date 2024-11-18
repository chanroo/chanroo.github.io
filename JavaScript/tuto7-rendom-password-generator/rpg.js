function gereratepasswod(length, includeLowercase, includeNumber, includeSymbol, includeUppercase){
    const lowchar = "abcdefghijklmnopqrstuvwxyz";
    const upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchar = '0123456789';
    const specialchar = "!@#$%^&*()_+=~_";

    let allowedchar = "";
    let password = "" ;

    allowedchar += includeLowercase ? lowchar:"";
    allowedchar += includeNumber ? numberchar:"";
    allowedchar += includeSymbol ? specialchar:"";
    allowedchar += includeUppercase ? upperchar:"";

    if(length < 1){
        return `(password lenght must be at leaat 1)`;
    }
    if(allowedchar.length === 0){
        return `(at least 1 set of character needs to be selected)`;
    }

    for(let i=0; i<length; i++){
        let elem = Math.floor(Math.random() * allowedchar.length);
        // password += allowedchar.charAt(elem);
        password += allowedchar[elem];
    }

    return password;
}

const passwordLen = 6;
const includeLowercase = false;
const includeUppercase = false;
const includeSymbol = false;
const includeNumber = true;

const password = gereratepasswod(passwordLen,
                                includeLowercase,
                                includeNumber,
                                includeSymbol,
                                includeUppercase);

console.log(password);