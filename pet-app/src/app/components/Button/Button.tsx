import { Button } from "semantic-ui-react";

import styles from "./styles.module.css";

const ButtonComponent = ({ label, primary, secondary, onClick }: any) => (
  <Button
    primary={primary}
    secondary={secondary}
    onClick={onClick}
    className={styles.buttonStyle}
  >
    {label}
  </Button>
);

export default ButtonComponent;
