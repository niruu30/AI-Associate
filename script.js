const quizData = [
    {
        id: "q1",
        isMultiple: false,
        question: "A customer using Einstein Prediction Builder is confused about why a certain prediction was made. \n Following Salesforce's Trusted AI Principle of Transparency, which customer information should be accessible on the Salesforce Platform?",
        options: [
            { letter: "A", text: "An explanation of how Prediction Builder works and a link to Salesforce's Trusted AI Principles." },
            { letter: "B", text: "An explanation of the prediction's rationale and a model card that describes how the model was created." },
            { letter: "C", text: "A marketing article of the product that clearly outlines the oroduct's capabilities and features." }
        ],
        answer: "B"
    },
    {
        id: "q2",
        isMultiple: false,
        question: "A developer is tasked with selecting a suitable dataset for training an AI model in Salesforce to accurately predict current customer behavior. \nWhat Is a crucial factor that the developer should consider during selection?",
        options: [
            { letter: "A", text: "Number of variables in the dataset" },
            { letter: "B", text: "Size of the dataset" },
            { letter: "C", text: "Age of the dataset" }
        ],
        answer: "B"
    },
    {
        id: "q3",
        isMultiple: false,
        question: "What should an organization do to enforce consistency across accounts for newly entered records?",
        options: [
            { letter: "A", text: "Merge all duplicate accounts into a single record when duplicate entries are detected." },
            { letter: "B", text: "Input the data exactly as it appears from the source, such as the company's website or social media" },
            { letter: "C", text: "Implement naming conventions or a predefined list of user-selectable values for organizationwide records." }
        ],
        answer: "C"
    },
    {
        id: "q4",
        isMultiple: false,
        question: "Cloud Kicks wants to evaluate its data quality to ensure accurate and up-to-date records. \nWhich type of records negatively impact data quality?",
        options: [
            { letter: "A", text: "Structured" },
            { letter: "B", text: "Complete" },
            { letter: "C", text: "Duplicate" }
        ],
        answer: "C"
    },
    {
        id: "q5",
        isMultiple: false,
        question: "Cloud Kicks wants to use an AI mode to predict the demand for shoes using historical data on sales and regional characteristics. \nWhat is an essential data quality dimension to achieve this goal?",
        options: [
            { letter: "A", text: "Reliability" },
            { letter: "B", text: "Volume" },
            { letter: "C", text: "Age" }
        ],
        answer: "A"
    },
    {
        id: "q6",
        isMultiple: false,
        question: "How does AI which CRM help sales representatives better understand previous customer interactions?",
        options: [
            { letter: "A", text: "Creates, localizes, and translates product descriptions" },
            { letter: "B", text: "Triggers personalized service replies" },
            { letter: "C", text: "Provides call summaries" }
        ],
        answer: "C"
    },
    {
        id: "q7",
        isMultiple: false,
        question: "What is a societal implication of excluding ethics in AI development?",
        options: [
            { letter: "A", text: "Faster and cheaper development" },
            { letter: "B", text: "More innovation and creativity" },
            { letter: "C", text: "Harm to marginalized communities" }
        ],
        answer: "C"
    },
    {
        id: "q8",
        isMultiple: false,
        question: "A sales manager is looking to enhance the quality of lead data in their CRM system. \nWhich process will most likely help the team accomplish this goal?",
        options: [
            { letter: "A", text: "Redesign the lead conversion process," },
            { letter: "B", text: "Review and update missing lead information." },
            { letter: "C", text: "Prioritize active leads quarterly." }
        ],
        answer: "B"
    },
    {
        id: "q9",
        isMultiple: false,
        question: "Cloud Kicks relies on data analysis to optimize its product recommendations for customers. \nHow will incomplete data quality impact the company's recommendations?",
        options: [
            { letter: "A", text: "The response time for the product" },
            { letter: "B", text: "The accuracy of the product" },
            { letter: "C", text: "The diversity of the product" }
        ],
        answer: "B"
    },
    {
        id: "q10",
        isMultiple: false,
        question: "A business analyst (BA) is preparing a new use case for Al. They run a report to check for null values in the attributes they plan to use. \nWhich data quality component Is the BA verifying by checking for null values?",
        options: [
            { letter: "A", text: "Duplication" },
            { letter: "B", text: "Usage" },
            { letter: "C", text: "Completeness" }
        ],
        answer: "C"
    },
    {
        id: "q11",
        isMultiple: false,
        question: "Which Einstein capability uses emails to create content for Knowledge articles?",
        options: [
            { letter: "A", text: "Generate" },
            { letter: "B", text: "Discover" },
            { letter: "C", text: "Predict" }
        ],
        answer: "A"
    },
    {
        id: "q12",
        isMultiple: false,
        question: "Why is it critical to consider privacy concerns when dealing with AI and CRM data?",
        options: [
            { letter: "A", text: "Ensures compliance with laws and regulations" },
            { letter: "B", text: "Confirms the data is accessible to all users" },
            { letter: "C", text: "Increases the volume of data collected" }
        ],
        answer: "A"
    },
    {
        id: "q13",
        isMultiple: false,
        question: "Which statement exemplifies Salesforces honesty guideline when training AI models?",
        options: [
            { letter: "A", text: "Minimize the AI models carbon footprint and environment impact during training." },
            { letter: "B", text: "Ensure appropriate consent and transparency when using AI-generated responses." },
            { letter: "C", text: "Control bias, toxicity, and harmful content with embedded guardrails and guidance." }
        ],
        answer: "B"
    },
    {
        id: "q14",
        isMultiple: false,
        question: "Cloud Kicks is testing a new AI model. \nWhich approach aligns with Salesforce's Trusted AI Principle of Incluslvity?",
        options: [
            { letter: "A", text: "Test only with data from a specific region or demographic to limit the risk of data leaks." },
            { letter: "B", text: "Rely on a development team with uniform backgrounds to assess the potential societal implications of the model." },
            { letter: "C", text: "Test with diverse and representative datasets appropriate for how the model will be used." }
        ],
        answer: "C"
    },
    {
        id: "q15",
        isMultiple: false,
        question: "What are the three commonly used examples of AI in CRM?",
        options: [
            { letter: "A", text: "Predictive scoring, reporting, Image classification" },
            { letter: "B", text: "Predictive scoring, forecasting, recommendations" },
            { letter: "C", text: "Einstein Bots, face recognition, recommendations" }
        ],
        answer: "B"
    },
    {
        id: "q16",
        isMultiple: false,
        question: "A financial institution plans a campaign for preapproved credit cards? \nHow should they implement Salesforce's Trusted AI Principle of Transparency?",
        options: [
            { letter: "A", text: "Communicate how risk factors such as credit score can impact customer eligibility." },
            { letter: "B", text: "Flag sensitive variables and their proxies to prevent discriminatory lending practices." },
            { letter: "C", text: "Incorporate customer feedback into the model's continuous training." }
        ],
        answer: "B"
    },
    {
        id: "q17",
        isMultiple: false,
        question: "The Cloud technical team is assessing the effectiveness of their AI development processes? \nWhich established Salesforce Ethical Maturity Model should the team use to guide the development of trusted AI solution?",
        options: [
            { letter: "A", text: "Ethical AI Prediction Maturity Model" },
            { letter: "B", text: "Ethical AI Process Maturity Model" },
            { letter: "C", text: "Ethical AI Practice Maturity Model" }
        ],
        answer: "B"
    },
    {
        id: "q18",
        isMultiple: false,
        question: "How does an organization benefit from using AI to personalize the shopping experience of online customers?",
        options: [
            { letter: "A", text: "Customers are more likely to share personal information with a site that personalizes their experience." },
            { letter: "B", text: "Customers are more likely to be satisfied with their shopping experience." },
            { letter: "C", text: "Customers are more likely to visit competitor sites that personalize their experience." }
        ],
        answer: "B"
    },
    {
        id: "q19",
        isMultiple: false,
        question: "Which best describes the different between predictive AI and generative AI?",
        options: [
            { letter: "A", text: "Predictive new and original output for a given input." },
            { letter: "B", text: "Predictive AI and generative have the same capabilities differ in the type of input they receive: predictive AI receives raw data whereas generation AI receives natural language." },
            { letter: "C", text: "Predictive AI uses machine learning to classes or predict output from its input data whereas generative AI does not use machine learning to generate its output." }
        ],
        answer: "A"
    },
    {
        id: "q20",
        isMultiple: false,
        question: "How does the 'right of least privilege' reduce the risk of handling sensitive personal data?",
        options: [
            { letter: "A", text: "By limiting how many people have access to data" },
            { letter: "B", text: "By reducing how many attributes are collected" },
            { letter: "C", text: "By applying data retention policies" }
        ],
        answer: "A"
    },
    {
        id: "q21",
        isMultiple: false,
        question: "Cloud Kicks wants to develop a solution to predict customers product interests based on historical data. The company found that employees from one region use a text field to capture the product category, while employees from all other locations use a plckllst. \nWhich data quality dimension is affected in this scenario?",
        options: [
            { letter: "A", text: "Completeness" },
            { letter: "B", text: "Accuracy" },
            { letter: "C", text: "Consistency" }
        ],
        answer: "C"
    },
    {
        id: "q22",
        isMultiple: false,
        question: "Cloud Kicks wants to evaluate the quality of its sales data. \nWhich first step should they take for the data quality assessment?",
        options: [
            { letter: "A", text: "Plan and align territories," },
            { letter: "B", text: "Run a new report or dashboard." },
            { letter: "C", text: "Identify business objectives." }
        ],
        answer: "C"
    },
    {
        id: "q23",
        isMultiple: false,
        question: "Which data does Salesforce automatically exclude from marketing Cloud Einstein engagement model training to mitigate bias and ethic...",
        options: [
            { letter: "A", text: "Geographic" },
            { letter: "B", text: "Demographic" },
            { letter: "C", text: "Cryptographic" }
        ],
        answer: "B"
    },
    {
        id: "q24",
        isMultiple: false,
        question: "What are some of the ethical challenges associated with AI development?",
        options: [
            { letter: "A", text: "Potential for human bias in machine learning algorithms and the lack of transparency in AI decision-making processes" },
            { letter: "B", text: "Implicit transparency of AI systems, which makes It easy for users to understand and trust their decisions" },
            { letter: "C", text: "Inherent neutrality of AI systems, which eliminates any potential for human bias in decision-making" }
        ],
        answer: "A"
    },
    {
        id: "q25",
        isMultiple: false,
        question: "Cloud Kicks implements a new product recommendation feature for its shoppers that recommends shoes of a given color to display to customers based on the color of the products from their purchase history. \nWhich type of bias is most likely to be encountered in this scenario?",
        options: [
            { letter: "A", text: "Confirmation" },
            { letter: "B", text: "Survivorship" },
            { letter: "C", text: "Societal" }
        ],
        answer: "A"
    },
    {
        id: "q26",
        isMultiple: false,
        question: "Cloud Kicks wants to use Einstein Prediction Builder to determine a customer's likelihood of buying specific products; however, data quality is a... \nHow can data quality be assessed quality?",
        options: [
            { letter: "A", text: "Build a Data Management Strategy." },
            { letter: "B", text: "Build reports to expire the data quality." },
            { letter: "C", text: "Leverage data quality apps from AppExchange" }
        ],
        answer: "C"
    },
    {
        id: "q27",
        isMultiple: false,
        question: "What is a sensitive variable that car esc to bias?",
        options: [
            { letter: "A", text: "Education level" },
            { letter: "B", text: "Country" },
            { letter: "C", text: "Gender" }
        ],
        answer: "C"
    },
    {
        id: "q28",
        isMultiple: false,
        question: "What is one technique to mitigate bias and ensure fairness in AI applications?",
        options: [
            { letter: "A", text: "Ongoing auditing and monitoring of data that is used in AI applications" },
            { letter: "B", text: "Excluding data features from the Al application to benefit a population" },
            { letter: "C", text: "Using data that contains more examples of minority groups than majority groups" }
        ],
        answer: "A"
    },
    {
        id: "q29",
        isMultiple: false,
        question: "What is a potential source of bias in training data for AI models?",
        options: [
            { letter: "A", text: "The data is collected in area time from sources systems." },
            { letter: "B", text: "The data is skewed toward is particular demographic or source." },
            { letter: "C", text: "The data is collected from a diverse range of sources and demographics." }
        ],
        answer: "B"
    },
    {
        id: "q30",
        isMultiple: false,
        question: "What is the best method to safeguard customer data privacy?",
        options: [
            { letter: "A", text: "Automatically anonymize all customer data." },
            { letter: "B", text: "Track customer data consent preferences." },
            { letter: "C", text: "Archive customer data on a recurring schedule." }
        ],
        answer: "B"
    },
    {
        id: "q31",
        isMultiple: false,
        question: "Which features of Einstein enhance sales efficiency and effectiveness?",
        options: [
            { letter: "A", text: "Opportunity List View, Lead List View, Account List view" },
            { letter: "B", text: "Opportunity Scoring, Opportunity List View, Opportunity Dashboard" },
            { letter: "C", text: "Opportunity Scoring, Lead Scoring, Account Insights" }
        ],
        answer: "C"
    },
    {
        id: "q32",
        isMultiple: false,
        question: "What does the term 'data completeness' refer to in the context of data quality?",
        options: [
            { letter: "A", text: "The degree to which all required data points are present in the dataset" },
            { letter: "B", text: "The process of aggregating multiple datasets from various databases" },
            { letter: "C", text: "The ability to access data from multiple sources in real time" }
        ],
        answer: "A"
    },
    {
        id: "q33",
        isMultiple: false,
        question: "What is machine learning?",
        options: [
            { letter: "A", text: "AI that can grow its intelligence" },
            { letter: "B", text: "AI that creates new content" },
            { letter: "C", text: "A data model used in Salesforce" }
        ],
        answer: "A"
    },
    {
        id: "q34",
        isMultiple: false,
        question: "Which type of bias imposes a system's values on others?",
        options: [
            { letter: "A", text: "Association" },
            { letter: "B", text: "Automation" },
            { letter: "C", text: "Societal" }
        ],
        answer: "B"
    },
    {
        id: "q35",
        isMultiple: false,
        question: "What should organizations do to ensure data quality for their AI initiatives?",
        options: [
            { letter: "A", text: "Collect and curate high-quality data from reliable sources." },
            { letter: "B", text: "Rely on AI algorithms to automatically handle data quality issues." },
            { letter: "C", text: "Prioritize model fine-tuning over data quality improvements." }
        ],
        answer: "A"
    },
    {
        id: "q36",
        isMultiple: false,
        question: "Which best describes the difference between predictive AI and generative Al?",
        options: [
            { letter: "A", text: "Predictive AI uses machine learning to classify or predict outputs from its input data whereas generative Al does not use machine learning to generate its output." },
            { letter: "B", text: "Predictive Al uses machine learning to classify or predict outputs from its input data whereas generative Al uses machine learning to generate new and original output for 4 given input" },
            { letter: "C", text: "Predictive Al and generative Al have the same capabilities but differ in the type of input they receive; predictive AT receives raw data whereas generative AT receives natural language." }
        ],
        answer: "B"
    },
    {
        id: "q37",
        isMultiple: false,
        question: "Cloud Kicks uses Einstein to generate predictions out is not seeing accurate results? \nWhat to a potential mason for this?",
        options: [
            { letter: "A", text: "Poor data quality" },
            { letter: "B", text: "The wrong product" },
            { letter: "C", text: "Too much data" }
        ],
        answer: "A"
    },
    {
        id: "q38",
        isMultiple: false,
        question: "What is a potential outcome of using poor-quality data in AI application?",
        options: [
            { letter: "A", text: "AI model training becomes slower and less efficient" },
            { letter: "B", text: "AI models may produce biased or erroneous results." },
            { letter: "C", text: "AI models become more interpretable" }
        ],
        answer: "B"
    },
    {
        id: "q39",
        isMultiple: false,
        question: "What is the role of Salesforce Trust AI principles in the context of CRM system?",
        options: [
            { letter: "A", text: "Guiding ethical and responsible use of AI" },
            { letter: "B", text: "Providing a framework for AI data model accuracy" },
            { letter: "C", text: "Outlining the technical specifications for AI integration" }
        ],
        answer: "A"
    },
    {
        id: "q40",
        isMultiple: false,
        question: "How does AI assist in lead qualification?",
        options: [
            { letter: "A", text: "Scores leads based on customer data" },
            { letter: "B", text: "Creates personalized SMS campaigns" },
            { letter: "C", text: "Automatically interacts with prospects" }
        ],
        answer: "A"
    },{
        id: "q41",
        isMultiple: false,
        question: "Which AI tool is a web of connections, guided by weights and biases?",
        options: [
            { letter: "A", text: "Neural networks" },
            { letter: "B", text: "Predictive Analytics" },
            { letter: "C", text: "Rules- based systems" },
            { letter: "D", text: "Mark this item for later review," }
        ],
        answer: "A"
    },
    {
        id: "q42",
        isMultiple: false,
        question: "Salesforce defines bias as using a person's Immutable traits to classify them or market to them. \nWhich potentially sensitive attribute is an example of an immutable trait?",
        options: [
            { letter: "A", text: "Financial status" },
            { letter: "B", text: "Nickname" },
            { letter: "C", text: "Email address" }
        ],
        answer: "A"
    },
    {
        id: "q43",
        isMultiple: false,
        question: "How does poor data quality affect predictive and generative AI models?",
        options: [
            { letter: "A", text: "Creates inaccurate results" },
            { letter: "B", text: "Increases raw data volume" },
            { letter: "C", text: "Decreases storage efficiency" }
        ],
        answer: "A"
    },
    {
        id: "q44",
        isMultiple: false,
        question: "What is the significance of explainability of trusted AI systems?",
        options: [
            { letter: "A", text: "Increases the complexity of AI models" },
            { letter: "B", text: "Enhances the security and accuracy of AI models" },
            { letter: "C", text: "Describes how Al models make decisions" }
        ],
        answer: "C"
    },
    {
        id: "q45",
        isMultiple: false,
        question: "A sales manager wants to use AI to help sales representatives log their calls quicker and more accurately. \nWhich functionality provides the best solution?",
        options: [
            { letter: "A", text: "Sales Dialer" },
            { letter: "B", text: "Call Summaries" },
            { letter: "C", text: "Auto-Generated Sales Tasks" }
        ],
        answer: "B"
    },
    {
        id: "q46",
        isMultiple: false,
        question: "A system admin recognizes the need to put a data management strategy in place. \nWhat is a key component of data management strategy?",
        options: [
            { letter: "A", text: "Naming Convention" },
            { letter: "B", text: "Data Backup" },
            { letter: "C", text: "Color Coding" }
        ],
        answer: "B"
    },
    {
        id: "q47",
        isMultiple: false,
        question: "What is a possible outcome of poor data quality?",
        options: [
            { letter: "A", text: "AI models maintain accuracy but have slower response times." },
            { letter: "B", text: "Biases in data can be inadvertently learned and amplified by AI systems." },
            { letter: "C", text: "AI predictions become more focused and less robust." }
        ],
        answer: "B"
    },
    {
        id: "q48",
        isMultiple: false,
        question: "A consultant conducts a series of Consequence Scanning workshops to support testing diverse datasets. \nWhich Salesforce Trusted AI Principles is being practiced?",
        options: [
            { letter: "A", text: "Transparency" },
            { letter: "B", text: "Inclusivity" },
            { letter: "C", text: "Accountability" }
        ],
        answer: "B"
    },
    {
        id: "q49",
        isMultiple: false,
        question: "Which action should be taken to develop and implement trusted generated AI with Salesforce's safety guideline in mind?",
        options: [
            { letter: "A", text: "Develop right-sized models to reduce our carbon footprint." },
            { letter: "B", text: "Create guardrails that mitigates toxicity and protect PII" },
            { letter: "C", text: "Be transparent when AI has created and automatically delivered content." }
        ],
        answer: "B"
    },
    {
        id: "q50",
        isMultiple: false,
        question: "What is a key characteristic of machine learning in the context of AI capabilities?",
        options: [
            { letter: "A", text: "Uses algorithms to learn from data and make decisions" },
            { letter: "B", text: "Relies on preprogrammed rules to make decisions" },
            { letter: "C", text: "Can perfectly mimic human intelligence and decision-making" }
        ],
        answer: "A"
    },
    {
        id: "q51",
        isMultiple: false,
        question: "Cloud Kicks' latest email campaign is struggling to attract new customers. \nHow can AI increase the company's customer email engagement?",
        options: [
            { letter: "A", text: "Create personalized emails" },
            { letter: "B", text: "Resend emails to inactive recipients" },
            { letter: "C", text: "Remove invalid email addresses" }
        ],
        answer: "A"
    },
    {
        id: "q52",
        isMultiple: false,
        question: "How does data quality impact the trustworthiness of Al-driven decisions?",
        options: [
            { letter: "A", text: "The use of both low-quality and high-quality data can improve the accuracy and reliability of AI-driven decisions." },
            { letter: "B", text: "High-quality data improves the reliability and credibility of Al-driven decisions, fostering trust among users." },
            { letter: "C", text: "Low-quality data reduces the risk of overfitting the model, improving the trustworthiness of the predictions." }
        ],
        answer: "B"
    },
    {
        id: "q53",
        isMultiple: false,
        question: "Cloud Kicks wants to implement AI features on its Salesforce Platform but has concerns about potential ethical and privacy challenges. \nWhat should they consider doing to minimize potential AI bias?",
        options: [
            { letter: "A", text: "Integrate AI models that auto-correct biased data." },
            { letter: "B", text: "Implement Salesforce's Trusted AI Principles." },
            { letter: "C", text: "Use demographic data to identify minority groups." }
        ],
        answer: "B"
    },
    {
        id: "q54",
        isMultiple: false,
        question: "What is an example of ethical debt?",
        options: [
            { letter: "A", text: "Violating a data privacy law and falling to pay fines" },
            { letter: "B", text: "Launching an AI feature after discovering a harmful bias" },
            { letter: "C", text: "Delaying an AI product launch to retrain an AI data model" }
        ],
        answer: "B"
    },
    {
        id: "q55",
        isMultiple: false,
        question: "What is the most likely impact that high-quality data will have on customer relationships?",
        options: [
            { letter: "A", text: "Increased brand loyalty" },
            { letter: "B", text: "Higher customer acquisition costs" },
            { letter: "C", text: "Improved customer trust and satisfaction" }
        ],
        answer: "C"
    },
    {
        id: "q56",
        isMultiple: false,
        question: "Cloud Kicks discovered multiple variations of state and country values in contact records. \nWhich data quality dimension is affected by this issue?",
        options: [
            { letter: "A", text: "Usage" },
            { letter: "B", text: "Accuracy" },
            { letter: "C", text: "Consistency" }
        ],
        answer: "C"
    },
    {
        id: "q57",
        isMultiple: false,
        question: "What is a Key consideration regarding data quality in AI implementation?",
        options: [
            { letter: "A", text: "Techniques from customizing AI features in Salesforce" },
            { letter: "B", text: "Data's role in training and fine-tuning Salesforce AI models" },
            { letter: "C", text: "Integration process of AI models with Salesforce workflows" }
        ],
        answer: "B"
    },
    {
        id: "q58",
        isMultiple: false,
        question: "What is the main focus of the Accountability principle in Salesforce's Trusted AI Principles?",
        options: [
            { letter: "A", text: "Safeguarding fundamental human rights and protecting sensitive data" },
            { letter: "B", text: "Taking responsibility for one's actions toward customers, partners, and society" },
            { letter: "C", text: "Ensuring transparency In Al-driven recommendations and predictions" }
        ],
        answer: "B"
    },
    {
        id: "q59",
        isMultiple: false,
        question: "A sales manager wants to improve their processes using AI in Salesforce? Which application of AI would be most beneficial?",
        options: [
            { letter: "A", text: "Lead scoring and opportunity forecasting" },
            { letter: "B", text: "Sales dashboards and reporting" },
            { letter: "C", text: "Data modeling and management" }
        ],
        answer: "A"
    },
    {
        id: "q60",
        isMultiple: false,
        question: "What is a benefit of data quality and transparency as it pertains to bias in generated AI?",
        options: [
            { letter: "A", text: "Chances of bias and mitigated" },
            { letter: "B", text: "Chances of bias are aggravated" },
            { letter: "C", text: "Chances of bias are remove" }
        ],
        answer: "A"
    },
];