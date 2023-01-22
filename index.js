
//OBJETOS EN JS

const persona = {
    nombre: 'Carlos',
    apellido: 'Villaiego',
    edad: 29,
    direccion:{
        nomenclatura: 'calle 28 # 8-25',
        barrio: 'Centro'
        
    },
    saludar(){
        console.log('Que hay?');
    },
    amigos: ['Jua', 'Alfredo'],

}

const {nombre, apellido, edad, direccion, saludar, amigos} = persona;
console.log(`Nombre: ${nombre} Apellido: ${apellido} Edad: ${edad}`);
const {nomenclatura, barrio} = direccion;
console.log(`${nomenclatura} barrio: ${barrio}`);
amigos.forEach(amigo =>{
    console.log(amigo);
})

saludar();


   

