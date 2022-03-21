//git push -u origin main
//mongodb+srv://Shawon1997:<password>@cluster0.ryj4d.mongodb.net/test


const app = require("./index")

const connect = require("./config/user.connect")

const usercontroler = require("./controler/user.controler")
app.use("/users", usercontroler)
app.listen(7999, async() => {
    try {
        await connect();
        console.log("i am in port 7999")
    } catch (err) {
        console.log(err.message)
    }
})