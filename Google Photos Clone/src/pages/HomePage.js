import React, { useState, useEffect } from "react";
import "../css/HomePage.css";
import Album from "../components/Album";
import Photo from "../components/Photo";
import CreateAlbumModal from "../components/CreateAlbumModal";

import { Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentAlbum } from "../actions";
import { getAlbums } from "../api/album";
import { getRootPhotos } from "../api/photo";

function HomePage() {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.user);
  const [isCreateAlbumOpen, setIsCreateAlbumOpen] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    dispatch(setCurrentAlbum({ albumId: "ROOT", albumName: "ROOT" }));
  }, [dispatch]);

  // To get Photos
  useEffect(() => {
    const unsubscribe = getRootPhotos(uid, (snapshot) => {
      setPhotos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe; // eslint-disable-next-line
  }, []);

  // To get Albums
  useEffect(() => {
    const unsubscribe = getAlbums((snapshot) => {
      setAlbums(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    }, uid);

    return unsubscribe; // eslint-disable-next-line
  }, []);

  const handleCreateAlbumModal = () => {
    setIsCreateAlbumOpen(true);
  };

  return (
    <div className="homepage">
      <Typography variant="h5">Albums</Typography>
      <div className="homepage__photos">
        {/* Create Album */}
        <div
          onClick={handleCreateAlbumModal}
          title="Create New Album"
          className="homepage__photoAlbum"
          style={{ backgroundColor: "#D0D0D0" }}
        >
          <AddIcon fontSize="large" />
        </div>

        {
          /* Album (Individual) */
          albums.map(({ id, data }) => (
            <Album key={id} id={id} data={data} />
          ))
        }
      </div>

      {/* Root Directory Photos */}
      <div className="homepage__photos">
        {photos.map(({ id, data }) => (
          <Photo key={id} id={id} data={data} />
        ))}
      </div>

      {/* Modal */}
      <CreateAlbumModal
        isCreateAlbumOpen={isCreateAlbumOpen}
        setIsCreateAlbumOpen={setIsCreateAlbumOpen}
      />
    </div>
  );
}

export default HomePage;
