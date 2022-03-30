import mongoose from 'mongoose';

const StatsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'required field'],
    trim: true
  },
  totalGames: { type: Number, required: false },
  moves: { type: Number, required: false },
  bestGame: new mongoose.Schema({
    time: { type: Number, required: false },
    field: new mongoose.Schema({
      width: { type: Number, required: false },
      height: { type: Number, required: false },
    })
  })

});

export default mongoose.model('Stats', StatsSchema);