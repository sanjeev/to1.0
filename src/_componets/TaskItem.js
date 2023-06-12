import React from 'react';
import classNames from 'classnames';

/**
 * TaskItem
 */
const TaskItem = (props) => {

    return (
        <div className={classNames('custom-control', 'custom-checkbox', props.className)}>

            <label className="custom-control-label" htmlFor={`task-${props.id}`}>
                {props.title}
            </label>
            <p className="font-size-13 text-muted m-0" >{props.due_date}</p>
        </div>
    );
};

export default TaskItem;
