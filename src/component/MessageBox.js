import classes from "./MessageBox.module.css";

const MessageBox = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.card_body}>
        <p className={classes.card_text}>{props.txt}</p>
      </div>
    </div>
  );
};

export default MessageBox;