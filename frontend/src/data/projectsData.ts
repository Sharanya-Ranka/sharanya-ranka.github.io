export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  appUrl?: string; // Optional if a project doesn't have a live deployment yet
  tags: string[];
}

export interface ProfileData {
  name: string;
  title?: string;
  bio: string;
  profileImageUrl: string;
  projects: Project[];
}

export const portfolioData: ProfileData = {
  name: "Sharanya Ranka",
//   title: "Machine Learning Engineer & CS Researcher",
  bio: "Hello there! I love learning about and tinkering with new technologies. I'm a recent Masters graduate from UCSD where I studied Computer Science with a specialization in Machine Learning and AI. Previously, I've worked as a Quantitative Research Analyst in the Market Risk division at JP Morgan Chase.",
  profileImageUrl: "/SharanyaRanka.jpg", // Replace with your actual image path or asset import
  projects: [
    {
      id: "recipe-fusion",
      title: "RecipeFusion",
      description: "An end-to-end machine learning application that uses fine-tuned open-weight language models to generate and programmatically validate creative culinary recipe fusions through structured JSON and DAG-based steps.",
      imageUrl: "/projects/recipefusion.png",
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
      description: "An active learning framework designed to label a large text dataset using a few examples. Using Logistic Regression over Text Embeddings, we can label datasets with ~80% accuracy with only ~100 user labeled examples.",
      imageUrl: "/projects/quicklabel.png",
      githubUrl: "https://github.com/Sharanya-Ranka/QuickLabel",
      appUrl: "https://main.d1cwi5hq26s827.amplifyapp.com/",
      tags: ["Active Learning", "Modal", "FastEmbed"]
    },
    {
      id: "connect4-ai",
      title: "Connect4 AI Framework",
      description: "A high-performance Connect4 web application deploying a Monte Carlo Tree Search (MCTS) agent optimized with Upper Confidence bounds applied to Trees (UCT), achieving an 83% win rate against humans.",
      imageUrl: "/projects/connect4ai.png",
      githubUrl: "https://github.com/Sharanya-Ranka/connect-4-ai-app",
      appUrl: "https://connect-4-ai-app.vercel.app/",
      tags: ["MCTS", "AlphaZero", "AI Agents" , "Vercel"]
    }
  ]
};