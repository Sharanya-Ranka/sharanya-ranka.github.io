import type { ProfileData } from "../types";

export const portfolioData: ProfileData = {
  name: "Sharanya Ranka",
//   title: "Machine Learning Engineer & CS Researcher",
  bio: `Hello there! I enjoy learning about and tinkering with new technologies. Most recently, that curiosity has been focused on machine learning and AI, leading me to pursue a Master's in Computer Science at UC San Diego. Prior to grad school, I worked as a Quantitative Research Analyst in the Market Risk division at J.P. Morgan. These days, I'm most interested in machine learning research, production ML systems, and building useful AI-powered tools.
  
  Lets Connect!`,
  profileImageUrl: "/SharanyaRanka.jpg", // Replace with your actual image path or asset import
  socials: [
    {
      type: "linkedin",
      image_url:"/socials/linkedin.svg",
      redirect_url: "https://www.linkedin.com/in/sharanya-milind-ranka",
      display_name: "sharanya-ranka",
    },
    {
      type: "github",
      image_url:"/socials/github.svg",
      redirect_url: "https://github.com/Sharanya-Ranka",
      display_name: "sharanya-ranka",
    },
  ],
  projects: [
    {
      id: "recipe-fusion",
      title: "RecipeFusion",
      description: "An end-to-end machine learning application that uses fine-tuned open-weight language models to generate creative culinary recipe fusions through structured JSON and DAG representations.",
      imageUrl: "/projects/recipefusion.svg",
      githubUrl: "https://github.com/Sharanya-Ranka/RecipeFusionProd",
      appUrl: "https://master.d5oeo15dgeb35.amplifyapp.com/",
      tags: ["LLMs", "Qwen/Llama", "Fine-Tuning", "Python"]
    },
    // {
    //   id: "goal-pilot",
    //   title: "GoalPilot",
    //   description: "An agentic goal-tracking workflow application engineered using LangGraph and Python. Features a stateful worker orchestration architecture backed by a DynamoDB persistence handler and a modular custom calendar UI.",
    //   imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop",
    //   githubUrl: "https://github.com/yourusername/goal-pilot",
    //   tags: ["LangGraph", "Python", "DynamoDB", "React"]
    // },
    {
      id: "quick-label",
      title: "QuickLabel",
      description: "An active learning framework designed to label a large text dataset using a few examples. Leveraging Text Embeddings and Active Learning strategies, we can label datasets with ~80% accuracy with only ~100 user labeled examples.",
      imageUrl: "/projects/quicklabel.png",
      githubUrl: "https://github.com/Sharanya-Ranka/QuickLabel",
      appUrl: "https://main.d1cwi5hq26s827.amplifyapp.com/",
      tags: ["Active Learning", "Modal", "FastEmbed"]
    },
    {
      id: "connect4-ai",
      title: "Connect4 AI Framework",
      description: "A Connect4 web application deploying a fully client side Monte Carlo Tree Search (MCTS) agent optimized with Upper Confidence bounds applied to Trees (UCT), achieving an 83% win rate against humans.",
      imageUrl: "/projects/connect4ai.png",
      githubUrl: "https://github.com/Sharanya-Ranka/connect-4-ai-app",
      appUrl: "https://connect-4-ai-app.vercel.app/",
      tags: ["Reinforcement Learning", "MCTS", "AI Agents" , "Vercel"] // "AlphaZero",
    }
  ]
};