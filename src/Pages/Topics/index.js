import React, { useState, useEffect } from 'react';
import './Topics.css';
import { configapp } from '../../firebase';
import Enrollment from '../../Components/Enrollment';

const Index = () => {
  const [topics, setTopics] = useState([]);
  const [showTopic, setShowTopic] = useState(false);
  const [topicData, setTopicData] = useState(null);
  const [topicDataAll, setTopicDataAll] = useState(null);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(null);
  const [userIndex, setUserIndex] = useState(null); 

  const handleShowData = (index) => {
    setSelectedTopicIndex(index);
    setShowTopic(true);
    // Set the topic data corresponding to the clicked topic
    setTopicData(topicDataAll[index]);
  };

  const handleHideData = () => {
    setShowTopic(false);
  };

  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const fetchUserIndex = async () => {
      try {
        if (userData) {
          const db = configapp.firestore();
          const userRef = db.collection("users").doc(userData.uid);
          const userDoc = await userRef.get();
          if (userDoc.exists) {
            const userData = userDoc.data();
            setUserIndex(userData.index); // Set user's index
          } else {
            console.error('User document not found');
          }
        }
      } catch (error) {
        console.error('Error fetching user index:', error);
      }
    };

    fetchUserIndex();
  }, [userData]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const db = configapp.firestore();
        let collectionName = '';

        if (userData) {
          if (userData.wordpress) {
            collectionName = 'Wordpress';
          } else if (userData.smm) {
            collectionName = 'SMM';
          } else if (userData.app) {
            collectionName = 'AppDev';
          } else if (userData.web) {
            collectionName = 'WebDev';
          }
        }

        if (collectionName) {
          const collectionRef = db.collection(collectionName).orderBy('timestamp').limit(userIndex + 1);
          const snapshot = await collectionRef.get();
          const fetchedTopics = snapshot.docs.map(doc => doc.data().topic);
          setTopics(fetchedTopics);
          setTopicDataAll(snapshot.docs.map(doc => doc.data())); 
        } else {
          console.error('No valid course found in userData');
        }
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    if (userIndex !== null) {
      fetchTopics();
    }
  }, [userData, userIndex]);

  let courseName = '';
  if (userData) {
    if (userData.wordpress) {
      courseName = 'Wordpress';
    } else if (userData.smm) {
      courseName = 'Social Media Marketing (SMM)';
    } else if (userData.app) {
      courseName = 'App Development';
    } else if (userData.web) {
      courseName = 'Web Development';
    }
  }
  const [showList, setShowList] = useState(true);

  const handleOff = (id, collectionName) => {
    setShowList(false);
    window.location.href = `/Quiz/${collectionName}/${id}`;
  };

  return (
    <div>
      {showList && (
        <div>
          <h2>{courseName} Topics</h2>
          <ul>
            {topics.map((topic, index) => (
              <div key={index}>
                <li>{`${index + 1}.) `} {topic}</li>
                <button className='btn btn-dark mt-2' onClick={() => {
                  if (showTopic) {
                    handleHideData();
                  } else {
                    handleShowData(index);
                  }
                }}>
                  {showTopic ? "Close" : "Show"}
                </button>
              </div>
            ))}
          </ul>
          {showTopic && (
            <Enrollment topicD={topicData} handleOff={handleOff} />
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
