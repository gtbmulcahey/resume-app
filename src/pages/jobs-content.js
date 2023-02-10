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
        primaryTechnologies: 'Agile, Azure, DevOps, C#, JavaScript, Ajax, REST, WebAPI, jQuery, documents stored on Cloud (AWS), staging and prod environments on AWS, Angular 1.5, Angular 2, Knockout, Dapper, CSS, HTML Sql Server, Bootstrap, Material',
        accomplishments: [
            'Helped company mature with tools and processes, unit test automation',
'Reviewed existing test cases for automation',
'Implemented large features such as compliance, compliance automation, resource allocation, cost modules and visual dashboards',
'Worked on cost modules including complex budget estimation using multiple factors, contingencies, equipment costs',
'Conducted hiring interviews. Mentored new employees.',
'Client list included 3M, Johnsonville Sausage, Grande Cheese and Schwan’s Company'

        ]
    },
    {
        name: 'Thomson Reuters, Sr. Software Engineer',
        startDate: 'March 2005',
        endDate: 'April 2015',
        primaryTechnologies: 'Primary Technologies: C#, .NET, REST. Some exposure to JavaScript and Agile',
        accomplishments: [
            'Developer on the Doc and Form Builder application. Doc and Form Builder is the Turbo Tax for legal forms. Westlaw Form builder improves efficiency by reducing data entry time and improving accuracy.',
'Approximately 325 concurrent users on the application at a peak time.',
'Developed new features, documented processes for information sharing.',
'Resolved many production, pre-production critical bugs, issues.',
'Implementation Lead on Intelligent Messaging Project',
'Drove the collaboration of many groups.',
'Domain lead for dockets and alerts on Westlaw Classic C#, .Net, supported estimated features',
'Mentored new employees',
'Service Oriented Architecture, Web Services: Created endpoints to our service so that UI could call middle, data logic layer. Queried APIs of lowest service layer to get information for our data objects layer.',
'Member of a 12-person technical team responsible for coding/enhancing award winning checkpoint tax accounting program. Checkpoint has approximately 180,000 active users or 5000 unique users per month and is deployed on 40 servers. The peak load of Checkpoint is 79,945 searches in 1 day.',
'Primary technologies used were Java and Websphere.'
        ]
    },
    {
        name: 'Travelers, Technical Analyst',
        startDate: 'June 1998',
        endDate: 'March 2005',
        primaryTechnologies: 'Java, DB2',
        accomplishments: [
'Member of one of the highest functioning application development teams in the company',
'Successfully troubleshoot applications in production',
'Met deadlines consistently with a high contribution',
'Mentored other team members on new tools and technology',
'Obtained new knowledge for the company about running Java on the mainframe and digital signatures.',
'Wrote technical papers with instructions for implementing items which were successfully implemented in other areas of the organization.',
'Coded high complexity areas of EJB Java applications and Junit test cases for policy processing systems',
'Designed web pages and UI navigation',
'Program PDF documents to display using IText',
'Provided support for applications moving to production',
'Refactored a large Java application to significantly improve performance and save future maintenance costs',
'Assisted with application rollout in service centers throughout the country',
'Mastered new technologies and platforms quickly',
        ]
    },
    {
        name: 'McQuay International, Product Development Engineer',
        startDate: 'March 1996',
        endDate: 'June 1998',
        primaryTechnologies: 'writing requirements, testing',
        accomplishments: [
            'Served on a team to support new air handler and software production', 
'Coordinated implementation of software changes',
'Solved manufacturing problems and improved plan productivity by using AutoCad and Selection Software to verify and correct NC output, design rules and flowcharts.',
'Designed programs using reports, forms, queries, macros, Visual Basic modules and complex data structures for multi-user environment.',
'Provided computer support and troubleshooting to PC’s in Windows environment',
'Wrote requirements for selection software for cabinetry, mixing boxes, economizers, face and bypass dampers'
        ]
    }
];

export default jobs;