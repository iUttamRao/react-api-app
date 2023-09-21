import axiosInstance from "../config/axios";

const getEmployee =async() =>{
    try{
        const response = await axiosInstance.get('employees',{headers : {
            "Content-Type":"application/json",
            "Accept":"application/json",
        }
    });
        return response.data.data; // first date from axios and second data from server

    }catch(e){
        console.log(`Error geting employees data ${e.messsage}`);
    }
}

const addEmployee = async(body) => {
    try{
        const response = await axiosInstance.post('create', body)
        console.log("Creating employee Response", response)
    } catch(e) {
        console.log(`Error creating employees data ${e.messsage}`);
    }
}

export {getEmployee, addEmployee};