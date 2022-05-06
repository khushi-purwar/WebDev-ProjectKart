import {
  onSnapshot,
  deleteDoc,
  orderBy,
  where,
  query,
  collection,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import {
  deleteObject,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../firebase";

// setUploadMessage is a setState method to set Feedback messages
export const uploadPhoto = (photos, currentAlbum, uid, setUploadMessage) => {
  for (let photo of photos) {
    const photoId = uuidv4();
    const data = {
      name: photo.name,
      uid: uid,
      albumId: currentAlbum.albumId,
      albumName: currentAlbum.albumName,
      createdAt: serverTimestamp(),
    };

    const storageRef = ref(storage, `photos/${photoId}_${photo.name}`);
    const uploadTask = uploadBytesResumable(storageRef, photo);

    uploadTask.on(
      "state_changed",
      null,
      (e) => {
        console.log("Error Uploading", e);
        setUploadMessage("Error while Uploading Photo!");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          data.photoURL = downloadURL; // adding the recived Url
          setDoc(doc(db, "photos", photoId), data);
          setUploadMessage("Photo Uploaded Succesfully!");
        });
      }
    );
  }
};

export const getRootPhotos = (uid, cb) => {
  const q = query(
    collection(db, "photos"),
    where("uid", "==", uid),
    where("albumId", "==", "ROOT"),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, cb);
};

export const getAlbumPhotos = (currentAlbumId, cb) => {
  const q = query(
    collection(db, "photos"),
    where("albumId", "==", currentAlbumId),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, cb);
};

export const deletePhoto = (id, fileName) => {
  const photoRef = ref(storage, `photos/${fileName}`);
  deleteObject(photoRef)
    .then(() => deleteDoc(doc(db, "photos", id)))
    .catch((e) => alert(e.message));
};
