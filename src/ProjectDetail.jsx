
import { Link, useParams } from "react-router-dom";
import { projectJournal } from "./data/projectJournal";
import "./ProjectDetail.css";

function ContentBlock({ block }) {
  if (block.type === "paragraph") {
    return (
      <section className="journal-section">
        {block.heading && <h2>{block.heading}</h2>}
        <p>{block.text}</p>
      </section>
    );
  }

  if (block.type === "image") {
    return (
      <figure className="journal-figure">
        <img src={block.src} alt={block.caption || ""} />
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    );
  }

  if (block.type === "youtube") {
    const videoId = block.url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/
    )?.[1];

    if (!videoId) return null;

    return (
      <figure className="journal-figure">
        <div className="video-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={block.caption || "Project video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    );
  }

  if (block.type === "code") {
    return (
      <section className="journal-section">
        {block.heading && <h2>{block.heading}</h2>}
        <pre className="journal-code">
          <code>{block.code}</code>
        </pre>
      </section>
    );
  }

  if (block.type === "list") {
    return (
      <section className="journal-section">
        {block.heading && <h2>{block.heading}</h2>}
        <ul className="journal-list">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    );
  }

  if (block.type === "note") {
    return (
      <aside className="journal-note">
        {block.title && <strong>{block.title}</strong>}
        <p>{block.text}</p>
      </aside>
    );
  }

  return null;
}

export default function ProjectDetail() {
  const { projectId, weekSlug } = useParams();
  const project = projectJournal[projectId];

  if (!project) {
    return <main className="journal-not-found">Project not found.</main>;
  }

  const index = project.weeks.findIndex(
    (week) => week.slug === weekSlug
  );

  if (index === -1) {
    return <main className="journal-not-found">Week not found.</main>;
  }

  const week = project.weeks[index];
  const previous = project.weeks[index - 1];
  const next = project.weeks[index + 1];

  return (
    <main className="journal-page">
      <header className="journal-header">
        <Link to="/" className="journal-back">
          ← Back to portfolio
        </Link>
        <p className="journal-eyebrow">ENGINEERING JOURNAL</p>
        <h1>{project.title}</h1>
        <p className="journal-subtitle">{project.subtitle}</p>
      </header>

      <div className="journal-layout">
        <aside className="journal-toc">
          <p>PROJECT LOG</p>
          {project.weeks.map((item, i) => (
            <Link
              key={item.slug}
              to={`/projects/${projectId}/${item.slug}`}
              className={`journal-toc-link ${
                i === index ? "active" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </aside>

        <article className="journal-article">
          <p className="journal-week">
            {week.date} · {index + 1} of {project.weeks.length}
          </p>
          <h2 className="journal-title">{week.title}</h2>

          {week.blocks.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}

          <nav className="journal-pagination">
            {previous ? (
              <Link
                className="journal-page-link"
                to={`/projects/${projectId}/${previous.slug}`}
              >
                <span>← Previous</span>
                <strong>{previous.title}</strong>
              </Link>
            ) : <span />}

            {next && (
              <Link
                className="journal-page-link next"
                to={`/projects/${projectId}/${next.slug}`}
              >
                <span>Next →</span>
                <strong>{next.title}</strong>
              </Link>
            )}
          </nav>
        </article>
      </div>
    </main>
  );
}
