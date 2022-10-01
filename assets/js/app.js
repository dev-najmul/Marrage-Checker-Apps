

const marag_check = document.getElementById('marag_check');
const msg = document.querySelector('.msg');
const msgL = document.querySelector('.msg-long');
const msg_dis = document.querySelector('#msg_dis');
const ad1 = document.querySelector('#ad1');





marag_check.onsubmit = (e) => {
    e.preventDefault();

//get all input value

    let name = marag_check.querySelector('input[name = "name"]');
    let age = marag_check.querySelector('input[name = "age"]');
    let gender = marag_check.querySelectorAll('input[name = "gender"]');


 //get gender value

    let genderName = '';
    gender.forEach ( item => {
        if (item.checked) {
            genderName = item.value;
        }
    })


 //Form validation


    if ( name.value == '' || age.value == '' ) {
        msg.innerHTML = setAlert('Fild can\'t be Empty');
    }else if ( genderName == '' ){
        msg.innerHTML = setAlert('Must select Gender', 'info');
    }else if ( CheckNumber(age.value) == false ){
        msg.innerHTML = setAlert('Invalid Age','info');
    } else {
        msg.innerHTML = '';

        //check marrage age
        if ( genderName == 'male'){
            msg_dis.style.display = 'block';
            marrageAgeCal(name.value, age.value, genderName);
        }else{
            msg_dis.style.display = 'block';
            marrageAgeCal(name.value, age.value, genderName);
        }
    }

}

