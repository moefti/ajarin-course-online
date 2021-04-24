export default function Wrapper(props) {
  return (
    <div className="mx-auto w-11/12 container-content">{props.children}</div>
  );
}
