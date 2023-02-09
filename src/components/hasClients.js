export const hasClients = ({ job }) => {

    return (
        job.clients && job.clients[0] ?
            true
            : false
    );
}