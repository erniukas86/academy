import Table from "../../components/table/Table";
import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import useQuery from "../../hooks/useQuery";

export default function LectorsPage () {
    console.log('RENDER: LectorsPage');
    const { data:lectors, isLoading } = useQuery(`${process.env.REACT_APP_API_URL}${API_ENDPOINTS.LECTORS}`)

    return <>
        <h1>LECTORS</h1>
        <Table data={lectors} isLoading={isLoading} />
    </>
}