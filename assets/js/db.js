const LocalStorageDB = {


    // Read
    getData(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },

    // Create / Update
    setData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    
    // Delete
    removeData(key) {
        localStorage.removeItem(key);
    },


    // Create / Update
    setCollection(key, collection = []) {
        if (!Array.isArray(collection)) {
            throw new Error('Collection must be an array');
        }
        this.setData(key, collection);
    },

    // Read
    getCollection(key) {
        return this.getData(key) || [];
    },

    // Delete
    removeCollection(key) {
        this.removeData(key);
    },


    // Create
    addItem(collectionKey, obj) {
        console.log("reached")
        const collection = this.getCollection(collectionKey);
        console.log("pushing")
        collection.push(obj);
        console.log("setting")
        console.log(collection)
        this.setCollection(collectionKey, collection);
        console.log()
    },

    // Read
    getItem(collectionKey, id) {
        const collection = this.getCollection(collectionKey);
        return collection.find(item => item.id === id) || null;
    },


    // Update
    updateItem(collectionKey, id, newObj) {
        let collection = this.getCollection(collectionKey);
        collection = collection.map(item => item.id === id ? { ...item, ...newObj } : item);
        this.setCollection(collectionKey, collection);
    },

    // Delete
    deleteItem(collectionKey, id) {
        let collection = this.getCollection(collectionKey);
        collection = collection.filter(item => item.id !== id);
        this.setCollection(collectionKey, collection);
    }
};


const checkAndSet = (key) => {
    if (LocalStorageDB.getCollection(key) == []) {
        LocalStorageDB.setCollection(key)
    }
}

// Seeding
const main = () => {
    checkAndSet("users")
    checkAndSet("quizes")
    checkAndSet("participants")
}


export {LocalStorageDB, main}

