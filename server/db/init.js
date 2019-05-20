import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';
import Music from '../models/music';

const DB_URL = 'mongodb://localhost:27017/Music';
export default  () => {
  const connect = () => {
    // mongoose.Promise = require('bluebird');
    mongoose.connect(DB_URL, err => {
      if (err) {
        console.log(`===>  Error connecting to mongoDB`);
        console.log(`Reason: ${err}`);
      } else {
        console.log(`===>  Succeeded in connecting to mongoDB`);
        console.log();
        Music.find().exec().then(res=> {
          if(res && res.toString() === '' &&res.length === 0){
            fs.readFile(path.join(__dirname, './musics.json'), 'utf8', (err, res) => {
              const arr = JSON.parse(res);
              Music.deleteMany(err=> {
                if(!err) {
                  Music.bulkWrite(arr.map(n=>{
                    return {
                      insertOne: {
                        document: n
                      }
                    }
                  }), err=> {
                    if(!err) {
                      console.log('数据初始化完毕');
                    }
                  });
                }
              })
            })
          } else {
            console.log('数据已存在');
          }
        })
      }
    });
  };
  connect();

  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connect);

};
