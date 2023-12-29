import { db } from "../firebase-config";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, getDocsFromCache, } from "firebase/firestore";

const eventCollectionRef = collection(db, "DailySeva");

class DailySevaDataService {
    getAllDailySevas = () => {
        return getDocs(eventCollectionRef)
    }
}

export default new DailySevaDataService();