import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

const bookingSchema = mongoose.Schema({
    booking_id: Number,
    location_id: String,
    drone_shot_id: String,
    created_time: Date,
    customer_id: Number
  });
  
autoIncrement.initialize(mongoose.connection);

// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);
const Booking = mongoose.model('Booking', bookingSchema);


export default postUser;