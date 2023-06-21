import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskState } from '../lib/store';
import Task from './Task';

export default function TaskList() {
    const tasks = useSelector((state) => {
        const tasksInOrder = [
            ...state.taskbox.tasks.filter(t => t.state === 'TASK_PINNED'),
            ...state.taskbox.tasks.filter(t => t.state !== 'TASK_PINNED'),
        ];
        const filteredTasks = tasksInOrder.filter(
            (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
        );
        return filteredTasks;
    });

    const { status } = useSelector((state) => state.taskbox);

    const dispatch = useDispatch();

    const pinTask = (value) => {
        dispatch(updateTaskState({ id: value, newTaskState: 'TASK_PINNED' }));
    }

    const archiveTask = (value) => {
        dispatch(updateTaskState({ id: value, newTaskState: 'TASK_ARCHIVED' }));
    }

    const LoadingRaw = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    )

    if (status === 'loading') {
        return (
            <div className="list-items" data-testid="loading" key={"loading"}>
                {LoadingRaw}
                {LoadingRaw}
                {LoadingRaw}
                {LoadingRaw}
                {LoadingRaw}
                {LoadingRaw}
            </div>
        )
    }

    if (tasks.length === 0) {
        return (
            <div className="list-items" key={"empty"} data-testid="empty">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        )
    }

    return (
        <div className="list-items" data-testid="success" key={"success"}>
            {tasks.map(task => {
                return <Task 
                            key={task.id}
                            task={task}
                            onPinTask={(task) => pinTask(task)}
                            onArchiveTask={(task) => archiveTask(task)}
                        />
            })}
        </div>
    );
}

TaskList.propTypes = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.propTyps.task).isRequired,
    onPinTask: PropTypes.func,
    onArchiveTask: PropTypes.func,
};
TaskList.defaultProps = {
    tasks: [],
    loading: false,
};
