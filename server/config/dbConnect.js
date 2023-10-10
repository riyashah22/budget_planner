const mongoose = require('mongoose')

// connect

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://riya:riya@cluster0.zdd4avi.mongodb.net/income-expenses-app?retryWrites=true&w=majority')
        console.log('DB Connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
dbConnect()