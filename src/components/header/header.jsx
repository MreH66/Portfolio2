import c from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={c.mainHeaderDiv}>
        <p className={c.topText}>Self taught front-end web developer</p>
        <div className={c.nameDiv}>
          <h1 className={c.name}>Marko G.</h1>
        </div>
      </div>
    </>
  );
}
