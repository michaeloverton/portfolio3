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

export const clamp = (val, min, max) => Math.min(Math.max(val, min), max)