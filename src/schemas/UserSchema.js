const UserSchema = {
    name: "User",
    properties: {
        _id: "objectId",
        _partition: "string",
        name: "string",
        mesures: "Mesure[]"
    },
    primaryKey: '_id'
}

export default UserSchema;