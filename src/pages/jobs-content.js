const jobs = [
    {
        name: 'RBA Inc., Software Engineer',
        startDate: 'August 2020',
        endDate: 'Present',
        clients: [
            {
                name: 'CHRobinson',
                primaryTechnologies: 'C#, .NET 5.0, SqlServer, GitHub, Kafka, Cosmos, CQRS, Azure Functions, Azure Messaging, Terraform',
                accomplishments: [
                    'Wrote document batches to queue',
                    'Implemented dual write functionality for system with eventual consistency', 
                    'Added security with K8, Vault, Terraform',
                    'Implemented Cosmos dead letter queue using Azure function',
                    'Performed code reviews for other developers',
                    'Created regression tests, unit tests'
                ]
            },
            {
                name: 'RSM',
                primaryTechnologies: 'C#, .NET 5.0',
                accomplishments: [
                ]
            }
        ]       
    },    
    {
        name: 'DDMS Inc, Full-Stack Developer',
        startDate: 'April 2015',
        endDate: 'July 2020',
        primaryTechnologies: 'Agile, Azure, DevOps, C#, JavaScript, Ajax, REST, WebAPI, jQuery, documents stored on Cloud (AWS), staging and prod environments on AWS, Angular 1.5, Angular 2, Knockout, Dapper, CSS, HTML Sql Server, Bootstrap, Material'
        
    },
    {
        name: 'Thomson Reuters, Sr. Software Engineer',
        startDate: 'March 2005',
        endDate: 'April 2015',
        primaryTechnologies: 'Primary Technologies: C#, .NET, REST. Some exposure to JavaScript and Agile'
    },
    {
        name: 'Travelers, Technical Analyst',
        startDate: 'June 1998',
        endDate: 'March 2005',
        primaryTechnologies: 'Java, DB2'
    },
    {
        name: 'McQuay International, Product Development Engineer',
        startDate: 'March 1996',
        endDate: 'June 1998',
        primaryTechnologies: 'writing requirements, testing'
    }
];

export default jobs;