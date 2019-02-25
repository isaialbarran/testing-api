const request = require('supertest'); //Esta es la librería que nos instalamos al principio
const server = require('../app');

describe('Comprobamos que el servidor funciona', () => {
    test('debería de enviar la string funciona' , (done) => {

        request(server)
            .get('/')
            .expect(200) //Compruebo el status de la petición
            .expect(res => { //Compruebo la respuesta del servidor
                const {message} = res.body;
                expect(message).toBe("Funciona") //Se espera un mensaje, ese mensaje debe ser Funciona
            })
            .end((err, res) => {
                //Compruebo estados del server o la DB
                done(err);
            });
    });
});