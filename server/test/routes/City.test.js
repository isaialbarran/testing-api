/*El nombre y la ruta deben ser iguales al nombre del archivo y la ruta en mi app,
por eso está en la carpeta routes y se llama City.test.js
Esta ruta está basada en el proyecto de Demium
*/

const request = require('supertest');
const server = require('../../app');

//Aquí deben implementarse cada una de las posibles razones por las que puede fallar la app
describe('/city', () => {
    describe('POST /', () => {

        it('Should return 403 without token', () => {
            
        })

        it('Should return 400 without data', () => {
            
        })

        it('Should return 201 w/data', (done) => { //Se recoge el done porque es asincrona la petición 
            request(server) //A quien se hace la petición
                .post(baseURL) //Que tipo de petición es?
                .header('Authorization','token')
                .send({
                    // ...body
                })
                .expect(201)
                .expect(res => {
                    // ...expects sobre el response.body (res.data en axios)
                })
                .end( (err, res) => {
                    // ... preguntamos a la base de datos si todo ha ido bien
                    done(err) // Se vuelve a llamar el done para comprobar que ha llegado hasta el final del test
                } )
        })
    })
})