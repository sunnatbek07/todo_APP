import api from '../axios';

const useTodoApi = {
    getAll: () => api.get("/todos"),
};

export default useTodoApi;
