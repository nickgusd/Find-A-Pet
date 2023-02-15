import { useLocation } from "react-router";

import { formatPhone } from "../../utils/string";
import { SocialIcon } from "react-social-icons";

import styles from "./styles.module.css";
import paw from "../../assets/paw.svg";

export const ContactCard = ({ org = {} }: any) => {
  const location = useLocation();
  const { facebook, twitter, instagram, pintrest, youtube } =
    org?.social_media || {};
  const isOrgPage = location.pathname === "/organizations";

  return (
    <div
      className={`${styles.contentWrapper} ${
        isOrgPage ? styles.orgContact : ""
      }`}
    >
      {Object.keys(org).length > 0 && (
        <>
          <div className={styles.header}>
            <div>
              <img src={paw} alt="paw" />
            </div>
            <h2>{org.name}</h2>
          </div>
          <div className={styles.innerWrapper}>
            <b>
              <p> Email: </p>
            </b>
            <p>{org.email || "Not provided"}</p>
            <b>
              <p>Address:</p>
            </b>
            <p>{org.address1 || "Not provided"}</p>
            <b>
              <p>Phone:</p>
            </b>
            <p>{formatPhone(org.phone) || "Not provided"}</p>
            <b>
              <p>City:</p>
            </b>
            <p>{org.address.city || "Not provided"}</p>

            <b>
              <p>Country:</p>
            </b>
            <p>{org.address.country || "Not provided"}</p>
            <b>
              <p>Postcode:</p>
            </b>
            <p>{org.address.postcode || "Not provided"}</p>
            <b>
              <p>State:</p>
            </b>
            <p>{org.address.state || "Not provided"}</p>
            <b>
              <p>Website:</p>
            </b>
            <a href={org.website} target="_blank" rel="noreferrer">
              {org.website || "Not provided"}
            </a>
          </div>
          {!isOrgPage && (
            <div className={styles.socialWrapper}>
              {facebook && <SocialIcon url={facebook} target="_blank" />}
              {instagram && <SocialIcon url={instagram} target="_blank" />}
              {twitter && <SocialIcon url={twitter} target="_blank" />}
              {pintrest && <SocialIcon url={pintrest} target="_blank" />}
              {youtube && <SocialIcon url={youtube} target="_blank" />}
            </div>
          )}
        </>
      )}
    </div>
  );
};
