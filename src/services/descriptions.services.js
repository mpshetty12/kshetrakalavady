import { db } from "../firebase-config";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, getDocsFromCache, } from "firebase/firestore";

const eventCollectionRef = collection(db, "descriptions");

class DescriptionDataService {
    getAllDescriptions = () => {
        return getDocs(eventCollectionRef)
    }
}

export default new DescriptionDataService();