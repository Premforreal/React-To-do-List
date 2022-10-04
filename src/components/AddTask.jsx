import { useState } from "react";
import "../styles.css";
import AddBoxOutlineIcon from "@mui/icons-material/AddBox";

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState("");
    const [alert, setAlert] = useState(false);
    return (
        <>
            <div className="input">
                <input
                    placeholder="What's need to be done?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <AddBoxOutlineIcon
                    className="addtask-icon"
                    onClick={() => {
                        if (text === "") {
                            setAlert(true);
                            setTimeout(() => setAlert(false), 3000);
                        } else {
                            setText("");
                            onAddTask(text);
                        }
                    }}
                />
            </div>
            <div className={alert ? "danger" : "hide-error"}>
                <strong>Task cannot be empty</strong>
            </div>
        </>
    );
}
