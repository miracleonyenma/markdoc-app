// ./components/Infobox.jsx

const Infobox = ({ type, title, children }) => {
  return (
    <div className={`info-box ${type}`}>
      <details>
        <summary>{title}</summary>
        <div>{children}</div>
      </details>
    </div>
  );
};

export default Infobox;
