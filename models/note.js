const Schema = require('mongoose').Schema;

const noteSchema = new Schema({
    text: {
        type: String,
        required: true
    }, 
    user: {
        type: Schema.Types.ObjectId,
        required: true
    }
    }, {
        timestamps: true,
        ref: 'createdAt'
});

module.exports = noteSchema;