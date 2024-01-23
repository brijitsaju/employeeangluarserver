const jsonServer =require('json-server')

const employeeServer=jsonServer.create()

const router=jsonServer.router('db.json')

const middleware=jsonServer.defaults()

employeeServer.use(middleware)
employeeServer.use(router)

const port =3015 || process.env.port

employeeServer.listen(port,()=>{
    console.log(`employeeserver runninug at port number ${port}`);
})