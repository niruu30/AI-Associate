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
        answer: "C"
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
        question: "Cloud Kicks is testing a new AI model. \nWhich approach aligns with Salesforce's Trusted AI Principle of Inclusivity?",
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
        answer: "A"
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
            { letter: "A", text: "Predictive AI uses machine learning to classify or predict outputs from its input data whereas generative AI uses machine learning to generate new and original output for a given input." },
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
        question: "Which data does Salesforce automatically exclude from marketing Cloud Einstein engagement model training to mitigate bias and ethical risks",
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
        question: "Cloud Kicks wants to optimize its business operations by incorporating AI into its CRM. \nWhat should the company do first to prepare its data for use with AI?",
        options: [
            { letter: "A", text: "Remove biased data." },
            { letter: "B", text: "Determine data availability." },
            { letter: "C", text: "Determine data outcomes." }
        ],
        answer: "B"
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
        answer: "C"
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
        question: "What is an implication of user consent in regard to AI data privacy?",
        options: [
            { letter: "A", text: "AI ensures complete data privacy by automatically obtaining user consent." },
            { letter: "B", text: "AI infringes on privacy when user consent is not obtained." },
            { letter: "C", text: "AI operates Independently of user privacy and consent." }
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
        answer: "A"
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
    {
        id: "q61",
        isMultiple: false,
        question: "Which field of AI is most suitable for this scenario?",
        options: [
            { letter: "A", text: "Natural language processing" },
            { letter: "B", text: "Computer vision" },
            { letter: "C", text: "Predictive analytics" }
        ],
        answer: "A"
    },
    {
        id: "q62",
        isMultiple: false,
        question: "Which type of bias results from data being labeled according to stereotypes?",
        options: [
            { letter: "A", text: "Association" },
            { letter: "B", text: "Societal" },
            { letter: "C", text: "Interaction" }
        ],
        answer: "A"
    },
    {
        id: "q63",
        isMultiple: false,
        question: "To avoid introducing unintended bias to an AI model, which type of data should be omitted?",
        options: [
            { letter: "A", text: "Transactional" },
            { letter: "B", text: "Engagement" },
            { letter: "C", text: "Demographic" }
        ],
        answer: "C"
    },
    {
        id: "q64",
        isMultiple: false,
        question: "Cloud Kicks wants to ensure that multiple records for the same customer are removed in Salesforce. \nWhich feature should be used to accomplish this?",
        options: [
            { letter: "A", text: "Duplicate management" },
            { letter: "B", text: "Trigger deletion of old records" },
            { letter: "C", text: "Standardized field names" }
        ],
        answer: "A"
    },
    {
        id: "q65",
        isMultiple: false,
        question: "Cloud Kicks learns of complaints from customers who are receiving too many sales calls and emails. \nWhich data quality dimension should be assessed to reduce these communication Inefficiencies? ",
        options: [
            { letter: "A", text: "Duplication" },
            { letter: "B", text: "Usage" },
            { letter: "C", text: "Consent" }
        ],
        answer: "A"
    },
    {
        id: "q66",
        isMultiple: false,
        question: " A data quality expert at Cloud Kicks want to ensure that each new contact contains at least an email address. \nWhich feature should they use to accomplish this? ",
        options: [
            { letter: "A", text: "Autofill" },
            { letter: "B", text: "Duplicate matching rule" },
            { letter: "C", text: "Validation rule " }
        ],
        answer: "C"
    },
    {
        id: "q67",
        isMultiple: false,
        question: "What are the key components of the data quality standard?",
        options: [
            { letter: "A", text: "Naming, formatting, Monitoring" },
            { letter: "B", text: "Accuracy, Completeness, Consistency" },
            { letter: "C", text: "Reviewing, Updating, Archiving" }
        ],
        answer: "B"
    },
    {
        id: "q68",
        isMultiple: false,
        question: "A marketing manager wants to use AI to better engage their customers. Which functionality provides the best solution? ",
        options: [
            { letter: "A", text: "Journey Optimization" },
            { letter: "B", text: "Bring Your Own Model" },
            { letter: "C", text: "Einstein Engagement" }
        ],
        answer: "C"
    },
    {
        id: "q69",
        isMultiple: false,
        question: "What is the key difference between generative and predictive AI?",
        options: [
            { letter: "A", text: "Generative AI creates new content based on existing data and predictive AI analyzes existing data." },
            { letter: "B", text: "Generative AI finds content similar to existing data and predictive AI analyzes existing data." },
            { letter: "C", text: "Generative AI analyzes existing data and predictive AI creates new content based on existing data." }
        ],
        answer: "A"
    },
    {
        id: "q70",
        isMultiple: false,
        question: "What are some key benefits of AI in improving customer experiences in CRM?",
        options: [
            { letter: "A", text: "Improves CRM security protocols, safeguarding sensitive customer data from potential breaches and threats" },
            { letter: "B", text: "Fully automates the customer service experience, ensuring seamless automated interactions with customers" },
            { letter: "C", text: "Streamlines case management by categorizing and tracking customer support cases, identifying topics, and summarizing case resolutions" }
        ],
        answer: "C"
    },
    {
        id: "q71",
        isMultiple: false,
        question: "What is the role of data quality in achieving AI business Objectives?",
        options: [
            { letter: "A", text: "Data quality is important for maintain  data storage limits." },
            { letter: "B", text: "Data quality is required to create accurate AI data insights." },
            { letter: "C", text: "Data quality is unnecessary because AI can work with all data types." }
        ],
        answer: "B"
    },
    {
        id: "q72",
        isMultiple: false,
        question: "A healthcare company implements an algorithm to analyze patient data and assist in medical diagnosis. \nWhich primary role does data Quality play in this AI application?",
        options: [
            { letter: "A", text: "Ensured compatibility of AI algorithms with the system's Infrastructure" },
            { letter: "B", text: "Reduced need for healthcare expertise in interpreting AI outputs" },
            { letter: "C", text: "Enhanced accuracy and reliability of medical predictions and diagnoses" }
        ],
        answer: "C"
    },
    {
        id: "q73",
        isMultiple: false,
        question: "In the context of Salesforce's Trusted AI Principles, what does the principle of Empowerment primarily aim to achieve?",
        options: [
            { letter: "A", text: "Empower users of all skill levels to build AI applications with clicks, not code." },
            { letter: "B", text: "Empower users to solve challenging technical problems using neural networks." },
            { letter: "C", text: "Empower users to contribute to the growing body of knowledge of leading AI research." }
        ],
        answer: "A"
    },
    {
        id: "q74",
        isMultiple: false,
        question: "What is a key challenge of human-AI collaboration in decision-making?",
        options: [
            { letter: "A", text: "Leads to more informed and balanced decision-making." },
            { letter: "B", text: "Creates a reliance on AI, potentially leading to less critical thinking and oversight." },
            { letter: "C", text: "Reduces the need for human involvement in decision-making processes." }
        ],
        answer: "B"
    },
    {
        id: "q75",
        isMultiple: false,
        question: "What can bias in AI algorithms in CRM lead to?",
        options: [
            { letter: "A", text: "Ethical challenges in CRM systems " },
            { letter: "B", text: "Advertising cost increases" },
            { letter: "C", text: "Personalization and targeted marketing changes" }
        ],
        answer: "A"
    },
    {
        id: "q76",
        isMultiple: false,
        question: "In the context of Salesforce's Trusted AI Principles what does the principle of Empowerment primarily aim to achieve?",
        options: [
            { letter: "A", text: "Empower users to off all skill level to build AI application with clicks, not code." },
            { letter: "B", text: "Empower users to contribute to the growing body of knowledge of leading AI research." },
            { letter: "C", text: "Empower users to solve challenging technical problems using neural networks." }
        ],
        answer: "A"
    },
    {
        id: "q77",
        isMultiple: false,
        question: "An administrator at Cloud Kicks wants to ensure that a field is set up on the customer record so their preferred name can be captured. \nWhich Salesforce field type should the administrator use to accomplish this?",
        options: [
            { letter: "A", text: "Multi-Select Picklist" },
            { letter: "B", text: "Text" },
            { letter: "C", text: "Rich Text Area" }
        ],
        answer: "B"
    },
    {
        id: "q78",
        isMultiple: false,
        question: "What are the potential consequences of an organization suffering from poor data quality?",
        options: [
            { letter: "A", text: "Low employee morale, stock devaluation, and inability to attract top talent"},
            { letter: "B", text: "Revenue loss, poor customer service, and reputational damage"},
            { letter: "C", text: "Technical debt, monolithic system architecture, and slow ETL throughout" }
        ],
        answer: "B"
    },
    {
        id: "q79",
        isMultiple: false,
        question: "How does a data quality assessment impact business outcome for companies using AI?",
        options: [
            { letter: "A", text: "Improves the speed of AI recommendations" },
            { letter: "B", text: "Accelerates the delivery of new AI solutions" },
            { letter: "C", text: "Provides a benchmark for AI predictions" }
        ],
        answer: "C"
    },
    {
        id: "q80",
        isMultiple: false,
        question: "Cloud Kicks plans to use automated chat as its primary support channel. \nWhich Einstein feature should they use?",
        options: [
            { letter: "A", text: "Discovery" },
            { letter: "B", text: "Bots" },
            { letter: "C", text: "Next Best Action" }
        ],
        answer: "B"
    },
];