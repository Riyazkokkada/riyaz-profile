
import "../styles/globals.css";

export default function Home(){
  return (
    <div className="container">
      <h1>Riyaz K — DevOps Engineer</h1>

      <div className="card">
        <h2>Professional Summary</h2>
        <p>
          DevOps Engineer with 4+ years of experience building CI/CD pipelines,
          Kubernetes infrastructure and observability solutions.
        </p>
      </div>

      <div className="card">
        <h2>Tech I Know</h2>
        <div className="tech-grid">
          <div className="tech-item">Kubernetes</div>
          <div className="tech-item">Docker</div>
          <div className="tech-item">Containers</div>
          <div className="tech-item">CI/CD</div>
          <div className="tech-item">Jenkins</div>
          <div className="tech-item">Grafana</div>
          <div className="tech-item">Prometheus</div>
          <div className="tech-item">Git</div>
        </div>
      </div>

      <div className="card">
        <h2>Experience</h2>
        <p>DevOps Engineer — CGI (Apr 2022 – Present)</p>
        <ul>
          <li>Maintained CI/CD pipelines using Jenkins and GitLab.</li>
          <li>Deployed microservices to Kubernetes clusters.</li>
          <li>Implemented monitoring using Prometheus & Grafana.</li>
        </ul>
      </div>

      <div className="card">
        <h2>Contact</h2>
        <p>Email: raz.kokkada@gmail.com</p>
        <p>Location: Bengaluru, India</p>
      </div>
    </div>
  );
}
