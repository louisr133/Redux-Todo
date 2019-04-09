export const ADDING = "ADDING";
export const ADDED = "ADDED";

export const adding = (task) => {
    return {
        type: ADDING,
        payload: task.target.value,
    }
};

export const added = (e) => {
    e.preventDefault();
    return {
        type: ADDED,
    }
};

