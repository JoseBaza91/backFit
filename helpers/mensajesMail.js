const transporter = require('./nodemailerConfig')

const responderConsulta = async () => {
    try {
        const info = await transporter.sendMail({
            from: '"Consulta Exitosa 👻" <juanpablo.miscritop@gmail.com>', // sender address
            to: "juanpablo.miscritop@gmail.com", // list of receivers
            subject: "Hola ✔", // Subject line
            html: `
            <div>
             <h2>¡Gracias por tu consulta! Te contactaremos en breve.</h2>
             <img src="https://static.vecteezy.com/system/resources/thumbnails/026/781/389/small_2x/gym-interior-background-of-dumbbells-on-rack-in-fitness-and-workout-room-photo.jpg" alt="">
            </div>
            
            `, // html body
          });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    responderConsulta,
}