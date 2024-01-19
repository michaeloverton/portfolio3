export function Highlight(props) {
  return (
    <span
      style={{
        // backgroundColor: "#b1fc05",
        // mixBlendMode: "lighten",
        color: "#b1fc05",
      }}
    >
      <b>{props.children}</b>
    </span>
  );
}

export function BlackHighlight(props) {
  return (
    <span
      style={{
        color: "white",
        background: "black",
      }}
      className={props.className}
    >
      {props.children}
    </span>
  );
}

export function BlackDashedHighlight(props) {
  return (
    <span
      style={{
        // color: "white",
        // background: "black",
        border: "dashed",
      }}
      className={props.className}
    >
      {props.children}
    </span>
  );
}

export function BlackSolidHighlight(props) {
  return (
    <span
      style={{
        // color: "white",
        // background: "black",
        border: "solid",
      }}
      className={props.className}
    >
      {props.children}
    </span>
  );
}

export function MidSize(props) {
  return (
    <span
      style={{
        color: props.color,
        background: props.background,
      }}
    >
      <h2 style={{ fontSize: 20 }}>{props.children}</h2>
    </span>
  );
}

export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
