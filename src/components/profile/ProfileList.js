import React from "react";
import styles from "./ProfileList.module.css";
import Profile from "./Profile";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import { employee } from "../../data";

const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team members</h1>
        <div className={styles["profile-container"]}>
          {employee.map((profile) => {
            const { img, name, id, job, company, link } = profile;
            return (
              <Profile
                key={id}
                image={img}
                name={name}
                job={job}
                company={company}
                link={link}
              />
            );
          })}

          {/* <Profile
            image={profile1}
            name={"Adaora "}
            job={"cloud Engineer"}
            company={"microsoft"}
            link={"https://www.twitter.com"}
          />
          <Profile
            image={profile2}
            name={"john "}
            job={"UI"}
            company={"microsoft"}
            link={"https://www.twitter.com"}
          />{" "}
          <Profile
            image={profile3}
            name={"Adaora "}
            job={"backend developer"}
            company={"microsoft"}
            link={"https://www.twitter.com"}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ProfileList;
