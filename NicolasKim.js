class Usuario{
    constructor(nombre, apellido){
            this.nombre=nombre
            this.apellido=apellido
            this.libros=[];
            this.mascotas=[];

}
getFullName(){
    return `${this.nombre}${this.apellido}`
}

addMascota(nombre_mascota){
this.mascotas.push(nombre_mascota);

}
countMascota(){
    return `EL usuario tiene: ${this.mascotas.length} mascotas`
}
addBook(nombre_libro, nombre_autor){
   this.libros.push({nombre_libro,nombre_autor});
}

getBookNames(){
   let lista='';
for (let i =0; i< this.libros.length ; i++){    
  lista+= 'nombre_libro: ' + this.libros[i].nombre_libro +'\n';
}
    return `${lista}` 
}

}
let usuario = new Usuario("Nicolas ", "Kim");
console.log(usuario.getFullName());
usuario.addMascota("olivia");
usuario.addMascota("Pancho");
usuario.addMascota("Milo");
usuario.addMascota("Nana");
usuario.addMascota("Poppy");
usuario.addMascota("Oliver");
console.log(usuario.countMascota());
usuario.addBook("Narnia", "CS Lewis")
usuario.addBook( "1984" ,"George Orwell")
usuario.addBook( "Harry Potter" ,"J.K. Rowling")
console.log(usuario.getBookNames());
