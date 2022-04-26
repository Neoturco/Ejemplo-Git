const db =[
    {id:1, nombre :"Romina"},
    {id:2, nombre :"Andres"},
    {id:3, nombre :"Gabriel"},
    {id:4, nombre :"Damian"},
]

const buscarId = (id) =>{
    const res = db.find(el => el.id === id);
    const promesa =new Promise (function(resuelve,rechaza){
        setTimeout(()=>{
            if(res){
                resuelve(res)
            }else{
                rechaza("no se puedo encontrar la persona con el id ${id}")
            }
        },2000);
    })
    return promesa
}



//ejemplo de aplicacion

const app = async () => {

    console.log('-----INICIO DE APLICACION');
    try{
    

        const finalizado=Promise.all([
            await buscarId(2),
            await buscarId(3)
        ]) 

        const resultado = await finalizado
        console.log(resultado);
        
        const p1 =await buscarId(2)
        console.log(p1);

        const p2 =await buscarId(3)
        console.log(p2);

    } catch(error){
         console.error('-------',error)
    }
}

app();
console.log('-----FIN');
console.log('---------OTRO FIN');