import axios from "axios";

const API = "http://localhost:5000/api/employees";

export const getEmployees = () => axios.get(API);

export const addEmployee = (employee) =>
    axios.post(API, employee);

export const updateEmployee = (id, employee) =>
    axios.put(`${API}/${id}`, employee);

export const deleteEmployee = (id) =>
    axios.delete(`${API}/${id}`);