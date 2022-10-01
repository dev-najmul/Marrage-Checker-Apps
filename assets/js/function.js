
/**
 * Custom Alert Function 
 */

const setAlert = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between" role="alert">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
}



/**
 * Number Check Function
 */


const CheckNumber = (num) => {
    let numberPattern = /^[0-9]{1,3}$/;

    return numberPattern.test(num);
}




/**
 * Marrage age Check Function
 */



const marrageAgeCal = (name, age, gender) => {

    //set marrage age
    let marrageAge;
    if ( gender == 'male' ){
        marrageAge = 21;
    }else{
        marrageAge = 18;
    }

    //for make daynamic (vaiya/apu)
    let genName = '';
    if (gender == 'male'){
        genName = 'vaiya';
    }else{
        genName = 'apuuu';
    }


    //Start calculation

        if ( age >= marrageAge ){
            ad1.play();
            return msgL.innerHTML = setAlert(`Hi, ${name} ${genName} you are ready for Marrage.`,'success');
        }else{
            return msgL.innerHTML = setAlert(`Hi, ${name} ${genName} you are not ready for Marrage, You have to wait ${marrageAge - age} years.`);

    }
}