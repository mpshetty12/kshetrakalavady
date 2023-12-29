import { db } from "../firebase-config";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, getDocsFromCache, } from "firebase/firestore";

const imageCollectionRef = collection(db, "songs");

class SongsDataService {
    getAllSongs = () => {
        return getDocs(imageCollectionRef)
    }
}

export default new SongsDataService();