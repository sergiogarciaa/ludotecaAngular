interface Shape{
    name: string;
    height: number;
    width: number;
    // La interrogación significa opcional
    color?: string;
}

function area1(shape: Shape){
    var area = shape.width * shape.height;
    return "El area del " + shape.name + " es de " + area + " cm cuadrados.";
}
console.log(area1({name: 'rectangulo', width: 30, height: 15}));
console.log(area1({name: 'triangulo', width: 10, height: 5, color:'red'}));