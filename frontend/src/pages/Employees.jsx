import { useEffect, useState } from "react";
import "./Employees.css";

import {
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
} from "../services/employeeService";

function Employees() {

    const initialEmployee = {
        employeeId: "",
        name: "",
        email: "",
        phone: "",
        department: "",
    };

    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState(initialEmployee);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await getEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editingId) {
                await updateEmployee(editingId, employee);
            } else {
                await addEmployee(employee);
            }

            fetchEmployees();

            setEmployee(initialEmployee);
            setEditingId(null);

        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (emp) => {
        setEmployee({
            employeeId: emp.employeeId,
            name: emp.name,
            email: emp.email,
            phone: emp.phone,
            department: emp.department,
        });

        setEditingId(emp._id);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmDelete) return;

        try {
            await deleteEmployee(id);
            fetchEmployees();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="employees-container">

            <h1>Employee Management</h1>

            <form
                className="employee-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    name="employeeId"
                    placeholder="Employee ID"
                    value={employee.employeeId}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="name"
                    placeholder="Employee Name"
                    value={employee.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={employee.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={employee.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={employee.department}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    {editingId ? "Update Employee" : "Add Employee"}
                </button>

            </form>

            <table>

                <thead>

                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {employees.length === 0 ? (

                        <tr>

                            <td
                                colSpan="6"
                                className="no-data"
                            >
                                No Employees Found
                            </td>

                        </tr>

                    ) : (

                        employees.map((emp) => (

                            <tr key={emp._id}>

                                <td>{emp.employeeId}</td>

                                <td>{emp.name}</td>

                                <td>{emp.email}</td>

                                <td>{emp.phone}</td>

                                <td>{emp.department}</td>

                                <td>

                                    <button
                                        className="edit-btn"
                                        onClick={() => handleEdit(emp)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(emp._id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>
    );
}

export default Employees;