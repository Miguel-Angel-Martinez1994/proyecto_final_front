export const serializeForm=(formulario)=>{
    const formData=new FormData(formulario)

    const data ={}

    for (let [name,value] of formData){
      data[name]=value
    }

    return data
  }