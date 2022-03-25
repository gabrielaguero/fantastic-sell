export const productos = [
    {
        id:1,
        name:'librero',
        stock: 5,
        price: 2000,
        img: 'https://platinumexpress.com.ar/wp-content/uploads/2015/03/9013a.png',
        category:'libreros',
    },
    {
        id:2,
        name:'Pack de tazas',
        stock: 10,
        price: 250,
        img: 'https://http2.mlstatic.com/D_NQ_NP_653253-MLA48439233406_122021-O.webp',
        category:'tazas',
    },
    {
        id:3,
        name:'estante',
        stock: 5,
        price: 550,
        img: 'https://http2.mlstatic.com/D_NQ_NP_859145-MLA47038099018_082021-O.webp',
        category:'estantes',
    },
    {
        id:4,
        name:'Sillón',
        stock: 7,
        price: 1600,
        img: 'https://http2.mlstatic.com/D_NQ_NP_640124-MLA40398854068_012020-O.webp',
        category:'sillones',
    },
    {
        id:5,
        name:'Silla',
        stock: 10,
        price: 250,
        img: 'https://disegnimobili.com.ar/wp-content/uploads/2020/01/silla-de-comedor-de-madera-tapizado-tela-cherlyn-alor-D_NQ_NP_875049-MLA40451247656_012020-F.jpg',
        category:'sillas',
    },
];

export const getProductos = (categoryId) => {
    return new Promise((resolve, reject) => {
        const prodFiltrados = productos.filter(
            (prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(prodFiltrados) : resolve(productos);
        }, 2000);
    });
};


export const getProducto = (itemId) =>{
    return new Promise((resolve, reject) => {
        const item = productos.find((prod) => prod.id === parseInt(itemId));
        setTimeout(()=>{
            resolve(item);
        }, 2000)
    })
}