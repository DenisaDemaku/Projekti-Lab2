import mongoose from 'mongoose' 

export const main = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/MedicalSupplies');
    } catch(err) {
        console.log(err)
    }
};

main();