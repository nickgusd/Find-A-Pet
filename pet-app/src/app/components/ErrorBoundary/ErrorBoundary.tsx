import { Component } from "react";

import image from "../../assets/no-results.png";
import ButtonComponent from "../Button/Button";

import styles from "./styles.module.css";

interface AppErrorProps {
  children: object | any;
}

export default class AppErrorBoundary extends Component<AppErrorProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      errorInfo: "",
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: string) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error({ error, errorInfo });
    this.setState({ errorInfo });
  }

  render() {
    const { hasError }: any = this.state;
    if (hasError) {
      return (
        <main className={styles.AppErrorBoundary}>
          <div className={styles.AppError}>
            <img src={image} alt="error" />
            <div className={styles.AppErrorHeader}>
              <h1>Sorry, something went wrong.</h1>
            </div>
            <div className={styles.AppErrorFooter}>
              <a href={"/"}>
                <ButtonComponent secondary label="Return home" />
              </a>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
