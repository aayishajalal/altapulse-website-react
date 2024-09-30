// blogApi.js

// Sample blog data
export const blogs = [
  {
    id: 1,
    title: "Unlock the Power of WhatsApp Marketing for Your Business",
    imageSrc: "https://ik.imagekit.io/yuq4cit8f/whatsapp-icon-line-connection-circuit-board.jpg?updatedAt=1727617475369", // Add an image path here
    subtitle: "Your guide to leveraging WhatsApp for marketing success", // Add a subtitle
    description: "Learn how to effectively market your business using WhatsApp.", // Add a description
    content: [
      "In today’s fast-paced digital world, businesses must adapt to ever-evolving communication trends. Enter WhatsApp marketing – the game-changing tool for conversational marketing, allowing brands to build meaningful relationships with their customers.",
      "WhatsApp’s global dominance, with over 2 billion active users, makes it an essential part of any marketing strategy. By integrating the WhatsApp Business API, companies can automate interactions, send newsletters, run engaging campaigns, and deliver personalized offers to their audience.",
      "One standout benefit? A 98% message open rate, far exceeding traditional email marketing. WhatsApp marketing fosters authentic two-way conversations, helping brands increase conversions and build trust. This leads to stronger customer relationships, higher retention rates, and, ultimately, better sales.",
      "Additionally, businesses can leverage click-to-WhatsApp ads, connecting with potential customers through social media and instantly starting conversations. This seamless engagement boosts sales by creating high-intent, real-time interactions.",
      "Whether it's automating responses or running personalized contests, WhatsApp empowers companies to engage with customers like never before.",
      "In an increasingly crowded digital world, businesses can’t afford to ignore the power of WhatsApp. Ready to revolutionize your customer interactions? The future of marketing is already in your pocket—how will you use it to transform your brand?",
    ],
  },
  {
    id: 2,
    title: "Transform Your Customer Engagement with WhatsApp Chatbots",
    imageSrc: "https://ik.imagekit.io/yuq4cit8f/465688-PFW9ZG-697.jpg?updatedAt=1727616529502", // Add an image path here
    subtitle: "Engage customers 24/7 with chatbots", // Add a subtitle
    description: "Discover the potential of chatbots in enhancing customer engagement.", // Add a description
    content: [
      "In a world where immediacy matters, WhatsApp chatbots are redefining customer engagement. These automated bots allow businesses to communicate with customers 24/7, ensuring instant responses and continuous support.",
      "The beauty of WhatsApp chatbots is their seamless integration into marketing strategies. They can handle FAQs, product recommendations, and even personalized follow-ups, all without the need for human intervention. This not only saves time but also enhances customer satisfaction.",
      "But it doesn't stop there – chatbots can help drive lead generation and improve sales. From running contests to engaging in interactive conversations, they create a memorable user experience that encourages customers to opt-in and share more information. The more personalized the interaction, the higher the chance of conversion.",
      "With AI-powered chatbots, businesses can achieve new levels of efficiency by offering automated responses that adapt to user behavior. This not only makes customer interactions smoother but also fosters a deeper connection, making your brand more accessible and trustworthy.",
      "Ultimately, WhatsApp chatbots blend technology with personalization, helping businesses offer memorable and engaging customer experiences at scale.",
      "In a world where time is money, why not let chatbots do the heavy lifting? Your customers are ready to engage—are you prepared to deliver an experience that stands out from the rest?",
    ],
  },
];

// Function to get a blog by ID
export const getBlogById = (id) => {
  return blogs.find(blog => blog.id === parseInt(id, 10)); // Ensure parsing to number
};

// Function to get all blogs
export const getAllBlogs = () => {
  return blogs;
};
