import { formatPhone } from "../../utils/string";

import styles from "./styles.module.css";

export const ContactCard = ({ data, org }: any) => {
  return (
    <div className={styles.contentWrapper}>
      {org.name && (
        <div className={styles.header}>
          <h1>{org.name}</h1>
        </div>
      )}
      <div className={styles.innerWrapper}>
        <b>
          <p> Email: </p>
        </b>
        <p>{data.contact.email || "Not provided"}</p>
        <b>
          <p>Address:</p>
        </b>
        <p>{data.contact.address.address1 || "Not provided"}</p>
        <b>
          <p>Phone:</p>
        </b>
        <p>{formatPhone(data.contact.phone) || "Not provided"}</p>
        <b>
          <p>City:</p>
        </b>
        <p>{data.contact.address.city || "Not provided"}</p>

        <b>
          <p>Country:</p>
        </b>
        <p>{data.contact.address.country || "Not provided"}</p>
        <b>
          <p>Postcode:</p>
        </b>
        <p>{data.contact.address.postcode || "Not provided"}</p>
        <b>
          <p>State:</p>
        </b>
        <p>{data.contact.address.state || "Not provided"}</p>
      </div>
    </div>
  );
};
