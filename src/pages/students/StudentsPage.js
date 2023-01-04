
import Table from "../../components/table/Table";
import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import useQuery from "../../hooks/useQuery";

export default function StudentsPage () {
    const { data: students, isLoading } = useQuery(`${process.env.REACT_APP_API_URL}${API_ENDPOINTS.STUDENTS}`)

    return <>
        <h1>Students</h1>
        <Table data={students} isLoading={isLoading} />
    </>
}