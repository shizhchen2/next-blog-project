module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const TestSchema = new Schema({
        textName: {
            type: String,
            required: true
        },
        textValue: {
            type: Number,
            required: true
        }
    })
    return mongoose.model('Test', TestSchema)
}