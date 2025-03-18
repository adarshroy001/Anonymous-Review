import mongoose  from "mongoose";
 
type ConnectionObject = {
    isConnected?: number;
  };

  const connection:ConnectionObject = {} ;

  async function dbConnect(): Promise<void>{
     //check if db is already connected although we can connect db multiple times but it may reduce performence so if 
     //db is already connected do not connect it 
    if (connection.isConnected) {
        console.log('Db is already connected');
        return ;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', { serverSelectionTimeoutMS: 30000})
        connection.isConnected = db.connections[0].readyState
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        // Graceful exit in case of a connection error
        process.exit(1);
    }
  }
  export default dbConnect;
  dbConnect();