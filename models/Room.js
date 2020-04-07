/* eslint-disable one-var */
// eslint-disable-next-line one-var
// eslint-disable-next-line no-unused-vars
var mongoose = require('mongoose'), Schema = mongoose.Schema

var RoomSchema = new mongoose.Schema({
  room_name: String,
  chats: [{
    type: Schema.Types.ObjectId,
    ref: 'Chat'
  }],
  status: String,
  // edit_date: { type: Date, default: Date.now },
  // created_date: { type: Date, default: Date.now }
},
{
  id: false,
  toObject: {
      virtuals: true,
      getters: true
  },
  toJSON: {
      virtuals: true,
      getters: true,
      setters: false
  },
  timestamps: true
});

RoomSchema.pre('find', function () {
  this.where({ is_active: { $ne: false } });
});


module.exports = mongoose.model('Room', RoomSchema)
