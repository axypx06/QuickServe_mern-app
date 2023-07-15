const mongoose = require('mongoose');
const mongoURI ="mongodb://0.0.0.0:27017/QuickServeMERN"
mongoose.set("strictQuery", false);
const mongoDB = async () => {
    
      await mongoose.connect(mongoURI,{ useNewUrlParser: true }, async (err, result) => {;
      if(err) console.log("---",err)
      else{

      console.log("connected!!");
      const fetched_data = mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(async function(err,data){
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray( function(err,catData){
            if(err) console.log(err);
        else
        {
            global.food_items=data;
            global.foodCategory=catData;
          
        }
        })
        // if(err) console.log(err);
        // else
        // {
        //     global.food_items=data;
          
        // }
    })
}
 });
}
    //   console.log(data);
    // } catch (error) {
    //   console.log('err: ', error);
    // }
// const mongoDB = async () => {
//     try {
//       await mongoose.connect(mongoURI);
//       console.log('Connected!');
//       let fetched_data = mongoose.connection.db.collection("food_items");
//       let data=await fetched_data.find({}).toArray() 
//       console.log(data);
//     } catch (error) {
//       console.log('err: ', error);
//     }
//   };


module.exports = mongoDB;