// >>>>>>>>>>>>>>>>>>>>THIS IS ONLY A TEXT EDITOR<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

db.createCollection("Validation",{
    validator:{
        $jsonSchema:{
            required:['name','price'],
            properties:{
                name:{
                    bsonType:'string',
                    description:'must be a string'
                },
                price:{
                    bsonType:'number',
                    description:'must be a number'
                }
            }
        }
    },
    validationAction:'error'
})



// yahi se change krke direct copyb paste marenge aur enter marenge and Boom guys 

// if you want to update the valdation record in the database


db.runCommand({
    collMod:"Validation",
    validator:{
        $jsonSchema:{
            required:['name'],
            properties:{
                name:{
                    bsonType:'string',
                    description:'must be a string'
                }
            }
        }
    }
})