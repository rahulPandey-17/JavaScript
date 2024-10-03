let cnfrm;

do {

    let age = prompt("Enter your age : ");
    age = Number.parseInt(age);

    if (age < 18) {
        alert("You cannot drive!");
    }
    else {
        alert("You can drive");
    }

    cnfrm = confirm("Do you want the dialogue box again?");

}while(cnfrm);