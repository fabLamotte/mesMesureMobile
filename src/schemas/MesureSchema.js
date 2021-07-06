const MesureSchema = {
    name: "Mesure",
    properties: {
        _id: "objectId",
        _partition: "string",
        date: "string",
        biceps:"string",
        pectoraux:"string",
        taille:"string",
        fesses:"string",
        cuisses:"string",
        mollets:"string",
    },
    primaryKey: '_id',
    assignee: {
      type: 'linkingObject',
      objectType: 'User',
      property: 'mesures',
    },
}

export default MesureSchema
  
  