function useClients(job) {
    return job.clients && job.clients[0] ? true : false
}

export default useClients;