import { memo, Profiler } from "react";
import Table from "../../components/table/Table";
import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import { useOnMount } from "../../hooks/useMount";
import { useOnPropUpdate } from "../../hooks/useOnPropUpdate";
import useQuery from "../../hooks/useQuery";
import { useOnUnMount } from "../../hooks/useUnMount";

function LectorsPage () {

    // Examples
    const DEPENDENCY_ARRAY = [];
    useOnMount(() => console.log('mounted!!'));
    useOnPropUpdate(() => console.log('updated!!'), DEPENDENCY_ARRAY)
    useOnUnMount(() => console.log('unmounted'));

    console.log('RENDER: LectorsPage');
    const { data:lectors, isLoading } = useQuery(`${process.env.REACT_APP_API_URL}${API_ENDPOINTS.LECTORS}`)

    return <>
    <Profiler id="LectorPage" onRender={(id, phase, actualDuration) => console.log(id, phase, actualDuration)}>
        <h1>LECTORS</h1>
        <Table data={lectors} isLoading={isLoading} />
    </Profiler>
    </>
}

// Only for demo, this is wrong example of usage
export default memo(LectorsPage);