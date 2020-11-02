'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TopicSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the topic'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Topics', TopicSchema);
