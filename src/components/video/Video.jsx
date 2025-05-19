import styles from "./video.module.css";
import ReactPlayer from "react-player";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Video = () => {
  const [Video, setVideo] = useState(false);
  return (
    <>
      <div className="padding-container">
        <div className={styles.video_container}>
          <div className={styles.video_btn} onClick={() => setVideo(true)}>
            Play
          </div>
          <div className={styles.video_overlay}>
            {Video && (
              <>
                <div className={styles.video_source}>
                  <ReactPlayer
                    controls={true}
                    width={"80%"}
                    height={"80%"}
                    url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  />
                </div>
                <div
                  className={styles.close_video}
                  onClick={() => setVideo(false)}
                >
                  <IoMdClose />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
