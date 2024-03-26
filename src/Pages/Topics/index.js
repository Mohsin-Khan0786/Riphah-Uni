import React, { useState, useEffect } from "react";
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
  LinearProgress,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [showTopic, setShowTopic] = useState(false);
  const [topicData, setTopicData] = useState(null);
  const [topicDataAll, setTopicDataAll] = useState(null);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(null);
  const [userIndex, setUserIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(true);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const navigate = useNavigate();

  const handleShowData = (index) => {
    setSelectedTopicIndex(index);
    setShowTopic(true);
    setShowList(false);
    setTopicData(topicDataAll[index]);
  };

  const handleHideData = () => {
    setShowTopic(false);
    setShowList(true);
  };

  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const fetchUserIndex = async () => {
      try {
        if (userData) {
          const db = configapp.firestore();
          const userRef = db.collection("users").doc(userData.uid);

          userRef.onSnapshot((doc) => {
            if (doc.exists) {
              const userData = doc.data();
              setUserIndex(userData.index);
              const answersArray = [];
              for (let i = 0; i < topics.length; i++) {
                answersArray.push(
                  userData[`topic${i + 1}_correct_answers`] || "Not-Submitted"
                );
              }
              setCorrectAnswers(answersArray);
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

    return () => {
      if (userData) {
        const db = configapp.firestore();
        const userRef = db.collection("users").doc(userData.uid);
        userRef.onSnapshot(() => {});
      }
    };
  }, [userData, topics]);

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
        collectionRef.onSnapshot(() => {});
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
    <div>
      {/* Progress bar */}
      {userIndex !== null && topics.length > 0 && (
        <div>
          <LinearProgress
            variant="determinate"
            value={(userIndex / topics.length) * 100}
            sx={{ height: 4 }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", mt: 1 }}
          >
            {((userIndex / topics.length) * 100).toFixed(2)}%
          </Typography>
        </div>
      )}
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
                    <Typography>
                      {correctAnswers[index]
                        ? `${correctAnswers[index]}`
                        : "Not-Submitted"}
                    </Typography>
                  </ListItem>
                )
              )}
          </List>
        )}

        {showTopic && <Enrollment topicD={topicData} handleOff={handleOff} />}
      </div>
    </div>
  );
};

export default Topics;
