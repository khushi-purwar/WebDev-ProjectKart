import {
  query,
  serverTimestamp,
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  where,
  orderBy,
} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { db, storage } from "../firebase";

export const getAlbums = (cb, uid) => {
  const q = query(
    collection(db, "albums"),
    where("uid", "==", uid),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, cb);
};

export const createAlbum = (albumName, uid) => {
  const newDoc = {
    name: albumName,
    uid: uid,
    createdAt: serverTimestamp(),
  };
  return addDoc(collection(db, "albums"), newDoc);
};

export const deleteAlbum = (photos, currentAlbumId) => {
  for (let photo of photos) {
    const photoRef = ref(storage, `photos/${photo.id}_${photo.data.name}`);
    deleteObject(photoRef)
      .then(() => deleteDoc(doc(db, "photos", photo.id)))
      .catch((e) => console.log(e.message));
  }
  deleteDoc(doc(db, "albums", currentAlbumId));
};
