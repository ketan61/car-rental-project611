function handleSubmit () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const list = document.getElementById('list').value;
    const mytext = document.getElementById('mytext').value;
    const datefield = document.getElementById('datefield').value;
    const datefield2 = document.getElementById('datefield2').value;


    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */

    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("ADDRESS", address);
    sessionStorage.setItem("PHONE", phone);
    sessionStorage.setItem("AGE", age);
    sessionStorage.setItem("LIST", list);
    sessionStorage.setItem("MYTEXT", mytext);
    sessionStorage.setItem("DATEFIELD", datefield);
    sessionStorage.setItem("DATEFIELD2", datefield2);

    return;
}
