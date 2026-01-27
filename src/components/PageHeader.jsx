export default function PageHeader({ title, description, image }) {
  return (
    <div
      className="page-header"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container page-header-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
