const initialData = {
    tasks: {
        'task-1': {id: 'task-1', content: 'Go for a run'},
        'task-2': {id: 'task-2', content: 'Mod Ken\'s Twitch stream'},
        'task-3': {id: 'task-3', content: 'Prepare coffee'},
        'task-4': {id: 'task-4', content: 'Go to bed'}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To-do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1'],
};

export default initialData;