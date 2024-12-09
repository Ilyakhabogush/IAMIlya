function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        date:document.getElementById("date").value,
        time:document.getElementById("time").value,
        peopleCount: document.getElementById("peopleCount").value,
    };
    const serviceID = "service_lpei0rq";
    const templateID = "template_31cmolx";
    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("date").value = "";
            document.getElementById("time").value = "";
            document.getElementById("peopleCount").value = "";
            console.log(res);
            alert("Ваша заявка на бронь принята. Ожидайте подтверждения")
        }
    )
    .catch((err) => console.log(err));
}