import { PageTitle } from "../components/PageTitle";
import summary from "./summary-Content";

const SummaryPage = () => {

    return (
        <>
            <PageTitle title='Summary'></PageTitle>
            <div>{summary.experienceAndIndustries}</div>
        </>
    )
}

export default SummaryPage;