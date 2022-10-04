import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";

export default function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <div className="editing-task-div">
                <input
                    className="editing-task"
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value
                        });
                    }}
                />
                <button
                    className="save-btn"
                    onClick={() => setIsEditing(false)}
                >
                    Save
                </button>
            </div>
        );
    } else {
        taskContent = <>{task.text}</>;
    }

    return (
        <>
            <div className={task.done ? "Task-item-done" : "Task-item"}>
                <div className="task-text">{taskContent}</div>
                <div className="icons">
                    {!isEditing ? (
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={(e) => {
                                    onChange({
                                        ...task,
                                        done: e.target.checked
                                    });
                                }}
                            />
                            {task.done ? (
                                <CheckBoxOutlinedIcon className="checked" />
                            ) : (
                                <SquareOutlinedIcon className="unchecked" />
                            )}
                        </label>
                    ) : null}

                    {!isEditing ? (
                        <DeleteIcon
                            className={
                                task.done ? "delete-icon-done" : "delete-icon"
                            }
                            onClick={() => onDelete(task.id)}
                        />
                    ) : null}

                    {task.done || isEditing ? null : (
                        <EditIcon
                            className="edit-icon"
                            onClick={() => setIsEditing(true)}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
