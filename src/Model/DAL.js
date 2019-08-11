import axios from 'axios'


let getData = (url) => {
   return axios.get(url)
}

let registerUser = (obj) => {
   let p = new Promise((resolve, reject) => {
      axios.post('http://localhost:4500/clients/register', obj)
         .then((data) => {
            return resolve(data)
         })
         .catch((err) => {
            return reject(err)
         })
   })
   return p;

}

let LoginUser = (obj) => {
   let p = new Promise((resolve, reject) => {
      axios.post('http://localhost:4500/clients/login', obj)
         .then((data) => {
            return resolve(data)
         })
         .catch((err) => {
            return reject(err)
         })
   })
   return p;
}

let createPackageServer = (obj) => {
   axios.post('http://localhost:4500/packages/create', obj)
}

let addPackageServer = (obj) => {
   let p = new Promise((resolve, reject) => {
      axios.post('http://localhost:4500/clients/addPackage', obj)
         .then((data) => {
            return resolve(data)
         })
         .catch((err) => {
            return reject(err)
         })
   })
   return p;
}

let Logout = ()=>{
   let p = new Promise((resolve, reject) => {
      axios.post('http://localhost:4500/clients/logout')
         .then((data) => {
            return resolve(data)
         })
         .catch((err) => {
            return reject(err)
         })
   })
   return p;
}

let ifConnect = ()=>{
   return axios.get("http://localhost:4500/clients/isLoggedin")

}

let DAL = {
   getData: getData,
   registerUser: registerUser,
   LoginUser: LoginUser,
   createPackageServer: createPackageServer,
   addPackageServer: addPackageServer,
   Logout:Logout,
   ifConnect:ifConnect

}

export default DAL