import { useState } from "react";
import '../styles/Projects.css';
import ProjectCard from "./Card/ProjectCard";

const Projects = () => {
  const [toggle, setToggle] = useState("All");
  const img = "";
  const projects = [
    {
      "id": 2,
      "title": "Movix (movie app)",
      "date": "Dec 17, 2023 - Dec 29, 2023",
      "technologies": ["React.js", "Redux.js", "Tailwind CSS", "Bootstrap", "JavaScript", "HTML"],
      "description": "Movix is a dynamic movie application built using React.js and Redux for state management, integrated with The Movie Database (TMDb) API to provide real-time data on movies, TV shows, and actors. The app offers users an engaging platform to explore trending movies, search for specific titles, and view detailed information about each movie, including ratings, trailers, and cast details.",
      "image": "https://github.com/yashvardhan8787/movix/image.jpg",
      "tags": ["movie", "api", "web app"],
      "category": "web app",
      "github": "https://github.com/yashvardhan8787/movix",
      "webapp": "",
      "member": []
    },
    {
      "id": 3,
      "title": "E-commerce website",
      "date": "Dec 1, 2023 - Dec 17, 2023",
      "technologies": ["React.js", "Express.js", "CSS", "HTML", "Redux", "Tailwind CSS"],
      "description": "An e-commerce website is developed using React.js to build a dynamic, responsive user interface. The platform allows users to browse through product listings, search for items, view detailed product pages, and manage their shopping cart. Key features include product filtering, sorting, and a user-friendly checkout process. The website is designed to provide a seamless and interactive shopping experience with smooth navigation and real-time updates. The front end is styled with modern UI libraries like Bootstrap or Tailwind CSS, ensuring a sleek and responsive design across all devices.",
      "image": "https://your-website.com/image.jpg",
      "tags": ["e-commerce", "react", "web app"],
      "category": "web app",
      "github": "https://github.com/yashvardhan8787/myntra-clone-",
      "webapp": "",
      "member": []
    },
    {
      "id": 4,
      "title": "Weather app",
      "date": "",
      "technologies": ["react.Js", "JavaScript", "HTML", "CSS", "Bootstrap"],
      "description": "The weather app is a dynamic and user-friendly application designed to provide real-time weather updates and forecasts. The app allows users to check current weather conditions, view hourly and weekly forecasts, and receive alerts for severe weather. The main features include a clean and intuitive user interface, real-time temperature, humidity, wind speed, and precipitation information. The app also supports multiple locations, allowing users to track weather conditions in different cities simultaneously.",
      "image": "https://weatherapp-chi-one.vercel.app/image.jpg",
      "tags": ["weather", "api", "web app"],
      "category": "web app",
      "github": "https://weatherapp-chi-one.vercel.app/",
      "webapp": "https://weatherapp-chi-one.vercel.app/",
      "member": []
    },
    {
      "id": 5,
      "title": "Inventory Management System",
      "date": "",
      "mentor": "Darshan Makrani",
      "technologies": [".Net Core 8.0", "MVC architecture", "C#", "HTML", "Bootstrap"],
      "description": "Developed using .NET Core MVC 8.0, this inventory management system provides businesses with a robust solution to track and manage their inventory in real-time. The system offers features such as product categorization, stock level monitoring, order processing, and automated reordering. With a user-friendly interface, it enables efficient management of inventory across multiple locations.",
      "image": "https://github.com/yashvardhan8787/InventoryManagement.git/image.jpg",
      "tags": ["inventory", "management", "web app"],
      "category": "web app",
      "github": "https://github.com/yashvardhan8787/InventoryManagement.git",
      "webapp": "",
      "member": []
    }
  ];

  return (
    <div className="project-container">
      <div className="project-wrapper" id="projects">
        <h2 className="project-title">Projects</h2>
        <p className="project-desc">
          Here are some of my projects.
        </p>

        <div className="project-toggle-group">
          <button
            className={`project-btn ${toggle === "All" ? "active" : ""}`}
            onClick={() => setToggle("All")}
          >
            All
          </button>
          <button
            className={`project-btn ${toggle === "web app" ? "active" : ""}`}
            onClick={() => setToggle("web app")}
          >
            Web Applications
          </button>
          <button
            className={`project-btn ${toggle === "android app" ? "active" : ""}`}
            onClick={() => setToggle("android app")}
          >
            Others
          </button>
        </div>

        <div className="project-card-container">
          {(toggle === "All"
            ? projects
            : projects.filter((project) => project.category === toggle)
          ).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
