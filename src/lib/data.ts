type Experience = {
    company: string;
    title: string;
    period: string;
    location?: string;
    description: string;
};

export const experiences: Experience[] = [
    {
        company: "Sony Interactive Entertainment",
        title: 'Principal Software Engineer',
        period: '2016 - Present',
        location: 'San Francisco, CA',
        description:
            "Port and maintain WebKit / JavaScriptCore open source project to our PlayStation platform."
          + "Experty of network stack, memory allocation and memory usage optimization. Maintaining"
          + "tools to support building, testing and debugging. Build a system to automate merging from"
          + "upstream to downstream branch. Port latest memory allocation engine to our platform to"
          + "achive 10% resident memory reduction."
    },
    {
        company: "Kinoma",
        title: 'Stuff Software Engineer',
        period: '2012 - 2016',
        location: 'Santa Clara, CA',
        description:
            "Kinoma (they changed their name from Kinoma to Moddable in 2016) was software team in"
          + "Marvell Semiconductor to build and maintain JavaScript platform which runs on embedded world."
          + "Kinoma was the one of the first company to release ECMAScript 2016 engine which covers 98% of"
          + "features at that time while most other engines were around 70-80%. I implemented many network"
          + "stack protocols, such as WebSocket, MQTT, COAP and HTTP/2 on it, JavaScript natively or using C."

    },
];
