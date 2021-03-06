
import mongoose from 'mongoose';

const Schema =  mongoose.Schema;

export const ClientSchema = new Schema({
    results: [{
            gender: String,
            name: {
                title : String,
                first: String,
                last: String
            },
            location: {
                street :{
                    number: Number,
                    name: String
                },
                city: String,
                state: String,
                country: String,
                postcode : Number,
                coordinates: {
                    latitude: String,
                    longitude: String
                },
                timezone: {
                    offset: String,
                    description: String
                }
            },
            email: String,
            login: {
                uuid: String,
                username: String,
                password: String,
                salt: String,
                md5: String,
                sha1: String,
                sh256: String
            },
            dod: {
                date: [Date],
                age: Number
            },
            registered: {
                date: [Date],
                age: Number
            },
            phone: String,
            cell: String,
            user_id: {
                name: String,
                value: String
            },
            picture: {
                large: String,
                medium: String,
                thumbnail: String
            },
            nat: String

    }],
    info: {
        seed: String,
        results: Number,
        page: Number,
        version: String
    }
})

