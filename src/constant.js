import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
//service images
import web from "./assets/images/services/web.png";
import app from "./assets/images/services/app.png";
import chat from "./assets/images/services/chat.png";
import game from "./assets/images/services/game.png";
import vrar from "./assets/images/services/vrar.png";
import mvp from "./assets/images/services/mvp.png";
import ai from "./assets/images/services/ai.png";
import data from "./assets/images/services/data.png";
import aicalling from "./assets/images/services/aicalling.png";
import {
  FaCogs,
  FaClock,
  FaUserFriends,
  FaAward,
  FaProjectDiagram,
  FaHeadset,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

import {
  FaChartLine,
  FaCalendarAlt,
  FaComments,
  FaCreditCard,
  FaBell,
  FaBox,
  FaChartBar,
} from "react-icons/fa";
import blogimage1 from "./assets/images/blog1-1.jpeg";
import blogimage2 from "./assets/images/blog1-2.jpeg";
import BlogPage from "./pages/Blog";

export { logoImg };

export const companyDetails = {
  phone: "+917008725766",
  whatsapp: "+917008725766",
  address:
    "Unit 101, Oxford Towers, 139, HAL Old Airport Road Kodihalli, Bangalore , KA, India- 560008",
  email: "example@gmail.com",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs",
    name: "Blog",
    element: <BlogPage />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

export const aiCallingAgentServices = [
  {
    id: 1,
    title: "24/7 Customer Support",
    icon: <FaHeadset className="text-6xl text-blue-400 mb-4" />,
    description:
      "Provide round-the-clock customer support with AI-powered calling agents. Handle inquiries, resolve issues, and ensure seamless customer experiences at any time.",
  },
  {
    id: 2,
    title: "Lead Generation & Qualification",
    icon: <FaChartLine className="text-6xl text-blue-400 mb-4" />,
    description:
      "Automate lead generation and qualification with intelligent AI agents. Engage prospects, ask tailored questions, and deliver high-quality leads to your sales team.",
  },
  {
    id: 3,
    title: "Appointment Scheduling",
    icon: <FaCalendarAlt className="text-6xl text-blue-400 mb-4" />,
    description:
      "Simplify appointment booking with AI calling agents. Manage schedules, send reminders, and reduce no-shows for a more efficient workflow.",
  },
  {
    id: 4,
    title: "Feedback & Survey Collection",
    icon: <FaComments className="text-6xl text-blue-400 mb-4" />,
    description:
      "Gather valuable customer insights with AI-driven feedback calls. Automate surveys, collect responses, and analyze data to improve your services.",
  },
  {
    id: 5,
    title: "Payment & Billing Assistance",
    icon: <FaCreditCard className="text-6xl text-blue-400 mb-4" />,
    description:
      "Streamline payment processes with AI agents. Handle billing inquiries, process transactions, and send payment reminders for a smoother customer experience.",
  },
  {
    id: 6,
    title: "Outbound Calling & Notifications",
    icon: <FaBell className="text-6xl text-blue-400 mb-4" />,
    description:
      "Automate outbound calls for promotions, reminders, and updates. Keep your customers informed and engaged with personalized AI-driven notifications.",
  },
  {
    id: 7,
    title: "Order Tracking & Updates",
    icon: <FaBox className="text-6xl text-blue-400 mb-4" />,
    description:
      "Provide real-time order updates with AI calling agents. Keep customers informed about their orders, deliveries, and service status effortlessly.",
  },
  {
    id: 8,
    title: "Customer Retention & Engagement",
    icon: <FaUserFriends className="text-6xl text-blue-400 mb-4" />,
    description:
      "Boost customer loyalty with personalized AI-driven engagement. Send tailored messages, follow-ups, and recommendations to keep customers coming back.",
  },
  {
    id: 9,
    title: "Business Analytics & Insights",
    icon: <FaChartBar className="text-6xl text-blue-400 mb-4" />,
    description:
      "Gain actionable insights with AI-powered analytics. Track call performance, customer satisfaction, and trends to make data-driven business decisions.",
  },
  {
    id: 10,
    title: "Custom AI Solutions",
    icon: <FaCogs className="text-6xl text-blue-400 mb-4" />,
    description:
      "Get tailor-made AI calling solutions designed for your unique business needs. Scale, adapt, and grow with flexible AI technology that evolves with you.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO of Innovative Tech Corp",
    img: require("./assets/images/testimonial1.png"),
    desc: "“Partnering with AIPROTOX has been nothing short of a revelation for our organization. Their unwavering commitment to ethical AI has not only streamlined our operations but has also resonated deeply with our core values”",
  },
  {
    id: 2,
    name: "Sarah Jardin",
    position: "Director of Operations at Green Future Ltd",
    img: require("./assets/images/testimonial2.png"),
    desc: "“The exceptional team at AIPROTOX took the time to thoroughly understand our unique challenges and crafted bespoke solutions that far exceeded our expectations.”",
  },
  {
    id: 3,
    name: "Velicia Jamez",
    position: "CTO of Health Innovations Group",
    img: require("./assets/images/testimonial3.png"),
    desc: "“AIPROTOX stands at the forefront of ethical artificial intelligence. Their invaluable insights and expertise have been instrumental as we navigate the intricate landscape of implementing AI technologies within our business.”",
  },
];

// all services
export const allServices = [
  {
    id: "1",
    img: web,
    title: "Web Development (Full Stack):",
    description:
      "Crafting seamless and scalable websites and web applications tailored to your business needs, ensuring a dynamic online presence.",
    detailContent:
      "In today's digital age, having a robust online presence is vital for businesses. Full-stack web development encompasses everything from the client-side interface to server-side logic, ensuring a seamless user experience. By leveraging the latest technologies and frameworks, our team creates websites that are not only visually appealing but also scalable and secure. Whether it's an e-commerce platform, a corporate website, or a custom web application, we tailor every project to meet your unique business requirements. From initial design to deployment, we ensure your online platform is built to last. Partner with us to transform your vision into a dynamic, user-friendly website that stands out in the digital world.",
  },
  {
    id: "2",
    img: app,
    title: "Mobile App Development:",
    description:
      "Building innovative mobile applications that enhance customer engagement and provide users with exceptional on-the-go experiences.",
    detailContent:
      "Mobile applications have become an integral part of everyday life, offering unparalleled convenience and accessibility. Our mobile app development services focus on creating user-centric applications that work seamlessly on both iOS and Android platforms. We specialize in developing apps that prioritize performance, intuitive design, and scalability. Whether it's a consumer-facing app or an enterprise solution, our team ensures it aligns with your business goals and engages your audience effectively. By integrating cutting-edge technologies and ensuring a smooth user experience, we help you connect with customers on-the-go and drive business growth. Let us bring your app idea to life with innovation and precision.",
  },
  {
    id: "3",
    img: chat,
    title: "Chatbot Development:",
    description:
      "Creating AI-powered chatbots to automate interactions, enhance customer support, and deliver personalized assistance 24/7.",
    detailContent:
      "As businesses grow, managing customer interactions efficiently becomes critical. AI-powered chatbots are a game-changer, enabling businesses to provide real-time assistance, automate repetitive tasks, and offer personalized solutions. Our chatbot development services focus on creating intelligent bots that understand user intent and deliver accurate responses. Whether it's for customer support, lead generation, or e-commerce assistance, our chatbots enhance user experience while reducing operational costs. With advanced natural language processing capabilities, our bots can seamlessly integrate with your existing platforms. Unlock the potential of 24/7 automated customer interaction with our cutting-edge chatbot solutions.",
  },
  {
    id: "4",
    img: game,
    title: "Game Development:",
    description:
      "Designing interactive and engaging games across platforms, blending creativity and technology to captivate audiences.",
    detailContent:
      "Gaming is not just entertainment—it's an art form that combines storytelling, design, and technology. Our game development services bring your ideas to life by creating immersive and interactive experiences. From concept creation and character design to coding and deployment, we handle every aspect of game development with precision. Whether you're targeting mobile gamers, console players, or PC enthusiasts, our games are designed to captivate and engage. Using state-of-the-art engines and tools, we ensure stunning graphics, smooth performance, and compelling gameplay. Collaborate with us to create games that resonate with audiences and stand out in the competitive gaming industry.",
  },
  {
    id: "5",
    img: vrar,
    title: "Virtual Reality (VR) and Augmented Reality (AR):",
    description:
      "Developing immersive experiences that merge virtual and real-world elements, revolutionizing industries like gaming, education, and retail.",
    detailContent:
      "Virtual and Augmented Reality are transforming how we interact with technology. By blending digital elements with the physical world, VR and AR create engaging, immersive experiences that captivate users. Our expertise in VR and AR development spans various industries, including gaming, education, healthcare, and retail. We design custom solutions that meet your business needs, from VR simulations for training to AR apps for enhanced shopping experiences. By leveraging the latest advancements in technology, we craft experiences that not only impress but also add value to your brand. Explore the future of technology with our VR and AR solutions.",
  },
  {
    id: "6",
    img: mvp,
    title: "MVP Development:",
    description:
      "Turning ideas into impactful products quickly with scalable Minimum Viable Products tailored to market needs.",
    detailContent:
      "Launching a new product can be a daunting task, but MVP development simplifies the process by focusing on core functionalities. Our MVP development services help businesses validate their ideas quickly while minimizing risks and costs. We collaborate closely with you to understand your vision and develop a product that addresses the needs of your target audience. By leveraging agile methodologies, we ensure quick iterations and continuous improvement. Whether you're a startup or an established enterprise, our MVP solutions are designed to provide a strong foundation for future growth. Bring your idea to market faster and smarter with our expert MVP development services.",
  },
  {
    id: "7",
    img: ai,
    title: "Artificial Intelligence Development:",
    description:
      "Building intelligent systems that automate processes, personalize experiences, and enable smarter decision-making.",
    detailContent:
      "Artificial Intelligence is revolutionizing industries by enabling smarter and more efficient systems. Our AI development services focus on creating intelligent solutions tailored to your business needs. From predictive analytics and natural language processing to computer vision and machine learning models, we deliver AI systems that solve complex problems and drive innovation. By automating processes and personalizing user experiences, our AI solutions help businesses achieve greater efficiency and customer satisfaction. Embrace the power of AI to stay ahead in the competitive landscape with our expertise and dedication to delivering cutting-edge technologies.",
  },
  {
    id: "8",
    img: data,
    title: "Data Analytics and Business Intelligence:",
    description:
      "Transforming raw data into actionable insights, empowering businesses to make informed, data-driven decisions.",
    detailContent:
      "Data is the new currency, and harnessing its power can give businesses a significant competitive edge. Our data analytics and business intelligence services help you uncover valuable insights hidden within your data. By leveraging advanced analytics tools and techniques, we transform raw data into meaningful dashboards and reports. Our solutions empower you to identify trends, predict outcomes, and make data-driven decisions with confidence. From descriptive analytics to predictive modeling, we cover the entire spectrum of data analysis. Take control of your data and turn it into a strategic asset with our tailored analytics solutions.",
  },
  {
    id: "9",
    img: aicalling,
    title: "AI Calling Agency:",
    description:
      "Revolutionizing customer interactions with AI-powered calling solutions for support, sales, and engagement.",
    detailContent:
      "Our AI Calling Agency service leverages artificial intelligence to streamline and enhance business communication. Whether it's providing round-the-clock customer support, automating lead qualification, scheduling appointments, or collecting feedback, our AI-driven calling solutions ensure seamless, efficient interactions. With intelligent automation, businesses can optimize their customer engagement strategies, reduce operational costs, and improve response times. From outbound notifications to personalized customer retention strategies, our AI-powered calling solutions are designed to elevate your business operations. Experience the future of business communication with our cutting-edge AI Calling Agency services.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];

// aicalling why choose us

export const aicallingwhychooseus = [
  {
    icon: <FaCogs className="text-4xl text-blue-400" />,
    title: "Advanced AI Technology",
    description:
      "We leverage cutting-edge natural language processing (NLP) and machine learning to deliver intelligent, human-like conversations.",
  },
  {
    icon: <FaClock className="text-4xl text-blue-400" />,
    title: "24/7 Availability",
    description:
      "Our AI calling agents are available round-the-clock, ensuring your customers always get the support they need.",
  },
  {
    icon: <FaUserFriends className="text-4xl text-blue-400" />,
    title: "Client-Centric Solutions",
    description:
      "We tailor our AI calling solutions to meet your unique business needs, ensuring maximum efficiency and customer satisfaction.",
  },
  {
    icon: <FaAward className="text-4xl text-blue-400" />,
    title: "Proven Results",
    description:
      "With a track record of success, we’ve helped businesses improve customer engagement, reduce costs, and boost revenue.",
  },
  {
    icon: <FaProjectDiagram className="text-4xl text-blue-400" />,
    title: "End-to-End Integration",
    description:
      "Our AI solutions seamlessly integrate with your existing systems, including CRM, databases, and communication platforms.",
  },
  {
    icon: <FaHeadset className="text-4xl text-blue-400" />,
    title: "Dedicated Support",
    description:
      "Our team provides ongoing support and optimization to ensure your AI calling system performs at its best.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-blue-400" />,
    title: "Secure & Reliable",
    description:
      "We prioritize data security and reliability, ensuring your customer interactions are always safe and uninterrupted.",
  },
  {
    icon: <FaLightbulb className="text-4xl text-blue-400" />,
    title: "Innovative Problem Solvers",
    description:
      "We continuously innovate to solve complex communication challenges, helping you stay ahead of the competition.",
  },
];

export const aiCallingtestimonials = [
  {
    id: 1,
    name: "John Davis",
    position: "CEO, GreenTech Solutions",
    img: require("./assets/images/testimonial.png"),
    desc: '"We were facing increasing demand for customer support, and the challenge was how to maintain the quality of our service as we scaled. [Your Company Name] provided us with an AI-driven solution that handled the majority of routine queries, allowing our team to focus on more complex issues. The difference has been remarkable. Our response times are much faster, and the efficiency of our operations has dramatically improved. We’ve been able to maintain high-quality service even as our business grows. It’s been an absolute game-changer."',
  },
  {
    id: 2,
    name: "Samantha Lee",
    position: "Marketing Director, Luxe Living",
    img: require("./assets/images/testimonial.png"),
    desc: '"We needed a solution to help us engage with leads and customers in a more efficient way. Partnering with [Your Company Name] to implement their AI calling system was one of the best decisions we’ve made. The AI interacts with leads in a personalized manner, qualifying them and collecting essential information, which has greatly improved the efficiency of our sales team. Not only have we seen an uptick in conversions, but the time our sales team now spends on calls is more focused and productive. It\'s been a huge win for our marketing and sales efforts."',
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    position: "Operations Manager, HealthFirst Clinic",
    img: require("./assets/images/testimonial.png"),
    desc: '"Appointment scheduling used to be a cumbersome task, with constant back-and-forth emails and phone calls. [Your Company Name] made the process a lot easier with their AI-powered scheduling system. Now, patients can book, reschedule, and cancel appointments at their convenience. Plus, the system automatically sends reminders, which has drastically reduced no-shows. This has saved us so much time, and our staff can now focus more on providing quality care rather than managing appointments."',
  },
  {
    id: 4,
    name: "David Hughes",
    position: "Founder, TechSpace",
    img: require("./assets/images/testimonial.png"),
    desc: '"Keeping in touch with customers and ensuring they feel valued has always been a priority for us. The AI-powered follow-up system from [Your Company Name] has been essential in this regard. It automatically sends personalized messages to clients based on their preferences and past interactions, ensuring that our communications are always relevant. This has helped us strengthen our customer relationships and significantly improve retention rates."',
  },
  {
    id: 5,
    name: "Linda Chang",
    position: "Operations Director, Elevate Consulting",
    img: require("./assets/images/testimonial.png"),
    desc: "\"As a growing business, we were looking for ways to scale without having to constantly hire additional staff. [Your Company Name]'s AI-powered solutions made that possible. Their system handles everything from customer inquiries to appointment scheduling and order tracking. This has allowed us to streamline our operations, save on costs, and provide better service without increasing our headcount. It's been the perfect solution for our growth.\"",
  },
];

export const blogData = [
  {
    id: 1,
    image: blogimage1,
    title: "AI A Must-Have for Modern Businesses",
    describtion: `In today's fast-changing and competitive world, businesses need artificial intelligence (AI) to stay ahead, work efficiently, and grow. No matter the size or location, companies that ignore AI may struggle to keep up. It's is no longer just an option; it has become essential worldwide.
`,
    sections: [
      {
        heading: "Improving Work Efficiency and Decision-Making",
        content:
          "AI helps businesses by automating repetitive tasks, so employees can focus on more important work. From AI-powered customer service chatbots to automatic data analysis, it makes work easier and faster. Many startups and companies are using it to increase productivity. AI also helps businesses analyse large amounts of data to make smarter decisions. It can predict trends, customer preferences, helping industries like e-commerce, finance, healthcare stay ahead.",
      },
      {
        heading: "Cutting Costs and Increasing Profits",
        content:
          "AI helps companies save money and increase profits. Predictive-AI can prevent machine breakdowns, reducing repair costs. It also improves supply chains, reduces waste, and automates marketing strategies to attract more customers. Businesses using AI-powered analytics can boost their earnings. AI-driven chatbots, virtual assistants, and product recommendations provide personalized services, leading to happier customers in online businesses.",
      },
      {
        heading: "AI for Security and Business Growth",
        imagetwo: blogimage2,
        content:
          "Cybersecurity is a major concern for businesses today. AI helps by detecting and stopping security threats in real time. This is especially important for businesses handling sensitive financial, healthcare, or government data. It also makes it easier for companies to expand. Whether it's a startup in local or a global company, AI-powered cloud solutions help businesses grow without needing expensive infrastructure.",
      },
      {
        heading: "AI the Future of Business",
        content:
          "AI is no longer just a tool it is a key part of business success in worldwide. It helps businesses work smarter, make better decisions, improve customer experience and stay competitive. Companies that are shifting to AI today will have a better future with more growth, innovation, and sustainability. Those who ignore it may fall behind in an AI-driven world. The future belongs to businesses that use AI to grow and succeed in digital economy.",
      },
    ],
    images: ["/images/ai-business-1.jpg", "/images/ai-business-2.jpg"],
  },
];
