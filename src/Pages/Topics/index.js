import React, { useState, useEffect } from "react";
import "./Topics.css";
import { configapp } from "../../firebase";
import Enrollment from "../../Components/Enrollment";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const Index = () => {
  const [topics, setTopics] = useState([]);
  const [showTopic, setShowTopic] = useState(false);
  const [topicData, setTopicData] = useState(null);
  const [topicDataAll, setTopicDataAll] = useState(null);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(null);
  const [userIndex, setUserIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(true);
  const navigate = useNavigate();

  const handleShowData = (index) => {
    setSelectedTopicIndex(index);
    setShowTopic(true);
    setShowList(false); // Hide the list when showing topic data
    // Set the topic data corresponding to the clicked topic
    setTopicData(topicDataAll[index]);
  };

  const handleHideData = () => {
    setShowTopic(false);
    setShowList(true); // Show the list when hiding topic data
  };

  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const fetchUserIndex = async () => {
      try {
        if (userData) {
          const db = configapp.firestore();
          const userRef = db.collection("users").doc(userData.uid);

          // Using onSnapshot to listen for changes
          userRef.onSnapshot((doc) => {
            if (doc.exists) {
              const userData = doc.data();
              setUserIndex(userData.index); // Set user's index
            } else {
              console.error("User document not found");
            }
          });
        }
      } catch (error) {
        console.error("Error fetching user index:", error);
      }
    };

    fetchUserIndex();

    // Clean up the listener when component unmounts
    return () => {
      if (userData) {
        const db = configapp.firestore();
        const userRef = db.collection("users").doc(userData.uid);
        userRef.onSnapshot(() => {}); // Unsubscribe from snapshot listener
      }
    };
  }, [userData]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const db = configapp.firestore();
        let collectionName = "";

        if (userData) {
          if (userData.wordpress) {
            collectionName = "Wordpress";
          } else if (userData.smm) {
            collectionName = "SMM";
          } else if (userData.app) {
            collectionName = "AppDev";
          } else if (userData.web) {
            collectionName = "WebDev";
          }
        }

        if (collectionName) {
          const collectionRef = db
            .collection(collectionName)
            .orderBy("timestamp")
            .limit(userIndex + 1);

          // Using onSnapshot to listen for changes
          collectionRef.onSnapshot((snapshot) => {
            const fetchedTopics = snapshot.docs.map((doc) => doc.data().topic);
            setTopics(fetchedTopics);
            setTopicDataAll(snapshot.docs.map((doc) => doc.data()));
          });
        } else {
          console.error("No valid course found in userData");
        }
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    if (userIndex !== null) {
      fetchTopics();
    }

    // Clean up the listener when component unmounts or when userIndex changes
    return () => {
      const db = configapp.firestore();
      let collectionName = "";

      if (userData) {
        if (userData.wordpress) {
          collectionName = "Wordpress";
        } else if (userData.smm) {
          collectionName = "SMM";
        } else if (userData.app) {
          collectionName = "AppDev";
        } else if (userData.web) {
          collectionName = "WebDev";
        }
      }

      if (collectionName) {
        const collectionRef = db
          .collection(collectionName)
          .orderBy("timestamp")
          .limit(userIndex + 1);
        collectionRef.onSnapshot(() => {}); // Unsubscribe from snapshot listener
      }
    };
  }, [userData, userIndex]);

  let courseName = "";
  if (userData) {
    if (userData.wordpress) {
      courseName = "Wordpress";
    } else if (userData.smm) {
      courseName = "Social Media Marketing (SMM)";
    } else if (userData.app) {
      courseName = "App Development";
    } else if (userData.web) {
      courseName = "Web Development";
    }
  }

  const handleOff = (id, collectionName) => {
    setShowList(false);
    navigate(`/Quiz/${collectionName}/${id}`);
  };

  const truncateDescription = (description) => {
    if (!description) return "";
    const words = description.split(" ");
    if (words.length > 30) {
      return words.slice(0, 30).join(" ") + " ...";
    }
    return description;
  };

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {showList && (
        <List sx={{ width: "100%", maxWidth: 700 }}>
          {topicDataAll &&
            topicDataAll.map(
              (
                topic,
                index // Check if topicDataAll is not null or undefined
              ) => (
                <ListItem
                  key={index}
                  alignItems="flex-start"
                  sx={{ marginBottom: "20px" }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={topic.title}
                      src={topic.avatar}
                      sx={{ width: 55, height: 55, marginRight: 4 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                        {topic?.topic}
                      </span>
                    }
                    secondary={truncateDescription(topic?.description)}
                    sx={{ fontSize: "14px", marginRight: "50px" }}
                  />
                  {!showTopic && (
                    <Button
                      variant="contained"
                      onClick={() => handleShowData(index)}
                    >
                      Show
                    </Button>
                  )}
                </ListItem>
              )
            )}
        </List>
      )}

      {showTopic && <Enrollment topicD={topicData} handleOff={handleOff} />}
    </div>
  );
};



export default Index;
