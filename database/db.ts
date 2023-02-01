import mongoose, { mongo } from "mongoose";

const mongoConnection = { 
    isConnected: 0 
}

export const connect = async () => {
    
    if ( mongoConnection.isConnected ){
        console.log('Connection Succesfull');
        return
    }

    if ( mongoose.connections.length > 0 ) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;
        
        if ( mongoConnection.isConnected === 1 ) {
            console.log('Using previus connection');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');
    mongoConnection.isConnected = 1;
    console.log('Concted MongoDB');
}

export const disconnect = async () => {
    if ( process.env.NODE_ENV === 'development' ) return;
    if ( mongoConnection.isConnected === 0 ) return;

    await mongoose.disconnect();
    mongoConnection.isConnected = 0;
    console.log('Disconnecting MongoDB');
}