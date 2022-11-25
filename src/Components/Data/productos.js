import React from "react";
import ibanez from "../img/ibanez.jpg";
import LesPaul from "../img/LesPaul.jpg"
import Amplificador from "../img/ampli.jpg"
import Bajo from "../img/10037.jpg"

let productosIniciales = [
    {id:1, nombre:"Les Paul",category:"Bajos", info:"Bajo de alta calidad", img:"https://classmusic.com.co/wp-content/uploads/2021/11/10037.jpg", precio:3000, descripcion:"La Gibson Les Paul es un modelo de guitarra eléctrica y bajo de la marca Gibson Guitar Corporation. Fabricada desde 1952, la Gibson Les Paul es extensamente considerada, junto con la Fender Stratocaster, la guitarra eléctrica de cuerpo macizo más popular del mundo. Concebida inicialmente por Ted McCarty y el guitarrista Les Paul como una guitarra de altas prestaciones, fue producida a lo largo de la década de 1950 con progresivas variaciones hasta dejar de fabricarse en 1960 con ese nombre, en favor de la Gibson SG —básicamente una Les Paul con un «cutaway» o recorte adicional en el cuerpo de la guitarra—, para volver a su fabricación desde 1968 hasta la actualidad."},
    {id:2, nombre:"Stratocaster", category : "Guitarras", info:"Guitarra de baja calidad", img:ibanez, precio:2000, descripcion:"La Gibson Les Paul es un modelo de guitarra eléctrica y bajo de la marca Gibson Guitar Corporation. Fabricada desde 1952, la Gibson Les Paul es extensamente considerada, junto con la Fender Stratocaster, la guitarra eléctrica de cuerpo macizo más popular del mundo. Concebida inicialmente por Ted McCarty y el guitarrista Les Paul como una guitarra de altas prestaciones, fue producida a lo largo de la década de 1950 con progresivas variaciones hasta dejar de fabricarse en 1960 con ese nombre, en favor de la Gibson SG —básicamente una Les Paul con un «cutaway» o recorte adicional en el cuerpo de la guitarra—, para volver a su fabricación desde 1968 hasta la actualidad."},
    {id:3, nombre:"Stratocaster",category:"Guitarras", info:"Guitarra de calidad media", img:LesPaul, precio:6000, descripcion:"La Gibson Les Paul es un modelo de guitarra eléctrica y bajo de la marca Gibson Guitar Corporation. Fabricada desde 1952, la Gibson Les Paul es extensamente considerada, junto con la Fender Stratocaster, la guitarra eléctrica de cuerpo macizo más popular del mundo. Concebida inicialmente por Ted McCarty y el guitarrista Les Paul como una guitarra de altas prestaciones, fue producida a lo largo de la década de 1950 con progresivas variaciones hasta dejar de fabricarse en 1960 con ese nombre, en favor de la Gibson SG —básicamente una Les Paul con un «cutaway» o recorte adicional en el cuerpo de la guitarra—, para volver a su fabricación desde 1968 hasta la actualidad."},
    {id:4, nombre:"Stratocaster", category : "Bajos", info:"Bajo de calidad baja", img:Bajo, precio:7000, descripcion:"La Gibson Les Paul es un modelo de guitarra eléctrica y bajo de la marca Gibson Guitar Corporation. Fabricada desde 1952, la Gibson Les Paul es extensamente considerada, junto con la Fender Stratocaster, la guitarra eléctrica de cuerpo macizo más popular del mundo. Concebida inicialmente por Ted McCarty y el guitarrista Les Paul como una guitarra de altas prestaciones, fue producida a lo largo de la década de 1950 con progresivas variaciones hasta dejar de fabricarse en 1960 con ese nombre, en favor de la Gibson SG —básicamente una Les Paul con un «cutaway» o recorte adicional en el cuerpo de la guitarra—, para volver a su fabricación desde 1968 hasta la actualidad."},
    {id:5, nombre:"Stratocaster",category:"Guitarras", info:"Guitarra de alta calidad", img:LesPaul, precio:8000, descripcion:"La Gibson Les Paul es un modelo de guitarra eléctrica y bajo de la marca Gibson Guitar Corporation. Fabricada desde 1952, la Gibson Les Paul es extensamente considerada, junto con la Fender Stratocaster, la guitarra eléctrica de cuerpo macizo más popular del mundo. Concebida inicialmente por Ted McCarty y el guitarrista Les Paul como una guitarra de altas prestaciones, fue producida a lo largo de la década de 1950 con progresivas variaciones hasta dejar de fabricarse en 1960 con ese nombre, en favor de la Gibson SG —básicamente una Les Paul con un «cutaway» o recorte adicional en el cuerpo de la guitarra—, para volver a su fabricación desde 1968 hasta la actualidad."},
    {id:6, nombre:"Stratocaster", category : "Bajos", info:"Bajo de calidad media", img:Bajo, precio:9000, descripcion:"La Gibson Les Paul es un modelo de guitarra eléctrica y bajo de la marca Gibson Guitar Corporation. Fabricada desde 1952, la Gibson Les Paul es extensamente considerada, junto con la Fender Stratocaster, la guitarra eléctrica de cuerpo macizo más popular del mundo. Concebida inicialmente por Ted McCarty y el guitarrista Les Paul como una guitarra de altas prestaciones, fue producida a lo largo de la década de 1950 con progresivas variaciones hasta dejar de fabricarse en 1960 con ese nombre, en favor de la Gibson SG —básicamente una Les Paul con un «cutaway» o recorte adicional en el cuerpo de la guitarra—, para volver a su fabricación desde 1968 hasta la actualidad."},
    {id:7, nombre:"Stratocaster",category:"Guitarras", info:"Guitarra de baja calidad", img:LesPaul, precio:2000, descripcion:"La Gibson Les Paul es un modelo de guitarra eléctrica y bajo de la marca Gibson Guitar Corporation. Fabricada desde 1952, la Gibson Les Paul es extensamente considerada, junto con la Fender Stratocaster, la guitarra eléctrica de cuerpo macizo más popular del mundo. Concebida inicialmente por Ted McCarty y el guitarrista Les Paul como una guitarra de altas prestaciones, fue producida a lo largo de la década de 1950 con progresivas variaciones hasta dejar de fabricarse en 1960 con ese nombre, en favor de la Gibson SG —básicamente una Les Paul con un «cutaway» o recorte adicional en el cuerpo de la guitarra—, para volver a su fabricación desde 1968 hasta la actualidad."},
    {id:8, nombre:"Stratocaster", category : "Amplificadores", info:"Amplificador de calidad media", img:Amplificador, precio:12000, descripcion:"La Gibson Les Paul es un modelo de guitarra eléctrica y bajo de la marca Gibson Guitar Corporation. Fabricada desde 1952, la Gibson Les Paul es extensamente considerada, junto con la Fender Stratocaster, la guitarra eléctrica de cuerpo macizo más popular del mundo. Concebida inicialmente por Ted McCarty y el guitarrista Les Paul como una guitarra de altas prestaciones, fue producida a lo largo de la década de 1950 con progresivas variaciones hasta dejar de fabricarse en 1960 con ese nombre, en favor de la Gibson SG —básicamente una Les Paul con un «cutaway» o recorte adicional en el cuerpo de la guitarra—, para volver a su fabricación desde 1968 hasta la actualidad."},
    {id:9, nombre:"Stratocaster",category:"Guitarras", info:"Guitarra de alta calidad", img:LesPaul, precio:22000, descripcion:"La Gibson Les Paul es un modelo de guitarra eléctrica y bajo de la marca Gibson Guitar Corporation. Fabricada desde 1952, la Gibson Les Paul es extensamente considerada, junto con la Fender Stratocaster, la guitarra eléctrica de cuerpo macizo más popular del mundo. Concebida inicialmente por Ted McCarty y el guitarrista Les Paul como una guitarra de altas prestaciones, fue producida a lo largo de la década de 1950 con progresivas variaciones hasta dejar de fabricarse en 1960 con ese nombre, en favor de la Gibson SG —básicamente una Les Paul con un «cutaway» o recorte adicional en el cuerpo de la guitarra—, para volver a su fabricación desde 1968 hasta la actualidad."},
    {id:10, nombre:"Stratocaster", category : "Amplificadores", info:"Amplificador de alta calidad", img:Amplificador, precio:20300,descripcion:"La Gibson Les Paul es un modelo de guitarra eléctrica y bajo de la marca Gibson Guitar Corporation. Fabricada desde 1952, la Gibson Les Paul es extensamente considerada, junto con la Fender Stratocaster, la guitarra eléctrica de cuerpo macizo más popular del mundo. Concebida inicialmente por Ted McCarty y el guitarrista Les Paul como una guitarra de altas prestaciones, fue producida a lo largo de la década de 1950 con progresivas variaciones hasta dejar de fabricarse en 1960 con ese nombre, en favor de la Gibson SG —básicamente una Les Paul con un «cutaway» o recorte adicional en el cuerpo de la guitarra—, para volver a su fabricación desde 1968 hasta la actualidad."}
]

export const getProductsByCategory = (category) => {
    return new Promise((res) => {
        const productos = productosIniciales.filter(product => product.category === category);
        setTimeout(() => {
            res(productos);
        }, 1000);
    });
}

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productosIniciales);
        }, 1000);
    });
}

// // una función para filtrar por id, similar a la de categorías. Pero con find en vez de filter.
// export const getProduct = (id) => {
//     return new Promise((resolve) => {
//         const prod = productosIniciales.find(p => p.id === parseInt(id))
//         setTimeout(() => {
//             resolve(prod)
//         }, 1000)
//     })
//   }
  