import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "parameters",
    title: "Parameters",
  },
  {
    id: "result",
    title: "Result",
  },
  {
    id: "analysis",
    title: "Analysis",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Information Technology",
    icon: web,
  },
  {
    title: "Crew Composition",
    icon: mobile,
  },
  {
    title: "Worker Experience",
    icon: backend,
  },
  {
    title: "Construction Plan",
    icon: creator,
  },
];

const productivitys = [
  {
    title: "Number of Bricks laid in a Day",
    defaultValue:0.0,
    lowercap:400,
    uppercap:500,
    // productivity:"456.7",
    // 400-500 bricks in a day 
  },
  {
    title: "KGs of steel reinforcement bars in a day",
    defaultValue:0.0,
    lowercap:100,
    uppercap:200,
    // productivity:"135.8",
    // 100 to 200 kg of steel reinforcement bars in a day
  },
  {
    title: "Cubic meters of concrete per day",
    defaultValue:0.0,
    lowercap:5,
    uppercap:8,
    // 5 to 8 cubic meters of concrete per day
  },
  {
    title: "Square meters of formwork per day",
    defaultValue:0.0,
    lowercap:20,
    uppercap:30,
    // 20 to 30 square meters of formwork per day 
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const btns = [
  {
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    btnTitle: 'IT',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
  },
  {
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    btnTitle: 'Work Space',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
  },
  {
    backgroundColor: 'rgba(153, 102, 255, 0.2)',
    borderColor: 'rgba(153, 102, 255, 1)',
    btnTitle: 'Work Continuity',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
  },
  {
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    borderColor: 'rgba(255, 159, 64, 1)',
    btnTitle: 'Crew Composition',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
  },
  {
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    btnTitle: 'Work Method',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
  },
  {
    backgroundColor: 'rgba(255, 206, 86, 0.2)',
    borderColor: 'rgba(255, 206, 86, 1)',
    btnTitle: 'Rework',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
  },
  {
    backgroundColor: 'rgba(255, 99, 224, 0.2)',
    borderColor: 'rgba(255, 99, 224, 1)',
    btnTitle: 'Work Delay',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
  },
  {
    backgroundColor: 'rgba(54, 162, 135, 0.2)',
    borderColor: 'rgba(54, 162, 135, 1)',
    btnTitle: 'Safety',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
  },
  {
    backgroundColor: 'rgba(153, 108, 255, 0.2)',
    borderColor: 'rgba(153, 108, 255, 1)',
    btnTitle: 'Work Environment',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
  },
  {
    backgroundColor: 'rgba(255, 164, 64, 0.2)',
    borderColor: 'rgba(255, 164, 64, 1)',
    btnTitle: 'Worker Experience',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
  },
  {
    backgroundColor: 'rgba(67, 192, 192, 0.2)',
    borderColor: 'rgba(67, 192, 192, 1)',
    btnTitle: 'Work Difficulty',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
  },
  {
    backgroundColor: 'rgba(255, 209, 102, 0.2)',
    borderColor: 'rgba(255, 209, 102, 1)',
    btnTitle: 'Work Quantity',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
  },
];

// const lineChart2Labels = [
//   {
//     btnTitle: 'IT',
//     arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
//   },
// ]

const lineChart2Labels = [
  {
    btnTitle: 'IT',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
  },
  {
    btnTitle: 'Work Space',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'] 
  },
  {
    btnTitle: 'Work Continuity',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
  },
  {
    btnTitle: 'Crew Composition',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
  },
  {
    btnTitle: 'Work Method',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
  },
  {
    btnTitle: 'Rework',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
  },
  {
    btnTitle: 'Work Delay',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
  },
  {
    btnTitle: 'Safety',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
  },
  {
    btnTitle: 'Work Environment',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
  },
  {
    btnTitle: 'Worker Experience',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
  },
  {
    btnTitle: 'Work Difficulty',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
  },
  {
    btnTitle: 'Work Quantity',
    arr: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
  },
];


const experiences = [
  {
    title: "Worker Experience",
    company_name: "Tesla",
    icon: creator,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.445",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Workers have minimal experience in their roles, with little knowledge of job tasks and procedures.",
      "Workers have some experience, but they are still relatively new to their roles and require guidance.",
      "Workers have moderate experience, having performed similar tasks for a few years with some proficiency.",
      "Workers have extensive experience in their roles, with several years of practical experience and a deep understanding of job requirements.",
      "Workers are highly experienced veterans, with decades of experience and a wealth of knowledge in their field."
    ],
  },
  {
    title: "Worker Health",
    company_name: "Starbucks",
    icon: mobile,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.289",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Workers suffer from frequent health issues, leading to absenteeism and reduced productivity.",
      "Workers have occasional health problems, requiring sick leave and medical attention.",
      "Workers maintain average health, with minor ailments that do not significantly impact work.",
      "Workers enjoy good health, with few or no medical issues affecting their performance.",
      "Workers are in excellent health, maintaining peak physical and mental fitness for optimal productivity."
    ],
  },
  {
    title: "Information Technology",
    company_name: "Starbucks",
    icon: mobile,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.604",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Limited or outdated IT infrastructure and systems, hindering communication, data management, and project coordination.",
                               "Basic IT tools and technologies utilized, but with gaps or inefficiencies that impede workflow integration, collaboration, or decision-making.",
                               "Adequate IT resources available, supporting essential functions such as document management, communication, and data analysis to facilitate project execution.",
                               "Advanced IT solutions deployed, including project management software, BIM (Building Information Modeling), and IoT (Internet of Things) technologies for enhanced efficiency, transparency, and collaboration.",
                               "Cutting-edge IT capabilities leveraged, with state-of-the-art digital platforms, AI (Artificial Intelligence), and cloud computing driving innovation, automation, and optimization across all aspects of the construction project."]
  },
  {
    title: "Crew Composition",
    company_name: "Tesla",
    icon: creator,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.515",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Inadequate crew composition, with shortages of skilled workers, inexperienced personnel, or poor coordination among team members.",
                         "Suboptimal crew composition, with a mismatch of skills, personalities, or roles within the team, leading to inefficiencies or conflicts.",
                         "Balanced crew composition, with a diverse mix of skills, experience levels, and personalities that complement each other and support teamwork.",
                         "Well-organized crew composition, with clearly defined roles, responsibilities, and leadership structures fostering effective collaboration and communication.",
                         "Optimal crew composition, with a cohesive, highly skilled team that works synergistically to achieve project goals efficiently and effectively."],
  },
  {
    title: "Construction Plan",
    company_name: "Meta",
    icon: web,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.388",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Inadequate or incomplete construction plan, lacking detailed specifications, timelines, or resource allocation.",
                          "Basic construction plan in place, but with some gaps or ambiguities that require clarification or adjustment during execution.",
                          "Well-developed construction plan, outlining clear objectives, milestones, and requirements to guide project implementation effectively.",
                          "Comprehensive construction plan, incorporating thorough risk assessments, contingency plans, and stakeholder input for optimal project management.",
                          "Exceptional construction plan, featuring meticulous planning, innovative strategies, and alignment with project goals to ensure success and efficiency."],
  },
  {
    title: "Equipment Condition",
    company_name: "Starbucks",
    icon: mobile,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.283",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: [
        "Equipment is old, worn-out, or in poor condition, requiring frequent repairs.",
        "Equipment is functional but may have minor issues or signs of wear.",
        "Equipment is in average condition, maintained regularly, and operates reliably.",
        "Equipment is well-maintained, relatively new, and operates smoothly.",
        "Equipment is brand new, state-of-the-art, and in pristine condition."
    ],
  },
  {
    title: "Number of Equipment",
    company_name: "Tesla",
    icon: creator,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.354",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Very few pieces of equipment available, causing delays and inefficiencies.",
      "Limited number of equipment, which may require careful scheduling and management.",
      "Moderate number of equipment, sufficient for regular operations.",
      "Adequate number of equipment, ensuring smooth workflow and productivity.",
      "Abundant equipment resources, allowing for flexibility and scalability."
    ],
  },
  {
    title: "Equipment Service Time",
    company_name: "Shopify",
    icon: backend,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.290",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Equipment has been in service for many years, nearing the end of its usable life.",
      "Equipment has been in service for several years but is still operational.",
      "Equipment has moderate service time, with regular maintenance and occasional repairs.",
      "Equipment is relatively new, with minimal service time and few maintenance issues.",
      "Equipment is brand new, with no service time and no history of maintenance or repairs."
    ],
  },
  {
    title: "Materials quantity",
    company_name: "Meta",
    icon: web,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.310",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Insufficient quantity of materials, causing delays and interruptions in work.",
      "Limited quantity of materials, requiring careful management to avoid shortages.",
      "Adequate quantity of materials for ongoing work without major interruptions.",
      "Sufficient quantity of materials, allowing for smooth and continuous progress.",
      "Abundant quantity of materials, providing a surplus for unexpected demands."
      ],
  },
  {
    title: "Materials transport environment",
    company_name: "Starbucks",
    icon: mobile,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.297",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Poor transport conditions, with limited access to materials and frequent delays.",
      "Challenging transport environment, requiring special arrangements or alternative routes.",
      "Average transport conditions, with occasional delays but manageable logistics.",
      "Good transport infrastructure, facilitating efficient and timely delivery of materials.",
      "Excellent transport environment, with fast and reliable access to materials."
    ],
  },
  {
    title: "Materials procurement",
    company_name: "Tesla",
    icon: creator,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.332",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Inefficient procurement process, leading to delays and cost overruns.",
      "Slow procurement process, causing bottlenecks and project disruptions.",
      "Average procurement process, with occasional delays but generally manageable.",
      "Efficient procurement process, ensuring timely delivery of materials at competitive prices.",
      "Streamlined procurement process, leveraging technology and partnerships for optimal results."
    ],
  },
  {
    title: "Worker Capability",
    company_name: "Shopify",
    icon: backend,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.314",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Workers lack necessary skills and experience, leading to frequent errors and rework.",
      "Workers have limited capabilities, requiring close supervision and training.",
      "Workers possess average skills and experience, performing tasks competently with occasional supervision.",
      "Workers demonstrate above-average capabilities, contributing to efficient and high-quality work.",
      "Highly skilled and experienced workers, capable of handling complex tasks independently."
    ],
  },
  {
    title: "Worker Sense of Responsibility",
    company_name: "Meta",
    icon: web,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.351",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Workers show little accountability or commitment to their tasks, leading to negligence and low productivity.",
      "Workers have inconsistent levels of responsibility, requiring constant monitoring and reminders.",
      "Workers demonstrate a moderate sense of responsibility, completing tasks reliably with occasional supervision.",
      "Workers take ownership of their responsibilities, showing initiative and reliability in their work.",
      "Workers exhibit a strong sense of responsibility, going above and beyond to ensure project success."
    ],
  },
  {
    title: "Worker Education",
    company_name: "Shopify",
    icon: backend,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.379",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Workers have limited formal education, with only basic qualifications or no formal schooling.",
      "Workers have completed some secondary education or vocational training programs.",
      "Workers have completed high school or equivalent education, providing a foundational level of knowledge and skills.",
      "Workers have completed post-secondary education or specialized training relevant to their roles.",
      "Workers hold advanced degrees or professional certifications, demonstrating expertise in their field."
    ],
  },
  {
    title: "Worker Training",
    company_name: "Meta",
    icon: web,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.306",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Workers have received minimal training, with limited exposure to job-specific skills and procedures.",
      "Workers have undergone basic training programs, covering essential job functions and safety protocols.",
      "Workers have received moderate training, including specialized courses or on-the-job training sessions.",
      "Workers have undergone extensive training programs, acquiring advanced skills and certifications relevant to their roles.",
      "Workers receive ongoing training and development opportunities, staying updated on industry best practices and emerging technologies."
    ],
  },
    {
    title: "Worker Expertise",
    company_name: "Starbucks",
    icon: mobile,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.384",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Workers have limited expertise, lacking in-depth knowledge or specialized skills required for their roles.",
                         "Workers possess basic expertise in their field, with proficiency in fundamental tasks and procedures.",
                         "Workers demonstrate moderate expertise, showing competency in a range of job-related skills and techniques.",
                         "Workers exhibit advanced expertise, possessing specialized knowledge and skills that set them apart in their field.",
                         "Workers are recognized experts in their domain, with unparalleled proficiency and contributions to their industry."],
  },
  {
    title: "Worker Motivation",
    company_name: "Tesla",
    icon: creator,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.328",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Workers display low motivation, showing little enthusiasm or interest in their work.",
                          "Workers have sporadic motivation, with fluctuating levels of engagement and commitment.",
                          "Workers demonstrate average motivation, completing tasks with reasonable effort and dedication.",
                          "Workers are highly motivated, showing initiative and enthusiasm in their job performance.",
                          "Workers exhibit exceptional motivation, going above and beyond expectations to achieve excellence in their work."],
  },
  {
    title: "Worker Attitude",
    company_name: "Shopify",
    icon: backend,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.365",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Workers have a negative attitude, displaying cynicism, resistance, or hostility towards their work and colleagues.",
                        "Workers have a neutral attitude, showing indifference or apathy towards their job responsibilities.",
                        "Workers maintain a positive attitude, approaching tasks with optimism and a willingness to contribute.",
                        "Workers have a proactive attitude, actively seeking solutions and opportunities for improvement.",
                        "Workers possess an exemplary attitude, fostering a culture of collaboration, positivity, and success."],
  },
  {
    title: "Work Space",
    company_name: "Meta",
    icon: web,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.544",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Work space is cramped, disorganized, or lacking in essential amenities, hindering productivity and comfort.",
                   "Work space is functional but basic, with minimal amenities and limited space for movement or collaboration.",
                   "Work space is adequate, providing essential facilities and resources for carrying out job tasks efficiently.",
                   "Work space is well-designed and equipped, optimizing comfort, organization, and functionality for enhanced productivity.",
                   "Work space is state-of-the-art, incorporating cutting-edge technologies and ergonomic features to support peak performance and creativity."],
  },
  {
    title: "Prefabrication",
    company_name: "Starbucks",
    icon: mobile,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.451",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Minimal prefabrication is utilized, with most components or structures built on-site from raw materials.",
                       "Some prefabrication methods are employed, such as pre-cut materials or modular components, to streamline construction processes.",
                       "Moderate prefabrication is integrated into construction projects, reducing on-site labor and construction time through prefabricated elements.",
                       "Extensive prefabrication techniques are adopted, with a significant portion of the project completed off-site and assembled on-site for efficiency and quality control.",
                       "Prefabrication is maximized, with entire structures or modules fabricated off-site using advanced manufacturing technologies and assembled with minimal on-site work."],
  },
  {
    title: "Working Field Accessibility",
    company_name: "Tesla",
    icon: creator,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.371",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Limited accessibility to the work site, with challenges such as remote locations, difficult terrain, or restricted entry points.",
                                    "Moderate accessibility, with some obstacles or constraints that require careful planning and navigation.",
                                    "Adequate accessibility, allowing for smooth movement of personnel, equipment, and materials to and from the work site.",
                                    "Good accessibility, with well-maintained roads, pathways, or transportation options facilitating easy access to the work site.",
                                    "Excellent accessibility, with optimal infrastructure and transportation links ensuring seamless movement and logistics management."],
  },
  {
    title: "Advance Work",
    company_name: "Shopify",
    icon: backend,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.362",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Minimal planning or preparation done in advance, resulting in reactive decision-making and rushed execution.",
                     "Some advance work completed, but significant gaps or oversights remain, leading to inefficiencies or delays.",
                     "Moderate level of advance work undertaken, with essential tasks and preparations completed to facilitate smooth project execution.",
                     "Extensive advance work conducted, including thorough planning, risk assessments, and resource allocation to mitigate potential challenges.",
                     "Comprehensive advance work carried out, with detailed planning, contingency measures, and stakeholder engagement to ensure project success and resilience."],
  },
  {
    title: "Work Method",
    company_name: "Meta",
    icon: web,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.497",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Outdated or inefficient work methods used, resulting in wastage of time, resources, or effort.",
                    "Some improvements made to work methods, but there are still opportunities for optimization and streamlining.",
                    "Established work methods in place, providing a structured approach to task execution and quality control.",
                    "Enhanced work methods adopted, incorporating best practices, technology, and innovation for improved efficiency and effectiveness.",
                    "State-of-the-art work methods implemented, leveraging cutting-edge techniques, automation, and continuous improvement principles to achieve peak performance and productivity."],
  },
  {
    title: "Work Environment",
    company_name: "Starbucks",
    icon: mobile,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.478",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Poor work environment conditions, characterized by safety hazards, inadequate facilities, or uncomfortable working conditions.",
                         "Substandard work environment, with some improvements needed to enhance comfort, cleanliness, or safety.",
                         "Acceptable work environment, meeting basic standards for safety, cleanliness, and comfort to support productivity.",
                         "Good work environment, with well-maintained facilities, ergonomic design, and safety measures in place to promote employee well-being and performance.",
                         "Excellent work environment, providing a supportive, inspiring, and conducive setting for optimal productivity, creativity, and collaboration."],
  },
  {
    title: "Work Difficulty",
    company_name: "Shopify",
    icon: backend,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.486",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Low work difficulty, involving routine tasks or activities that require minimal skill or effort to complete.",
                        "Some challenges present in the work, requiring moderate skill, problem-solving, or physical exertion to overcome.",
                        "Moderate work difficulty, with a mix of routine and complex tasks that demand attention to detail, creativity, or specialized knowledge.",
                        "High work difficulty, involving complex or demanding tasks that require advanced skills, expertise, or experience to execute successfully.",
                        "Very high work difficulty, with exceptionally challenging or specialized tasks that demand exceptional skill, expertise, or innovation to accomplish."],
  },
  {
    title: "Work quantity",
    company_name: "Shopify",
    icon: backend,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.439",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: [
        "Insufficient work quantity, leading to underutilization of resources and idle time for workers.",
        "Limited work quantity, requiring careful management of resources to avoid overstaffing and inefficiencies.",
        "Moderate work quantity, allowing for steady progress without overwhelming the workforce or causing bottlenecks.",
        "Sufficient work quantity, ensuring optimal utilization of resources and maintaining a balanced workload.",
        "Abundant work quantity, providing ample opportunities for productivity and utilization of available resources."
    ],
  },
  {
    title: "Manager capability",
    company_name: "Shopify",
    icon: backend,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.365",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: [
        "Limited manager capability, with supervisors lacking the necessary skills or experience to effectively lead and manage teams.",
        "Developing manager capability, where supervisors are gaining experience and improving their leadership skills but may still face challenges.",
        "Competent manager capability, with supervisors demonstrating proficiency in managing teams, tasks, and project execution.",
        "Advanced manager capability, where supervisors possess strong leadership qualities, strategic thinking, and effective decision-making abilities.",
        "Exceptional manager capability, with supervisors being recognized as industry leaders, capable of driving successful project outcomes through visionary leadership and innovative management practices."
    ],
  },
  {
    title: "Management system",
    company_name: "Shopify",
    icon: backend,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.463",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: [
        "Inefficient management system, characterized by disorganized processes, lack of coordination, and poor communication channels.",
        "Developing management system, with efforts underway to streamline processes, improve communication, and implement basic project management tools.",
        "Established management system, where structured processes, clear communication channels, and standardized procedures contribute to efficient project execution.",
        "Advanced management system, incorporating technology, data-driven decision-making, and continuous improvement initiatives for enhanced project management effectiveness.",
        "Best-in-class management system, leveraging cutting-edge practices, innovation, and adaptability to drive excellence in project management and achieve superior outcomes."
    ]
  },
  {
    title: "Design Documents",
    company_name: "Starbucks",
    icon: mobile,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.369",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Insufficient or outdated design documents, lacking essential details, dimensions, or specifications required for construction.",
                         "Basic design documents provided, but with some discrepancies, inconsistencies, or missing information that may lead to confusion or errors.",
                         "Adequate design documents available, providing clear and accurate instructions, drawings, and specifications to guide construction activities.",
                         "High-quality design documents prepared, incorporating feedback from stakeholders, compliance with regulations, and attention to detail for precision and clarity.",
                         "Exemplary design documents produced, featuring innovative concepts, thorough documentation, and visualizations that facilitate efficient and effective construction processes."],

  },
  {
    title: "Permission",
    company_name: "Tesla",
    icon: creator,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.348",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Delayed or incomplete permission obtained, resulting in disruptions, legal issues, or project delays.",
                   "Some permissions secured, but with lingering approvals pending or administrative hurdles slowing down progress.",
                   "Essential permissions granted, allowing construction activities to proceed without major obstacles or delays.",
                   "Expedited permission process completed, with proactive engagement with authorities, stakeholders, and community members to streamline approvals.",
                   "Swift and comprehensive permission obtained, leveraging strong relationships, proactive communication, and compliance measures to expedite approvals and ensure project continuity."],
  },
  {
    title: "Work Order",
    company_name: "Shopify",
    icon: backend,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.337",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Inadequate or ambiguous work orders issued, leading to confusion, misunderstandings, or misallocation of resources.",
                   "Some work orders provided, but with inconsistencies, delays, or changes that disrupt workflow or cause inefficiencies.",
                   "Clear and timely work orders issued, outlining specific tasks, deadlines, and expectations to facilitate smooth execution and accountability.",
                   "Detailed and well-coordinated work orders distributed, incorporating input from stakeholders, prioritization of tasks, and allocation of resources for optimized project management.",
                   "Precision-engineered work orders dispatched, featuring advanced scheduling, tracking, and communication tools to ensure seamless coordination and execution of tasks."],
  },
  {
    title: "Claim",
    company_name: "Meta",
    icon: web,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.423",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Minimal or no claims filed, indicating few disputes, grievances, or disagreements arising during construction.",
              "Some claims raised, but with limited impact on project progress or budget due to swift resolution or minor issues.",
              "Moderate number of claims filed, requiring attention and negotiation to resolve conflicts, address changes, or mitigate risks to project outcomes.",
              "Significant claims submitted, necessitating thorough review, documentation, and negotiation to protect project interests and minimize disruptions.",
              "Substantial or complex claims lodged, involving legal proceedings, arbitration, or mediation to resolve disputes and safeguard project viability and reputation."],

  },
  {
    title: "Safety/Accidents",
    company_name: "Starbucks",
    icon: mobile,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.436",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["High incidence of safety violations or accidents, posing significant risks to workers, property, and project timeline.",
                         "Some safety incidents reported, highlighting areas for improvement in hazard identification, training, or enforcement of safety protocols.",
                         "Moderate safety performance, with proactive measures taken to prevent accidents, ensure compliance with regulations, and promote a culture of safety.",
                         "Good safety record, with minimal incidents or injuries due to robust safety programs, training, and supervision.",
                         "Excellent safety performance, achieving zero accidents or injuries through comprehensive safety initiatives, continuous improvement, and employee engagement."],

  },
  {
    title: "Work Delay",
    company_name: "Tesla",
    icon: creator,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.443",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Frequent and prolonged delays in construction activities, resulting in schedule overruns, cost escalations, and client dissatisfaction.",
                   "Some delays experienced, often due to unforeseen circumstances, weather conditions, or supply chain disruptions.",
                   "Occasional delays occur, but are managed effectively through proactive planning, risk mitigation, and resource allocation strategies.",
                   "Rare delays impact project timeline, with quick response and mitigation measures deployed to minimize schedule impacts and maintain progress.",
                   "Minimal to no delays encountered, thanks to meticulous planning, streamlined processes, and proactive management of project risks and uncertainties."],

  },
  {
    title: "Rework",
    company_name: "Shopify",
    icon: backend,
    iconBg: "#383E56",
    Pearson_correlation: "Pearson correlation - 0.450",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Excessive rework required due to poor quality, errors, or misinterpretation of design documents, leading to wasted time, resources, and frustration.",
               "Some rework necessary to address minor defects, discrepancies, or changes in project scope that impact construction progress or quality standards.",
               "Moderate amount of rework undertaken to rectify issues, ensure compliance with specifications, or meet client expectations without significant disruption to project flow.",
               "Limited rework needed, with robust quality control measures, inspections, and corrective actions preventing major defects or deviations from project requirements.",
               "Negligible rework performed, indicating high-quality workmanship, effective communication, and attention to detail throughout the construction process."],
  },
  {
    title: "Work Continuity",
    company_name: "Meta",
    icon: web,
    iconBg: "#E6DEDD",
    Pearson_correlation: "Pearson correlation - 0.540",
    Significance_two_tailed: "Significance (two-tailed) - 0.033",
    options: ["Disrupted workflow, with frequent stoppages, interruptions, or gaps in construction activities due to logistical, financial, or organizational issues.",
                        "Some disruptions to work continuity, caused by external factors, supply chain disruptions, or unforeseen events that require adjustments or rescheduling.",
                        "Fairly consistent work continuity, with occasional challenges or setbacks that are promptly addressed to maintain project momentum and progress.",
                        "Good work continuity achieved, with stable workflow, efficient resource allocation, and proactive risk management ensuring steady progress towards project milestones.",
                        "Excellent work continuity maintained, with seamless coordination, adaptive strategies, and resilient operations that overcome obstacles and ensure uninterrupted progress."],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, productivitys, btns, lineChart2Labels};
